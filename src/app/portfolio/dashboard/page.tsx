"use client";

import Sidebar from "@/components/Sidebar";

const DashboardContent = () => {
  return (
    <>
      <div className="min-h-screen flex-1 overflow-hidden flex gap-4 p-4 bg-slate-300">
        <div className="min-h-screen flex-1 overflow-hidden flex gap-4">
          <Sidebar />
          <section className="flex-1 overflow-hidden h-[calc(100vh-(--spacing(8)))] rounded-lg flex flex-col gap-6">
            <div className="overflow-hidden bg-white rounded-2xl p-8 flex flex-col gap-10">
              cuerpo
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default DashboardContent;
