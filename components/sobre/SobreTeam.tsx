"use client";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  bio: string;
}

export default function SobreTeam({ members }: { members: TeamMember[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map((member, i) => (
        <motion.article
          key={member.name}
          className="border border-savanna-sand p-8 hover:border-primary transition-colors"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        >
          <div
            className="w-14 h-14 bg-primary flex items-center justify-center text-white font-headline-sm text-[18px] font-bold mb-6 select-none"
            aria-hidden="true"
          >
            {member.initials}
          </div>
          <h3 className="font-headline-sm text-[17px] font-semibold text-on-surface mb-1">{member.name}</h3>
          <p className="font-label-caps text-label-caps text-[10px] tracking-widest text-secondary mb-4 uppercase">
            {member.role}
          </p>
          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{member.bio}</p>
        </motion.article>
      ))}
    </div>
  );
}
