"use client";

import { Pillars } from "@/components/Pillars";
import { motion } from "framer-motion";

export function About() {
  return (
    <motion.section
      id="about"
      className="relative border-t border-neutral py-24 md:py-32"
      initial={{ backgroundColor: "#ffffff" }}
      whileInView={{ backgroundColor: "#fce4ec" }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 1.0, ease: "easeInOut" }}
    >
      <div className="shell">
        <Pillars />
      </div>
    </motion.section>
  );
}

