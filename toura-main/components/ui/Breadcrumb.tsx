interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: Props) {
  return (
    <nav aria-label="Navegação estrutural" className="flex items-center gap-2 flex-wrap">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && (
              <span
                className="material-symbols-outlined text-[14px] text-on-surface-variant/50"
                aria-hidden
              >
                chevron_right
              </span>
            )}
            {item.href && !isLast ? (
              <a
                href={item.href}
                className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span
                className={`font-label-caps text-label-caps ${
                  isLast ? "text-on-surface" : "text-on-surface-variant"
                }`}
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
