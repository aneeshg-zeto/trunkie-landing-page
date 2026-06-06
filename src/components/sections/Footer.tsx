import Link from 'next/link';
import {Twitter, Linkedin, Instagram} from 'lucide-react';

export function Footer() {
  const footerGroups = [
    {
      title: 'Product',
      links: ['Features', 'For Schools', 'Pricing', 'Roadmap'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Blog', 'Careers', 'Press', 'Contact'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Help Center', 'School Guide', 'API'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'DPDP Compliance'],
    },
  ];

  return (
    <footer className="bg-[#0A1628] pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-20">
          <div className="max-w-xs">
            <Link href="/" className="text-[28px] font-black text-yellow font-headline leading-none">
              Trunkie
            </Link>
            <p className="mt-4 text-white/45 font-body text-base leading-relaxed">
              One system for every school in Bharat.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-12">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h4 className="text-white font-black text-[13px] uppercase tracking-widest mb-6">{group.title}</h4>
                <ul className="flex flex-col gap-4">
                  {group.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-white/55 hover:text-white transition-colors text-sm font-body">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white/40 text-[13px] font-body">© 2025 Trunkie. All rights reserved.</div>

          <div className="text-white/40 text-[13px] font-body order-3 md:order-2">Made with care in India</div>

          <div className="flex items-center gap-6 order-2 md:order-3">
            {[Linkedin, Twitter, Instagram].map((Icon, i) => (
              <Link key={i} href="#" className="text-white/50 hover:text-white transition-colors">
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
