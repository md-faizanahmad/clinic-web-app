import { JSX } from "react";

type Props = {
  date: string;
  selected: boolean;
  onSelect: (date: string) => void;
};

export default function DateButton({
  date,
  selected,
  onSelect,
}: Props): JSX.Element {
  return (
    <button
      onClick={() => onSelect(date)}
      className={`py-3 cursor-pointer text-[10px] font-bold border transition-all ${
        selected
          ? "bg-sky-700 text-white border-sky-700"
          : "bg-slate-50 border-slate-100 text-slate-600"
      }`}
    >
      {new Date(date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
      })}
    </button>
  );
}
