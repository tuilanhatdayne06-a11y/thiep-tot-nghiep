"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import WelcomeScreen from "@/components/ui/welcome-screen";
import InvitationCard from "@/components/ui/invitation-card";

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
    <main className="w-full bg-black overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!submittedName ? (
          <WelcomeScreen 
            key="welcome"
            guestName={guestName} 
            setGuestName={setGuestName} 
            onSubmit={handleSubmit} 
          />
        ) : (
          <InvitationCard 
            key="invite"
            submittedName={submittedName} 
            onReset={handleReset} 
          />
        )}
      </AnimatePresence>
    </main>
  );
}