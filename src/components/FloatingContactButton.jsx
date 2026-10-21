import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { trackContact } from '../services/pixelService';

export default function FloatingContactButton() {
  const { lang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Tech Solutions BD WhatsApp: +66 64 710 9664
  const whatsappNumber = "66647109664";
  const defaultMessage = lang === 'bn'
    ? 'হ্যালো টেক সলিউশন বিডি, আমি অটোডেস্ক সফটওয়্যার সাবস্ক্রিপশন সংক্রান্ত তথ্য ও সহায়তা চাই।'
    : 'Hello Tech Solutions BD, I need assistance with Autodesk software subscriptions.';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Chat Popup Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 rounded-3xl bg-slate-900/95 backdrop-blur-xl border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-5 text-slate-200 animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400 bg-slate-800 shadow-inner flex items-center justify-center">
                <img
                  src="/avatar.png"
                  alt="Tech Solutions BD"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/logo-icon.png";
                  }}
                />
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>Tech Solutions BD</span>
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <div className="text-[10px] text-cyan-400 font-semibold">
                  WhatsApp Support
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3 rounded-2xl bg-white/5 border border-white/5 mb-4">
            <p className="text-xs text-slate-300 leading-relaxed">
              {lang === 'bn'
                ? 'অটোডেস্ক লাইসেন্স, ১ ও ৩ বছরের প্ল্যান বা অ্যাক্টিভেশন সংক্রান্ত যে কোনো সহায়তার জন্য আমাদের সাথে সরাসরি হোয়াটসঅ্যাপে চ্যাট করুন।'
                : 'Need assistance choosing AutoCAD, Revit, or collections? Chat directly with a specialist on WhatsApp.'}
            </p>
            <div className="mt-2 text-[10px] text-slate-400 italic">
              "Your Productivity. Our Solutions."
            </div>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContact('Floating_WhatsApp')}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপে মেসেজ পাঠান' : 'Chat on WhatsApp'}</span>
          </a>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <div className="relative group">
        {/* Tooltip on Desktop */}
        <div className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900 border border-cyan-400/30 text-cyan-300 text-xs font-semibold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {t?.floating?.tooltip || "Need help? Chat with us"}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 text-white flex items-center justify-center shadow-[0_4px_25px_rgba(16,185,129,0.5)] hover:scale-105 active:scale-95 transition-transform duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50"
          aria-label="Open WhatsApp Chat"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative">
              <MessageCircle className="w-7 h-7" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              </span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
