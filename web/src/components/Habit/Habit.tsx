import { HabitProps } from "./types";

export function Habit({ completed }: HabitProps) {
  return (
    <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg">
      <p>{completed}</p>
    </div>
  );
}
