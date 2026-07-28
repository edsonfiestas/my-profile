"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import LPHeader from "@/components/LPHeader";
import LPBanner from "@/components/LPBanner";
import LPServices from "@/components/LPServices";
import LPProjects from "@/components/LPProjects";
import LPNavMobile from "@/components/LPNavMobile";
import LPExperience from "@/components/LPExperience";
import LPFooter from "@/components/LPFooter";

export default function LandingPage() {
  return (
    <div className="relative w-full h-full min-h-screen bg-linear-to-r from-[#0A0D20] to-[#110E23] text-slate-300 pb-24 md:pb-0">
      {" "}
      <div className="w-full h-full flex flex-col">
        <LPHeader />
        <LPBanner />
        <LPServices />
        <LPProjects />
        <LPExperience />
        <LPFooter />
      </div>
      <LPNavMobile />
    </div>
  );
}
