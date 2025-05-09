import type React from "react";

export const Header: React.FC = () => {
  return (
    <header className="w-full sticky top-0 z-20 bg-transparent text-zinc-100">
      <div className="flex flex-row-reverse items-center justify-between px-6 py-3">
        {/* Left - MENU */}
        <div className="flex items-center gap-2 text-lg cursor-pointer">
          <span className="text-white text-base">
            <svg className="inline-block mr-1" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect y="3" width="20" height="2" rx="1" fill="#638cce" />
              <rect y="9" width="20" height="2" rx="1" fill="#638cce" />
              <rect y="15" width="20" height="2" rx="1" fill="#638cce" />
            </svg>
            MENU
          </span>
        </div>
        {/* Center - Logo */}
        <div className="flex-1 flex justify-center">
          <a href="/">
            <img src="https://ext.same-assets.com/1105907383/3750819768.png" alt="Sign logo" className="h-8" />
          </a>
        </div>
        {/* Right - Language/Currency/Search/Cart */}
        <div className="flex flex-row items-center gap-4 rtl:gap-4">
          <span className="text-xs whitespace-nowrap opacity-70">Language: ENGLISH</span>
          <span className="text-xs whitespace-nowrap opacity-70">Currency: US Dollar</span>
          {/* Search icon */}
          <button className="focus:outline-none">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="9" cy="9" r="7" stroke="#638cce" strokeWidth="2"/><path d="M16 16L13.5 13.5" stroke="#638cce" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
          {/* Cart icon with 0 indicator */}
          <button className="relative focus:outline-none">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M5 5H15L14 14H6L5 5Z" stroke="#638cce" strokeWidth="2"/><circle cx="8.5" cy="16.5" r="1.5" fill="#638cce"/><circle cx="12.5" cy="16.5" r="1.5" fill="#638cce"/></svg>
            <span className="absolute -top-1 -right-1 bg-white text-primary rounded-full px-1 text-xs font-bold">0</span>
          </button>
        </div>
      </div>
    </header>
  );
};
