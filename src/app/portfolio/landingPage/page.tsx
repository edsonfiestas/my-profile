"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import HeaderLanding from "@/components/HeaderLanding";
import BannerLanding from "@/components/BannerLanding";
import ServicesLanding from "@/components/ServicesLanding";
import ProjectsLanding from "@/components/ProjectsLanding";
import NavMobileLanding from "@/components/NavMobileLanding";

export default function LandingPage() {
  return (
    <div className="relative w-full h-full min-h-screen bg-linear-to-r from-[#0A0D20] to-[#110E23] text-slate-300 pb-24 md:pb-0">
      {" "}
      <div className="w-full h-full flex flex-col">
        <HeaderLanding />
        <BannerLanding />
        <ServicesLanding />
        <ProjectsLanding />
      </div>
      <NavMobileLanding />
    </div>
  );
}
