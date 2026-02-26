import Header from "@/components/layout/Header";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Impact } from "@/components/sections/Impact";
import { Payment } from "@/components/sections/Payment";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { WhyChoose } from "@/components/sections/WhyChoose";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black overflow-x-hidden">
      <Header />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <TargetAudience />
        <Features />
        <Impact />
        <WhyChoose />
        <Payment />
      </main>
    </div>
  );
}
