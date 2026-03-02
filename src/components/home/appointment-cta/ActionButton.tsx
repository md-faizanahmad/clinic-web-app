import { ArrowRight, LucideIcon } from "lucide-react";
import { MouseEventHandler } from "react";

interface ActionType {
  onClick: MouseEventHandler<HTMLButtonElement>;
  icon: LucideIcon;
  label: string;
  colorClass: string;
  showArrow: boolean;
}

const ActionButton = ({
  onClick,
  icon: Icon,
  label,
  colorClass,
  showArrow,
}: ActionType) => (
  <button
    onClick={onClick}
    className={`group ${colorClass} text-black flex items-center justify-between px-6 py-5 font-black text-[10px] tracking-widest transition-all cursor-pointer hover:brightness-95 active:scale-95 shadow-sm`}
  >
    <div className="flex items-center gap-4">
      <Icon size={18} strokeWidth={2.5} />
      {label}
    </div>
    {showArrow && (
      <ArrowRight
        size={16}
        className="group-hover:translate-x-2 transition-transform"
      />
    )}
  </button>
);

export default ActionButton;
