
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
    <div className="bg-white border-y border-border py-8">
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
