import clsx from "clsx";
import dayjs from "dayjs";
import { TouchableOpacity, View } from "react-native";
import { HabitProps } from "./types";

export function Habit({ disabled, date, completed = 0, amount = 0, ...rest }: HabitProps) {
  const completedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0;

  const today = dayjs().startOf("day").toDate();
  const isCurrentDay = dayjs(date).isSame(today);

  if (disabled) {
    return <View className="bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40" {...rest} />;
  }

  return (
    <TouchableOpacity
      className={clsx("border-2 rounded-lg", {
        "bg-zinc-900 border-zinc-800 ": completedPercentage === 0,
        "bg-violet-900 border-violet-700": completedPercentage > 0 && completedPercentage < 20,
        "bg-violet-800 border-violet-600": completedPercentage >= 20 && completedPercentage < 40,
        "bg-violet-700 border-violet-500": completedPercentage >= 40 && completedPercentage < 60,
        "bg-violet-600 border-violet-400": completedPercentage >= 60 && completedPercentage < 80,
        "bg-violet-500 border-violet-300": completedPercentage >= 80,
        "border-white border-4": isCurrentDay,
      })}
      activeOpacity={0.7}
      {...rest}
    />
  );
}
