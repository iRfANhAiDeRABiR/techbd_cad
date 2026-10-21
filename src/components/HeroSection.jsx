import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import AutodeskHeroVisual from './AutodeskHeroVisual';
import { Check, ArrowRight, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { trackContact } from '../services/pixelService';

export default function HeroSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 text-slate-900">
      {/* Subtle Background Glows */}
      <div className="ambient-glow-blue -top-24 -left-24 opacity-30 pointer-events-none"></div>
      <div className="ambient-glow-cyan top-48 -right-24 opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Hero Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tagline / Brand Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase border border-cyan-300 bg-cyan-50 text-cyan-800 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-600 animate-ping"></span>
              <span className="font-semibold">Tech Solutions BD</span>
              <span className="text-cyan-400">&bull;</span>
              <span className="text-cyan-700 font-medium lowercase first-letter:uppercase">Your Productivity. Our Solutions.</span>
            </div>

            {/* Main Heading with Highlight */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              {t.hero.titleStart}{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent block sm:inline">
                {t.hero.titleHighlight}
              </span>{' '}
              {t.hero.titleEnd}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mb-8">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#collections"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white shadow-lg shadow-blue-500/20 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>{t.hero.primaryCta}</span>
              </a>

              <a
                href="https://wa.me/66647109664"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContact('Hero_WhatsApp')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 transition-all duration-200 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 hover:text-slate-900 transition-all duration-200 shadow-xs"
              >
                <span>{t.hero.secondaryCta}</span>
              </a>
            </div>

            {/* Trust Points Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200 w-full">
              {t.hero.trustChecklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: Custom Autodesk Interface Visual Composition */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <AutodeskHeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
