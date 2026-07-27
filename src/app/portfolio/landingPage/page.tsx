"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import HeaderLanding from "@/components/HeaderLanding";
import BannerLanding from "@/components/BannerLanding";
import ServicesLanding from "@/components/ServicesLanding";

export default function LandingPage() {
  return (
    <div className="w-full h-full min-h-screen bg-linear-to-r from-[#0A0D20] to-[#110E23] text-slate-300">
      {" "}
      <div className="w-full h-full flex flex-col">
        <HeaderLanding />
        <BannerLanding />
        <ServicesLanding />
      </div>
    </div>
  );
}
