import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white/80 py-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-xs text-slate-500 md:flex-row">
        <p>© {new Date().getFullYear()} NexoSync · Desarrollo Web</p>
      </div>
    </footer>
  );
};

