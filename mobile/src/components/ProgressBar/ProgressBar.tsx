import { View } from "react-native";
import { ProgressBarProps } from "./types";

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <View className="h-3 rounded-xl bg-zinc-700 w-full mt-4 mb-6">
      <View className="h-3 rounded-xl bg-violet-600" style={{ width: `${progress}%` }} />
    </View>
  );
}
