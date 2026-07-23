"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const SUBJECTS = [
  { value: "geral", label: "Informação Geral" },
  { value: "parcerias", label: "Parcerias Institucionais" },
  { value: "media", label: "Media & Imprensa" },
  { value: "destinos", label: "Sugerir um Destino" },
  { value: "suporte", label: "Suporte Técnico" },
];

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validate(data: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Campo obrigatório";
  if (!data.email.trim()) errors.email = "Campo obrigatório";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Email inválido";
  if (!data.subject) errors.subject = "Seleccione um assunto";
  if (!data.message.trim()) errors.message = "Campo obrigatório";
  else if (data.message.trim().length < 20) errors.message = "Mínimo de 20 caracteres";
  return errors;
}

const EMPTY: FormState = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <motion.div
        className="border border-primary bg-primary/5 p-12 flex flex-col items-center text-center"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        role="alert"
        aria-live="polite"
      >
        <span
          className="material-symbols-outlined text-primary text-[52px] block mb-6"
          style={{ fontVariationSettings: '"FILL" 1' }}
          aria-hidden="true"
        >
          check_circle
        </span>
        <h2 className="font-headline-sm text-headline-sm text-on-surface mb-3">
          Mensagem Enviada!
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-sm">
          Obrigado pelo contacto. A nossa equipa responderá em até 24 horas úteis.
        </p>
        <button
          onClick={() => { setStatus("idle"); setForm(EMPTY); setErrors({}); }}
          className="font-label-caps text-label-caps text-[11px] tracking-widest text-primary hover:underline"
        >
          ENVIAR OUTRA MENSAGEM
        </button>
      </motion.div>
    );
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full border px-4 py-3 font-body-md text-sm text-on-surface bg-background placeholder:text-on-surface-variant/40 outline-none focus:border-primary transition-colors ${
      errors[field] ? "border-error" : "border-savanna-sand"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">
        Formulário de Contacto
      </span>

      {/* Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant block mb-2"
        >
          NOME COMPLETO *
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="O seu nome"
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "error-name" : undefined}
          className={inputClass("name")}
        />
        {errors.name && (
          <p id="error-name" className="mt-1.5 font-label-caps text-[10px] tracking-widest text-error">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="contact-email"
          className="font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant block mb-2"
        >
          EMAIL *
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="email@exemplo.com"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "error-email" : undefined}
          className={inputClass("email")}
        />
        {errors.email && (
          <p id="error-email" className="mt-1.5 font-label-caps text-[10px] tracking-widest text-error">
            {errors.email}
          </p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="contact-subject"
          className="font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant block mb-2"
        >
          ASSUNTO *
        </label>
        <div className="relative">
          <select
            id="contact-subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "error-subject" : undefined}
            className={`${inputClass("subject")} appearance-none pr-10 ${!form.subject ? "text-on-surface-variant/40" : ""}`}
          >
            <option value="" disabled>Seleccione um assunto</option>
            {SUBJECTS.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
          <span
            className="material-symbols-outlined text-[18px] text-on-surface-variant absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          >
            expand_more
          </span>
        </div>
        {errors.subject && (
          <p id="error-subject" className="mt-1.5 font-label-caps text-[10px] tracking-widest text-error">
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant block mb-2"
        >
          MENSAGEM *
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={7}
          placeholder="Escreva a sua mensagem aqui…"
          maxLength={1000}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "error-message" : "message-count"}
          className={`${inputClass("message")} resize-none`}
        />
        <div className="flex justify-between items-center mt-1.5">
          {errors.message ? (
            <p id="error-message" className="font-label-caps text-[10px] tracking-widest text-error">
              {errors.message}
            </p>
          ) : (
            <span />
          )}
          <span
            id="message-count"
            className="font-label-caps text-[10px] tracking-widest text-on-surface-variant/50"
            aria-live="polite"
          >
            {form.message.length} / 1000
          </span>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="flex items-center justify-center gap-2 bg-primary text-white font-label-caps text-label-caps text-[11px] tracking-widest px-10 py-4 hover:bg-primary-container transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        aria-busy={status === "sending"}
      >
        {status === "sending" ? (
          <>
            <span className="material-symbols-outlined text-[16px] animate-spin" aria-hidden="true">
              progress_activity
            </span>
            A ENVIAR…
          </>
        ) : (
          <>
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">send</span>
            ENVIAR MENSAGEM
          </>
        )}
      </button>

      <p className="font-label-caps text-[10px] tracking-widest text-on-surface-variant/60">
        * Campos obrigatórios. Os seus dados são tratados de acordo com a nossa{" "}
        <a href="/privacidade" className="text-primary hover:underline">
          Política de Privacidade
        </a>
        .
      </p>
    </form>
  );
}
