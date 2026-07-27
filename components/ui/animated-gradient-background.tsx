"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from "next/image";

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
    <main className="relative w-full min-h-screen flex items-center justify-start p-6 md:p-16 overflow-hidden bg-slate-900">
      
      {/* 1. ẢNH NỀN (Ép hiển thị nguyên bản gốc 100%) */}
      <Image
        src="/img/nen_tot_nghiep.jpg" // <-- Bạn nhớ kiểm tra đúng tên ảnh nhé
        alt="Background"
        fill
        className="object-cover object-center z-0"
        quality={100}
        priority
        unoptimized
      />

      {/* 2. LỚP PHỦ GRADIENT (Tối ở bên trái để nổi chữ và mèo, mờ dần sang phải) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 md:via-black/50 to-transparent z-10 pointer-events-none"></div>

      {/* 3. NỘI DUNG CHÍNH (Đã bỏ hạt cát, tập trung vào Mèo và Chữ) */}
      <div className="relative z-30 w-full max-w-lg md:ml-10 lg:ml-20">
        <AnimatePresence mode="wait">
          {!submittedName ? (
            <motion.div
              key="input-step"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-left"
            >
              {/* BÉ MÈO Ở MÀN HÌNH NHẬP TÊN */}
              <div className="w-28 h-28 mb-2 relative">
                <DotLottieReact
                  src="https://lottie.host/8cf4ba71-e5fb-44f3-8134-178c4d389417/0CCsdcgNIP.json"
                  loop
                  autoplay
                />
              </div>

              <p className="text-xs uppercase tracking-widest text-pink-400 font-medium mb-2 drop-shadow-md">
                Lễ Tốt Nghiệp
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4 font-serif">
                Chào mừng!
              </h2>

              <p className="text-sm text-slate-300 drop-shadow mb-8 max-w-sm">
                Vui lòng nhập tên hoặc danh xưng của bạn để nhận thiệp mời tham dự buổi lễ nhé.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 max-w-sm relative">
                <input
                  type="text"
                  placeholder="Ví dụ: Anh Nam, Phương Linh..."
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 text-white placeholder-white/50 backdrop-blur-md transition-all"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium rounded-xl transition-all shadow-[0_0_15px_rgba(236,72,153,0.4)] active:scale-95"
                >
                  Mở Thiệp Mời ✨
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="card-step"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-left flex flex-col items-start"
            >
              {/* BÉ MÈO NGAY TRÊN CHỮ GRADUATION */}
              <div className="w-28 h-28 mb-0 relative">
                <DotLottieReact
                  src="https://lottie.host/8cf4ba71-e5fb-44f3-8134-178c4d389417/0CCsdcgNIP.json"
                  loop
                  autoplay
                />
              </div>

              <p className="text-xs uppercase tracking-widest text-pink-400 font-medium mb-2 drop-shadow-md">
                You're invited to my
              </p>

              <h1 className="text-5xl md:text-7xl font-serif text-white drop-shadow-lg mb-1">
                Graduation
              </h1>
              <h1 className="text-4xl md:text-6xl font-serif text-pink-300 drop-shadow-lg mb-10 italic">
                Ceremony
              </h1>

              <div className="mb-8 relative">
                <p className="text-sm text-slate-400 drop-shadow mb-1">Kính gửi:</p>
                <p className="text-3xl font-serif text-white pb-2 inline-block">
                  {submittedName}
                </p>
                <div className="w-full max-w-[200px] h-[1px] bg-gradient-to-r from-pink-400 to-transparent mt-1"></div>
              </div>

              <div className="flex flex-col space-y-2 mb-10 text-sm text-slate-300 drop-shadow-md border-l-2 border-pink-500 pl-4">
                <p>Khoa Công Nghệ Thông Tin — Trường ĐH Công Nghiệp TP.HCM</p>
                <p className="text-white font-medium">Chủ nhật, 09.08.2026 | 9:30 Sáng</p>
              </div>

              <button
                onClick={handleReset}
                className="text-xs text-white/40 hover:text-white underline transition-colors"
              >
                ← Nhập lại tên khác
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}