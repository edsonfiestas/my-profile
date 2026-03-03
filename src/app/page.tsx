import Link from "next/link";
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
    <div className="p-3 sm:p-5">
      <ProfileCard />
    </div>
  );
}
