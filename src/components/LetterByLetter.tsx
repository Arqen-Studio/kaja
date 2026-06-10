type InViewOptions = { margin?: string };

type LetterByLetterProps = {
  text?: string;
  lines?: string[];
  className?: string;
  align?: "center" | "left" | "right";
  scrollToggle?: boolean;
  stagger?: number;
  lineStagger?: number;
  delayChildren?: number;
  inViewAmount?: number | "some" | "all";
  inViewMargin?: InViewOptions["margin"];
};

export function LetterByLetter({
  text = "",
  lines: linesProp,
  className,
  align = "center",
}: LetterByLetterProps) {
  const rows = linesProp?.length
    ? linesProp.map((l) => l.trim()).filter(Boolean)
    : text.split("\n").map((l) => l.trim()).filter(Boolean).length
      ? text.split("\n").map((l) => l.trim()).filter(Boolean)
      : [text];

  const alignClass =
    align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";

  return (
    <span className={["block w-full break-normal", alignClass, className].filter(Boolean).join(" ")}>
      {rows.map((line, i) => (
        <span key={i} className="block w-full">
          {line}
        </span>
      ))}
    </span>
  );
}
