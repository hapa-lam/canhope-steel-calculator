import Link from "next/link";
import { contactConfig } from "@/config/contact";
import { calculatorPaths } from "@/config/seo";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto grid max-w-[1500px] gap-7 px-4 py-9 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div><p className="font-bold text-slate-950">CANHOPE STEEL</p><p className="mt-2 text-sm leading-6">Steel and fire protection material solutions for contractors, distributors and project buyers.</p></div>
        <div><p className="font-bold text-slate-950">Tools</p><div className="mt-2 space-y-2 text-sm"><Link className="block hover:text-[#0e5f9f]" href={calculatorPaths.home}>Full Steel Calculator</Link><Link className="block hover:text-[#0e5f9f]" href={calculatorPaths.pipeWeightCalculator}>Pipe Weight Calculator</Link></div></div>
        <div><p className="font-bold text-slate-950">Company</p><div className="mt-2 space-y-2 text-sm"><a className="block hover:text-[#0e5f9f]" href="https://canhopesteel.com/" target="_blank" rel="noopener noreferrer">Official Website</a><a className="block hover:text-[#0e5f9f]" href="https://canhopesteel.com/products/" target="_blank" rel="noopener noreferrer">Products</a></div></div>
        <div><p className="font-bold text-slate-950">Contact</p><div className="mt-2 space-y-2 text-sm"><a className="block hover:text-[#0e5f9f]" href={`https://wa.me/${contactConfig.whatsapp.linkNumber}`} target="_blank" rel="noopener noreferrer">WhatsApp</a><a className="block hover:text-[#0e5f9f]" href={`mailto:${contactConfig.email}`}>Email</a><p>{contactConfig.email}</p></div></div>
      </div>
      <div className="border-t border-slate-100 px-4 py-4 text-center text-xs text-slate-500">© 2026 CANHOPE STEEL. All rights reserved.</div>
    </footer>
  );
}
