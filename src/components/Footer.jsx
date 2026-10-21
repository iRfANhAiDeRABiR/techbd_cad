import React from 'react';
import Logo from './common/Logo';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Mail, MessageCircle, Phone, Lock, Sparkles } from 'lucide-react';
import { BkashLogo, NagadLogo, RocketLogo } from './common/PaymentLogos';
import { trackContact } from '../services/pixelService';

export default function Footer() {
  const { t } = useLanguage();

  const autodeskProductsList = [
    "AutoCAD",
    "Revit",
    "3ds Max",
    "Maya",
    "Fusion 360",
    "Civil 3D"
  ];

  const collectionsList = [
    "AEC Collection",
    "Product Design & Manufacturing Collection",
    "Media & Entertainment Collection"
  ];

  const supportLinks = [
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
    { label: "Order Support", href: "#order" },
    { label: "Why Us", href: "#why-us" },
    { label: "Terms & Privacy", href: "#security" }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo isDark={true} className="h-11 w-auto" />
            <p className="text-sm font-semibold text-cyan-400 italic">
              "{t.brandTagline}"
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t.footer.bio}
            </p>
            
            {/* Contact details */}
            <div className="pt-2 space-y-2 text-xs">
              <a
                href="tel:+8801641699879"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors font-mono"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+8801641699879 (Phone Support)</span>
              </a>
              <a
                href="mailto:Support@techsolutions.bd"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Support@techsolutions.bd</span>
              </a>
              <a
                href="https://wa.me/66647109664"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContact('Footer_WhatsApp')}
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Support</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold pt-1">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Official Autodesk Digital Subscriptions</span>
            </div>
          </div>

          {/* Col 2: Autodesk Products (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.colProducts}
            </h4>
            <ul className="space-y-2.5">
              {autodeskProductsList.map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#collections"
                    className="hover:text-cyan-400 transition-colors text-slate-400 hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Collections (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.colCollections}
            </h4>
            <ul className="space-y-2.5">
              {collectionsList.map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#collections"
                    className="hover:text-cyan-400 transition-colors text-slate-400 hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Support & Security (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.colSupport}
            </h4>
            <ul className="space-y-2.5 mb-6">
              {supportLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:text-cyan-400 transition-colors text-slate-400 hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>256-Bit SSL Encrypted Verification</span>
            </div>
          </div>

        </div>

        {/* Payment Gateways Bar */}
        <div className="py-6 border-b border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <span>Accepted Payment Methods:</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center h-8">
              <BkashLogo className="h-5 w-auto" />
            </div>
            <div className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center h-8">
              <NagadLogo className="h-5 w-auto" />
            </div>
            <div className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center h-8">
              <RocketLogo className="h-5 w-auto" />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Trademark Disclaimer */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-[11px] text-slate-400">
            {t.footer.copyright}
          </div>

          <div className="text-[10px] text-slate-500 max-w-2xl text-center md:text-right leading-normal">
            {t.footer.disclaimer}
          </div>
        </div>

      </div>
    </footer>
  );
}
