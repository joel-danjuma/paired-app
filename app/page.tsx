"use client";

import Cta from "@/components/cta";
import Hero from "../components/new-hero";
import Footer from "../components/footer";
import { Navbar } from "@/components/navbar";
import RecentlyAdded from "../components/recentlyAdded";

export default function Home() {
  return (
    <section>
      <Navbar />
      <Hero />
      <RecentlyAdded />
      <Cta />
      <Footer />
    </section>
  );
}
