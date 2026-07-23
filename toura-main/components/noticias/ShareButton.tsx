"use client";

interface Props {
  title: string;
  url: string;
}

export default function ShareButton({ title, url }: Props) {
  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(url);
      alert("Link copiado!");
    }
  }

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant hover:text-primary transition-colors border border-savanna-sand px-4 py-2.5 hover:border-primary"
    >
      <span className="material-symbols-outlined text-[16px]">share</span>
      PARTILHAR
    </button>
  );
}
