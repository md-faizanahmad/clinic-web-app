import { CalendarCheck } from "lucide-react";
import { JSX } from "react";

type Props = {
  onOpen: () => void;
};

export default function DockTrigger({ onOpen }: Props): JSX.Element {
  return (
    <div className="md:hidden fixed bottom-40 right-5 z-50">
      <button
        onClick={onOpen}
        className="bg-sky-700 cursor-pointer rounded-full text-white h-12 w-12 flex items-center justify-center shadow-xl active:scale-90 transition-transform"
      >
        <CalendarCheck size={26} />
      </button>
    </div>
  );
}
