import React, { useEffect } from "react";

const Toast = ({ message, type = "success", onClose, duration = 3000 }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div
      className={`fixed top-8 right-8 z-50 px-6 py-3 rounded shadow-lg transition-all flex items-center gap-2
        ${type === "success"
          ? "bg-[#50c878] text-white border border-[#38a169]"
          : "bg-red-500 text-white border border-red-700"}
      `}
      style={{ minWidth: 220, fontWeight: 500, fontSize: '1rem', letterSpacing: '0.01em' }}
    >
      {type === "success" ? (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
      ) : (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
      )}
      <span>{message}</span>
      <button onClick={onClose} className="ml-2 text-lg font-bold focus:outline-none">×</button>
    </div>
  );
};

export default Toast;
