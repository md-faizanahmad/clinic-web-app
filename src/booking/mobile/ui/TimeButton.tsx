import { JSX } from "react";

type Props = {
  time: string;
  selected: boolean;
  onSelect: (time: string) => void;
};

export default function TimeButton({
  time,
  selected,
  onSelect,
}: Props): JSX.Element {
  return (
    <button
      onClick={() => onSelect(time)}
      className={`py-3 cursor-pointer text-[10px] font-bold border transition-all ${
        selected
          ? "bg-sky-700 text-white border-sky-700"
          : "bg-slate-50 border-slate-100 text-slate-600"
      }`}
    >
      {time}
    </button>
  );
}
