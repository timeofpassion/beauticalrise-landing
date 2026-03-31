interface SystemCodeProps {
  text: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const positionClasses: Record<string, string> = {
  "top-left": "top-24 left-6 md:left-10",
  "top-right": "top-24 right-6 md:right-10",
  "bottom-left": "bottom-36 left-6 md:left-10",
  "bottom-right": "bottom-36 right-6 md:right-10",
};

export default function SystemCode({ text, position }: SystemCodeProps) {
  return (
    <span
      className={`absolute font-mono text-[10px] text-brand-500 opacity-40 tracking-widest hidden md:block ${positionClasses[position]}`}
    >
      {text}
    </span>
  );
}
