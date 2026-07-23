interface Props {
  body: string;
}

export default function ArticleBody({ body }: Props) {
  const paragraphs = body.split("\n\n").filter(Boolean);

  return (
    <div className="prose prose-angola max-w-none">
      {paragraphs.map((para, i) => {
        if (para.startsWith("# ")) {
          return <h2 key={i} className="font-headline-sm text-[22px] font-bold text-on-surface mt-10 mb-4">{para.slice(2)}</h2>;
        }
        if (para.startsWith("## ")) {
          return <h3 key={i} className="font-headline-sm text-[18px] font-semibold text-on-surface mt-8 mb-3">{para.slice(3)}</h3>;
        }
        return (
          <p key={i} className="font-body-lg text-body-lg text-on-surface-variant leading-[1.85] mb-6">
            {para}
          </p>
        );
      })}
    </div>
  );
}
