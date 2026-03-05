type Props = {
  time: string;
  selected: boolean;
  onSelect: (time: string) => void;
};

export default function TimeSlotButton({ time, selected, onSelect }: Props) {
  return (
    <button
      type="button"
      onClick={() => onSelect(time)}
      className={`py-4 text-[10px] font-black border transition-all ${
        selected
          ? "bg-sky-700 text-white border-sky-700"
          : "bg-white border-slate-100 text-slate-400 hover:border-sky-700"
      }`}
    >
      {time}
    </button>
  );
}
