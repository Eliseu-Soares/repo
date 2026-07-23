"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, scaleIn, stagger, viewportOnce } from "@/lib/motion";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-surface-container-low py-section-gap px-margin-desktop">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.h2
          className="font-headline-md text-headline-md mb-4 text-on-surface"
          variants={fadeUp}
        >
          Receba a Essência de Angola no seu Email
        </motion.h2>
        <motion.p
          className="font-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto"
          variants={fadeUp}
        >
          Subscreva a nossa newsletter para receber dicas exclusivas de viagem,
          novidades culturais e inspirações sobre os segredos mais bem guardados
          de Angola.
        </motion.p>

        <motion.div variants={scaleIn}>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.p
                key="thanks"
                className="font-label-caps text-label-caps text-primary tracking-widest"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                OBRIGADO! SERÁ CONTACTADO EM BREVE.
              </motion.p>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="O seu endereço de email"
                  className="flex-grow px-6 py-4 bg-white border border-savanna-sand rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all font-body-md"
                />
                <motion.button
                  type="submit"
                  className="bg-primary hover:bg-primary-container text-white px-10 py-4 font-label-caps text-label-caps tracking-widest transition-all rounded-lg shadow-md hover:shadow-lg duration-200"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  SUBSCREVER
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
