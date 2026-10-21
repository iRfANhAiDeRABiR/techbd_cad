import React, { useState, useEffect } from 'react';
import Logo from './common/Logo';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe, ArrowRight, ShoppingBag, MessageCircle } from 'lucide-react';
import { trackInitiateCheckout, trackContact } from '../services/pixelService';

export default function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.products, href: "#collections" },
    { label: t.nav.collections, href: "#collections" },
    { label: t.nav.whyUs, href: "#why-us" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 py-2.5 shadow-md shadow-slate-900/5'
          : 'bg-white/85 backdrop-blur-md py-3.5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg flex items-center gap-2 group"
          >
            <Logo isDark={false} className="h-10 sm:h-11 lg:h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-100/80 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3">
            {/* WhatsApp Quick Chat */}
            <a
              href="https://wa.me/66647109664"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContact('Navbar_WhatsApp')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200/80 transition-all shadow-xs"
              title="WhatsApp Support"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-blue-600 transition-all"
              title="Toggle English / বাংলা"
              aria-label="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>{lang === 'en' ? 'বাংলা' : 'EN'}</span>
            </button>

            {/* Primary CTA: Order Now */}
            <a
              href="#order"
              onClick={(e) => {
                trackInitiateCheckout({ product: 'Autodesk All Apps', rawPrice: '649', quantity: 1 });
                handleNavClick(e, '#order');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:brightness-110 active:scale-95 transition-all"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{t.nav.getStarted}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://wa.me/66647109664"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContact('Navbar_Mobile_WhatsApp')}
              className="p-2 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold rounded-lg bg-slate-100 border border-slate-200 text-slate-700"
              aria-label="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>{lang === 'en' ? 'বাংলা' : 'EN'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-4 pt-3 pb-6 mt-3 space-y-3 animate-in slide-in-from-top duration-300 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 text-sm font-semibold text-slate-800 hover:text-blue-600 hover:bg-slate-100 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <a
              href="https://wa.me/66647109664"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContact('Mobile_Drawer_WhatsApp')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-300/80 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#order"
              onClick={(e) => {
                trackInitiateCheckout({ product: 'Autodesk All Apps', rawPrice: '649', quantity: 1 });
                handleNavClick(e, '#order');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/20"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{t.nav.getStarted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
