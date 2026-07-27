"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface CardProps {
  submittedName: string;
  onReset: () => void;
}

export default function InvitationCard({ submittedName, onReset }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full flex flex-col"
    >
      {/* ================= KHU VỰC 1: LỜI NGỎ & CHẶNG ĐƯỜNG ================= */}
      <section className="relative w-full min-h-screen flex flex-col items-start justify-center py-16 px-6 md:px-16">
        {/* ĐÃ ĐỔI THÀNH 5.png */}
        <Image src="/img/5.png" alt="Background 2" fill className="object-cover object-[10%_center] md:object-center z-0" quality={100} priority unoptimized />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 md:via-black/60 to-transparent z-10 pointer-events-none"></div>

        <div className="relative z-30 flex flex-col items-start justify-center w-full max-w-4xl text-left md:ml-10 lg:ml-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-10 md:mb-12 w-full"
          >
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#c8a97e] font-semibold mb-3 md:mb-4">Lời Ngỏ</p>
            <p className="text-xs md:text-sm text-slate-200 leading-relaxed max-w-xl mb-5 font-light pr-4">
              Khoảnh khắc khoác lên mình bộ lễ phục cử nhân là dấu mốc khép lại hành trình giảng đường và mở ra một chương mới. Mình trân trọng kính mời <span className="font-medium text-[#c8a97e]">{submittedName}</span> đến chung vui trong ngày đặc biệt này, cùng lưu giữ khoảnh khắc đáng nhớ và sẻ chia niềm tự hào của một chặng đường đã qua.
            </p>
            <p className="text-xs text-slate-300 mb-1 font-light">Trân trọng kính mời,</p>
            <h2 className="text-2xl md:text-4xl font-serif italic text-white drop-shadow-md mt-2">
              Diễm Phúc
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-start justify-start gap-6 md:gap-10 w-full max-w-3xl text-left"
          >
            <div className="relative w-40 h-56 md:w-52 md:h-72 rounded-sm overflow-hidden shadow-2xl shrink-0 border border-white/10 bg-white/5">
              {/* ĐÃ ĐỔI THÀNH 5.png */}
              <Image src="/img/5.png" alt="Chân dung" fill className="object-cover" unoptimized />
            </div>
            <div className="flex-1 max-w-sm text-left">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#c8a97e] font-semibold mb-3">Chặng Đường</p>
              <h3 className="text-2xl md:text-3xl font-serif italic text-white mb-4 leading-snug">
                Những Năm Tháng <br className="hidden md:block" /> Đáng Nhớ
              </h3>
              <div className="flex justify-start gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-[#c8a97e] rotate-45 opacity-80"></span>
                <span className="w-1.5 h-1.5 bg-[#c8a97e] rotate-45 opacity-80"></span>
                <span className="w-1.5 h-1.5 bg-[#c8a97e] rotate-45 opacity-80"></span>
              </div>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light">
                Từ ngày đầu bỡ ngỡ bước vào giảng đường, đến hôm nay đứng trên bục nhận bằng — mỗi chặng đường là một mảnh ký ức không thể nào quên.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-70 flex flex-col items-center justify-center z-30">
          <p className="text-[10px] text-[#c8a97e] uppercase tracking-widest mb-2">Cuộn xuống</p>
          <span className="text-[#c8a97e] text-xl">↓</span>
        </div>
      </section>

      {/* ================= KHU VỰC 2: THÔNG TIN LỄ & BẢN ĐỒ ================= */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-16 px-6 md:px-16">
        {/* ĐÃ ĐỔI THÀNH 6.png */}
        <Image src="/img/6.png" alt="Background 3" fill className="object-cover object-[57%_center] md:object-center z-0" quality={100} unoptimized />
        <div className="absolute inset-0 bg-black/85 md:bg-black/80 z-10 pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-30 w-full max-w-2xl flex flex-col items-center text-center mx-auto"
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#c8a97e] font-semibold mb-6">
            Thông Tin Buổi Lễ
          </p>
          <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-12">Save The Date</h2>
          
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 text-center w-full justify-center mb-12 items-center">
            <div className="flex-1">
              <p className="text-[#c8a97e] uppercase tracking-widest text-[10px] mb-3 font-medium">Thời gian</p>
              <p className="text-white text-2xl font-serif mb-2">14:00</p>
              <p className="text-slate-300 text-sm">30.07.2026</p>
            </div>
            
            <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-[#c8a97e]/50 to-transparent"></div>
            <div className="block md:hidden w-20 h-px bg-gradient-to-r from-transparent via-[#c8a97e]/50 to-transparent"></div>

            <div className="flex-1">
              <p className="text-[#c8a97e] uppercase tracking-widest text-[10px] mb-3 font-medium">Địa điểm</p>
              <p className="text-white text-2xl font-serif mb-2">HỘI TRƯỜNG B</p>
              <p className="text-slate-300 text-sm">TRƯỜNG ĐẠI HỌC QUY NHƠN<br/>170 An Dương Vương, phường Quy Nhơn Nam</p>
            </div>
          </div>

          <a 
            href="https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+H%E1%BB%8Dc+Quy+Nh%C6%A1n/@13.7589597,109.215277,17z/data=!3m1!4b1!4m6!3m5!1s0x316f6cebf252c49f:0xa83caa291737172f!8m2!3d13.7589597!4d109.2178573!16s%2Fg%2F120ylnmc?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D +"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-[#c8a97e] text-[#c8a97e] hover:bg-[#c8a97e] hover:text-black transition-all rounded-sm text-[10px] uppercase tracking-widest font-medium tracking-[0.2em]"
          >
            Xem Bản Đồ
          </a>
        </motion.div>
      </section>
    </motion.div>
  );
}