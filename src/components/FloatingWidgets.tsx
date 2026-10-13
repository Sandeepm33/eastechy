import { HelpCircle } from 'lucide-react';

interface FloatingWidgetsProps {
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
  onOpenContactModal: () => void;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({
  onOpenContactModal,
}) => {
  return (
    <>

      {/* 2. Floating Social Icons at Middle-Left matching Shiftwave .share-button */}
      <div className="fixed left-0 top-[calc(50%-80px)] z-40 hidden sm:flex flex-col">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 hover:w-[50px] bg-[#3b5998] text-white flex items-center justify-center transition-all duration-200 text-xs font-bold"
          title="Facebook"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
          </svg>
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 hover:w-[50px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center transition-all duration-200 text-xs font-bold"
          title="Instagram"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>

        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 hover:w-[50px] bg-black text-white flex items-center justify-center transition-all duration-200 text-xs font-bold"
          title="X / Twitter"
        >
          <span className="font-extrabold text-sm">𝕏</span>
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 hover:w-[50px] bg-[#0e76a8] text-white flex items-center justify-center transition-all duration-200 text-xs font-bold"
          title="LinkedIn"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </div>

      {/* 3. Floating "Get in Touch" Pill at Bottom-Right matching Shiftwave .fltbtnbtm */}
      <button
        onClick={onOpenContactModal}
        className="fixed right-6 bottom-6 z-50 px-5 py-2.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-xs sm:text-sm tracking-wide shadow-xl shadow-[#2563EB]/30 flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 active:scale-95"
      >
        <span>Get in Touch</span>
        <HelpCircle className="w-4 h-4" />
      </button>
    </>
  );
};
