"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import HeaderEcomerce from "@/components/HeaderEcomerce";

export default function EcomerceBlogPage() {
  return (
    <div className="flex flex-col h-screen w-full text-slate-600">
      <HeaderEcomerce />
      Blog
    </div>
  );
}
