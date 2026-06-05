'use server';
/**
 * @fileOverview A Genkit flow for generating curriculum-aligned examination papers.
 *
 * - generateExamPaper - A function that handles the exam paper generation process.
 * - GenerateExamPaperInput - The input type for the generateExamPaper function.
 * - GenerateExamPaperOutput - The return type for the generateExamPaper function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateExamPaperInputSchema = z.object({
  topics: z
    .array(z.string())
    .min(1)
    .describe('List of topics the exam paper should cover.'),
  difficulty: z
    .enum(['Easy', 'Medium', 'Hard'])
    .describe('The difficulty level of the exam paper.'),
  gradeLevel: z
    .string()
    .describe('The academic grade level for which the exam is intended (e.g., "5th Grade", "High School Biology").'),
  numberOfQuestions: z
    .number()
    .int()
    .min(1)
    .max(20)
    .describe('The desired number of questions in the exam paper (1-20).'),
});
export type GenerateExamPaperInput = z.infer<typeof GenerateExamPaperInputSchema>;

const QuestionSchema = z.object({
  questionText: z.string().describe('The text of the question.'),
  questionType: z
    .enum(['Multiple Choice', 'Short Answer', 'True/False'])
    .describe('The type of question.'),
  options: z
    .array(z.string())
    .optional()
    .describe('For multiple choice questions, the list of possible options (usually 4).'),
  answer: z.string().describe('The correct answer to the question.'),
});

const GenerateExamPaperOutputSchema = z.object({
  title: z.string().describe('The title of the exam paper.'),
  instructions: z.string().describe('General instructions for the exam paper.'),
  questions: z.array(QuestionSchema).describe('An array of generated questions.'),
});
export type GenerateExamPaperOutput = z.infer<typeof GenerateExamPaperOutputSchema>;

export async function generateExamPaper(
  input: GenerateExamPaperInput
): Promise<GenerateExamPaperOutput> {
  return generateExamPaperFlow(input);
}

const generateExamPaperPrompt = ai.definePrompt({
  name: 'generateExamPaperPrompt',
  input: {schema: GenerateExamPaperInputSchema},
  output: {schema: GenerateExamPaperOutputSchema},
  prompt: `You are an AI assistant specialized in generating curriculum-aligned examination papers.
Your task is to create an exam paper based on the provided details.

Topics: {{{topics}}}
Difficulty: {{{difficulty}}}
Grade Level: {{{gradeLevel}}}
Number of Questions: {{{numberOfQuestions}}}

Generate an exam paper in JSON format according to the output schema.
For multiple-choice questions, provide 4 distinct options.
Ensure the questions are relevant to the specified topics and grade level, and accurately match the desired difficulty.
`,
});

const generateExamPaperFlow = ai.defineFlow(
  {
    name: 'generateExamPaperFlow',
    inputSchema: GenerateExamPaperInputSchema,
    outputSchema: GenerateExamPaperOutputSchema,
  },
  async input => {
    const {output} = await generateExamPaperPrompt(input);
    return output!;
  }
);
