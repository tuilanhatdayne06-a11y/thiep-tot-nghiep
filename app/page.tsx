"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import { DotLottieReact } from '@lottiefiles/dotlottie-react'; // Đã thêm import con mèo

export default function GraduationInvitationPage() {
  const [guestName, setGuestName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestName.trim()) {
      setSubmittedName(guestName.trim());
    }
  };

  const handleReset = () => {
    setSubmittedName("");
    setGuestName("");
  };

  return (
    <main className="relative w-full min-h-screen overflow-hidden flex items-center justify-center p-4">
      {/* Nền động chuyển màu */}
      <AnimatedGradientBackground Breathing={true} animationSpeed={0.03} />

      <div className="relative z-10 w-full max-w-md">
        <AnimatePresence mode="wait">
          {!submittedName ? (
            /* MÀN HÌNH 1: NHẬP TÊN CÓ CON MÈO */
            <motion.div
              key="input-step"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-transparent backdrop-blur-2xl p-6 md:p-8 rounded-[2rem] shadow-2xl text-center border border-white/20"
            >
              {/* KHU VỰC HIỂN THỊ CON MÈO */}
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-2">
                <DotLottieReact
                  src="https://lottie.host/8cf4ba71-e5fb-44f3-8134-178c4d389417/0CCsdcgNIP.json"
                  loop
                  autoplay
                />
              </div>

              <span className="inline-block bg-slate-100 text-slate-700 font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-widest mb-3">
                Lễ Tốt Nghiệp
              </span>
              <h2 className="text-2xl font-bold text-slate-800 mb-2 font-serif">
                Chào mừng bạn!
              </h2>
              <p className="text-sm text-slate-500 mb-6">
                Vui lòng nhập tên hoặc danh xưng của bạn để nhận thiệp mời riêng nhé:
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Ví dụ: Anh Nam, Phương Linh..."
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  required
                  className="w-full px-4 py-3 text-center border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all text-slate-800 placeholder-slate-400"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium rounded-xl transition-all shadow-lg active:scale-95"
                >
                  Mở Thiệp Mời ✨
                </button>
              </form>
            </motion.div>
          ) : (
            /* MÀN HÌNH 2: PHONG BÌ THIỆP MỜI */
            <motion.div
              key="card-step"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-transparent backdrop-blur-2xl p-6 md:p-8 rounded-[2rem] shadow-2xl text-center border border-white/20"
            >
              <div className="mb-4">
                <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">
                  THIỆP MỜI THAM DỰ
                </p>
                <h1 className="text-4xl font-serif text-slate-900 mt-1 italic">
                  Graduation Ceremony
                </h1>
              </div>

              <div className="relative w-full h-52 bg-[#e2ded8] rounded-xl overflow-hidden my-6 shadow-inner flex items-end justify-center pb-4">
                <div
                  className="absolute top-0 left-0 w-0 h-0 border-l-[180px] border-r-[180px] border-t-[105px] border-l-transparent border-r-transparent border-t-[#1a2332] z-10"
                  style={{
                    borderLeftWidth: "calc(100vw / 2)",
                    borderRightWidth: "calc(100vw / 2)",
                  }}
                />

                <div className="relative z-20 bg-white px-6 py-2.5 rounded-lg shadow-md border border-slate-100">
                  <span className="text-xs text-slate-400 mr-1">Kính gửi:</span>
                  <strong className="text-slate-900 font-semibold font-serif text-lg">
                    {submittedName}
                  </strong>
                </div>
              </div>

              <p className="text-xs text-slate-400 italic mb-4">
                — Chạm vào phong bì để xem chi tiết buổi lễ —
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}