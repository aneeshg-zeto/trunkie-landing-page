
'use client';

export function Testimonials() {
  const reviews = [
    {
      quote:
        'Trunkie replaced four tools we were using. Our admin team now spends half the time on paperwork. That time goes back to students.',
      name: 'Priya Sharma',
      role: 'Principal, DPS Hyderabad',
      initials: 'PS',
      highlight: true,
    },
    {
      quote:
        'The fee collection alone was worth it. Parents pay online, we track everything in one place. No more chasing.',
      name: 'Rajesh Kumar',
      role: 'Administrator, Ryan International Mumbai',
      initials: 'RK',
    },
    {
      quote:
        'I can see how every student in my class is doing, without opening five different files. That changes everything.',
      name: 'Anita Reddy',
      role: 'Class Teacher, Podar World School',
      initials: 'AR',
    },
  ];

  return (
    <section className="bg-white py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-headline font-black text-[32px] md:text-[42px] text-navy mb-20">
          What school leaders say.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-10 border border-border flex flex-col justify-between ${
                rev.highlight ? 'border-l-4 border-l-yellow' : ''
              }`}
            >
              <p className="text-navy italic font-bold text-lg leading-[1.65] font-headline">"{rev.quote}"</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow flex items-center justify-center text-navy font-black text-sm font-headline">
                  {rev.initials}
                </div>
                <div>
                  <div className="text-navy font-black text-sm font-headline">{rev.name}</div>
                  <div className="text-muted font-body text-[13px]">{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
