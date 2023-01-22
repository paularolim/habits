import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";

export function Habit({ disabled, ...rest }: TouchableOpacityProps) {
  if (disabled) {
    return <View className="bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40" {...rest} />;
  }

  return (
    <TouchableOpacity
      className="bg-zinc-900 border-2 border-zinc-800 rounded-lg"
      activeOpacity={0.7}
      {...rest}
    />
  );
}
