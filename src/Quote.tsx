export function LeftQuote() {
  return (
    <>
      <span
        style={{
          fontFamily: "math",
          fontSize: "xx-large",
          lineHeight: "24px",
          transform: "translateY(4px)",
        }}
        className="text-cyan-700 opacity-70 italic inline-block"
      >
        “
      </span>
      &nbsp;
    </>
  );
}

export function RightQuote() {
  return (
    <>
      &nbsp;
      <span
        style={{
          fontFamily: "math",
          fontSize: "xx-large",
          lineHeight: "24px",
          transform: "translateY(4px)",
        }}
        className="text-cyan-700 opacity-70 italic inline-block"
      >
        ”
      </span>
    </>
  );
}
export function Ellipsis() {
  return (
    <>
      &nbsp;
      <div
        style={{
          fontFamily: "math",
          fontSize: "xx-large",
          lineHeight: "24px",
          transform: "translateY(-4px)",
        }}
        className="text-cyan-700 opacity-70 italic block"
      >
        …
      </div>
      &nbsp;
    </>
  );
}

export function Separator() {
  return <div className="pb-12 print:hidden"></div>;
}

export function Url({
  href,
  children,
}: {
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 opacity-50 hover:opacity-100 hover:underline break-all cursor-pointer"
    >
      {children ? children : href}
    </a>
  );
}

export function APA({ children }: { children: React.ReactNode }) {
  return (
    <i className="text-neutral-500 wrap-break-word overflow-hidden">
      {children}
    </i>
  );
}

export function Quote({ children }: { children: React.ReactNode }) {
  return <div className="bg-neutral-500/10 p-2 rounded-lg">{children}</div>;
}
