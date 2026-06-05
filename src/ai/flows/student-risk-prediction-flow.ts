'use server';
/**
 * @fileOverview A Genkit flow for identifying students at risk of attendance issues or academic decline.
 *
 * - predictStudentRisk - A function that handles the student risk prediction process.
 * - StudentRiskPredictionInput - The input type for the predictStudentRisk function.
 * - StudentRiskPredictionOutput - The return type for the predictStudentRisk function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema
const StudentDataSchema = z.object({
  id: z.string().describe('Unique identifier for the student.'),
  name: z.string().describe('The full name of the student.'),
  gradeLevel: z.number().describe('The current grade level of the student (e.g., 5, 8, 10).'),
  attendancePercentageLastMonth: z.number().min(0).max(100).describe('Student attendance percentage over the last month.'),
  averageGradeLastQuarter: z.number().min(0).max(100).describe('Student average academic grade percentage over the last quarter.'),
  disciplinaryIncidentsLastQuarter: z.number().min(0).describe('Number of disciplinary incidents reported for the student in the last quarter.'),
  teacherObservations: z.string().optional().describe('Concise notes or observations from the student\'s teacher.'),
});

const StudentRiskPredictionInputSchema = z.object({
  students: z.array(StudentDataSchema).describe('An array of student data to be analyzed for risk.'),
});

export type StudentRiskPredictionInput = z.infer<typeof StudentRiskPredictionInputSchema>;

// Output Schema
const AtRiskStudentSchema = z.object({
  id: z.string().describe('Unique identifier for the student.'),
  name: z.string().describe('The full name of the student.'),
  riskCategory: z.enum(['High Risk', 'Medium Risk', 'Low Risk', 'No Apparent Risk']).describe('Categorization of the student\'s risk level.'),
  riskFactors: z.array(z.string()).describe('A list of specific factors contributing to the student\'s risk (e.g., "low_attendance", "academic_decline", "behavioral_issues").'),
  reasoning: z.string().describe('A detailed explanation of why the student is identified as at-risk, referencing specific data points.'),
  suggestedAction: z.string().describe('Specific, actionable recommendations for intervention (e.g., "Schedule parent meeting to discuss attendance", "Offer tutoring in Math and Science", "Monitor behavior closely and provide mentorship").'),
});

const StudentRiskPredictionOutputSchema = z.object({
  atRiskStudents: z.array(AtRiskStudentSchema).describe('A list of students identified as being at risk.'),
  summary: z.string().optional().describe('A brief summary of the overall risk assessment.'),
});

export type StudentRiskPredictionOutput = z.infer<typeof StudentRiskPredictionOutputSchema>;

// Wrapper function
export async function predictStudentRisk(input: StudentRiskPredictionInput): Promise<StudentRiskPredictionOutput> {
  return studentRiskPredictionFlow(input);
}

// Prompt definition
const studentRiskPrompt = ai.definePrompt({
  name: 'studentRiskPredictionPrompt',
  input: { schema: StudentRiskPredictionInputSchema },
  output: { schema: StudentRiskPredictionOutputSchema },
  prompt: `You are GyanI, an AI assistant for school administrators at Trunkie, India's leading school management platform.
Your task is to analyze the provided student data and proactively identify students who show early signs of attendance issues or academic decline, or behavioral concerns, so that administrators can intervene promptly and provide targeted support.

Identify students as 'High Risk' if they have significant and immediate concerns (e.g., attendance below 75%, average grade below 50%, or multiple disciplinary incidents).
Identify students as 'Medium Risk' if they show concerning trends that require attention (e.g., attendance between 75-85%, average grade between 50-65%, or a single recent disciplinary incident).
Identify students as 'Low Risk' if there are minor issues that warrant monitoring but not immediate intervention (e.g., attendance slightly below average, minor dip in grades).
If no significant concerns are present, classify them as 'No Apparent Risk'.

For each at-risk student, specify the riskFactors (e.g., "low_attendance", "academic_decline", "behavioral_issues"), provide specific reasoning based on the data and a clear, actionable suggested intervention.

Student Data:
{{#each students}}
  - ID: {{{this.id}}}
  - Name: {{{this.name}}}
  - Grade Level: {{{this.gradeLevel}}}
  - Attendance Last Month: {{{this.attendancePercentageLastMonth}}}%
  - Average Grade Last Quarter: {{{this.averageGradeLastQuarter}}}%
  - Disciplinary Incidents Last Quarter: {{{this.disciplinaryIncidentsLastQuarter}}}
  {{#if this.teacherObservations}}
  - Teacher Observations: {{{this.teacherObservations}}}
  {{/if}}
{{/each}}`,
});

// Flow definition
const studentRiskPredictionFlow = ai.defineFlow(
  {
    name: 'studentRiskPredictionFlow',
    inputSchema: StudentRiskPredictionInputSchema,
    outputSchema: StudentRiskPredictionOutputSchema,
  },
  async (input) => {
    const {output} = await studentRiskPrompt(input);
    return output!;
  }
);
