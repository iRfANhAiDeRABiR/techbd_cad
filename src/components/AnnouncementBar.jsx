import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, Mail, Phone } from 'lucide-react';
import { trackContact } from '../services/pixelService';

export default function AnnouncementBar() {
  const { lang, t } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-2 px-3 sm:px-4 text-xs border-b border-cyan-500/20 shadow-xs relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        
        {/* Left: Brand & Tagline */}
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            Tech Solutions BD
          </span>
          <span className="hidden md:inline text-slate-300 text-[11px] font-medium">
            Your Productivity. Our Solutions.
          </span>
          <span className="hidden lg:inline text-slate-500">&bull;</span>
          <span className="text-slate-200 text-[11px] font-normal truncate">
            {t.announcement}
          </span>
        </div>

        {/* Right: Quick Channels */}
        <div className="hidden sm:flex items-center gap-3 text-[11px]">
          <a
            href="tel:+8801641699879"
            className="flex items-center gap-1 text-slate-300 hover:text-cyan-300 font-mono transition-colors"
            title="Call Support (+8801641699879)"
          >
            <Phone className="w-3 h-3 text-cyan-400" />
            <span>+8801641699879</span>
          </a>
          <span className="text-slate-600">|</span>
          <a
            href="mailto:Support@techsolutions.bd"
            className="flex items-center gap-1 text-slate-300 hover:text-cyan-300 font-mono transition-colors"
          >
            <Mail className="w-3 h-3 text-cyan-400" />
            <span>Support@techsolutions.bd</span>
          </a>
          <span className="text-slate-600">|</span>
          <a
            href="https://wa.me/66647109664"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContact('AnnouncementBar_WhatsApp')}
            className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
            title="WhatsApp Support"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
