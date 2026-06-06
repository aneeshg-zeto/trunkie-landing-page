
export function TrustBar() {
  const schools = [
    'DPS Hyderabad',
    'Kendriya Vidyalaya',
    'Ryan International',
    'Podar World School',
    'DAV Public School',
    'Narayana Group',
  ];

  return (
    <div className="relative z-10 bg-white rounded-t-[2.5rem] md:rounded-t-[4rem] pt-12 md:pt-14 pb-8 shadow-[0_-8px_40px_rgba(15,31,61,0.04)]">
      <div className="container mx-auto px-6">
        <p className="text-center text-[12px] font-bold text-muted uppercase tracking-[0.2em] mb-6">
          Trusted by schools across Bharat
        </p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {schools.map((school) => (
            <span key={school} className="text-sm md:text-base font-semibold text-[#B0B8C8] font-body">
              {school}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
