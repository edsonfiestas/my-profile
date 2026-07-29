"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function LpPlus() {
  return (
    <div className="w-full h-full min-h-screen bg-linear-to-br from-slate-700 to-slate-900 relative font-body text-lg text-slate-400">
      <h1 className="font-heading text-6xl text-slate-200">Edson Fiestas</h1>
      <h2 className="font-heading text-4xl text-slate-200">
        Desarrollador Web
      </h2>
      <h3 className="font-heading text-2xl text-slate-200">LpPlus</h3>
      <Link href="/portfolio">Back</Link>
    </div>
  );
}
