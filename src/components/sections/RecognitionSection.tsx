
export function RecognitionSection() {
  const logos = ['Google for Startups', 'DPIIT Recognised', 'Startup India'];

  return (
    <section className="bg-mist py-24">
      <div className="container mx-auto px-6">
        <h3 className="text-center font-headline font-black text-navy text-2xl md:text-[32px] mb-12">
          Recognised by organisations you can trust.
        </h3>
        <div className="flex flex-wrap justify-center gap-6 md:gap-16">
          {logos.map((logo) => (
            <div
              key={logo}
              className="bg-white/50 border border-border rounded-xl px-12 py-6 text-center text-muted font-bold font-body shadow-sm"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
