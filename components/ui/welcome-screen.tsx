"use client";

import React from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from "next/image";

interface WelcomeProps {
  guestName: string;
  setGuestName: (name: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function WelcomeScreen({ guestName, setGuestName, onSubmit }: WelcomeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full min-h-screen flex items-center justify-start p-6 md:p-16"
    >
      {/* ẢNH NỀN 1 */}
      <Image src="/img/dp1.png" alt="Background 1" fill className="object-cover object-center z-0" quality={100} priority unoptimized />
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 md:via-black/60 to-transparent z-10 pointer-events-none"></div>

      {/* NỘI DUNG MÀN HÌNH 1 (Đã đổi màu sang vàng đồng #c8a97e) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-30 w-full max-w-lg md:ml-10 lg:ml-20 text-left"
      >
        <div className="w-28 h-28 mb-2 relative">
          <DotLottieReact src="https://lottie.host/8cf4ba71-e5fb-44f3-8134-178c4d389417/0CCsdcgNIP.json" loop autoplay />
        </div>
        
        {/* Đổi chữ "Lễ Tốt Nghiệp" sang màu vàng đồng */}
        <p className="text-xs uppercase tracking-[0.2em] text-[#c8a97e] font-semibold mb-2 drop-shadow-md">
          Lễ Tốt Nghiệp
        </p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4 font-serif">
          Chào mừng!
        </h2>
        
        <p className="text-sm text-slate-300 drop-shadow mb-8 max-w-sm font-light">
          Vui lòng nhập tên hoặc danh xưng của bạn để nhận thiệp mời tham dự buổi lễ nhé.
        </p>

        <form onSubmit={onSubmit} className="space-y-4 max-w-sm relative">
          {/* Ô nhập tên: Đổi màu nền, viền và placeholder sang tone vàng đồng tối */}
          <input
            type="text"
            placeholder="Ví dụ: Anh Nam, Phương Linh..."
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            required
            className="w-full px-4 py-3 bg-[#c8a97e]/10 border border-[#c8a97e]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c8a97e] focus:bg-[#c8a97e]/20 text-white placeholder-[#c8a97e]/50 backdrop-blur-md transition-all shadow-[0_0_15px_rgba(200,169,126,0.1)]"
          />
          
          {/* Nút bấm: Đổi từ hồng/tím sang nền vàng đồng sang trọng */}
          <button 
            type="submit" 
            className="w-full py-3 bg-[#c8a97e] hover:bg-[#b8996e] text-black font-medium tracking-widest uppercase text-xs rounded-xl transition-all shadow-[0_0_15px_rgba(200,169,126,0.3)] active:scale-95"
          >
            Mở Thiệp Mời ✨
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}