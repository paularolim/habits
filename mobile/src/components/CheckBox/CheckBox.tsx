import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";
import { CheckBoxProps } from "./types";

export function CheckBox({ label, checked, ...rest }: CheckBoxProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} className="flex-row mb-2 items-center" {...rest}>
      {checked ? (
        <View className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center">
          <Feather name="check" color={colors.white} size={20} />
        </View>
      ) : (
        <View className="h-8 w-8 bg-zinc-900 border-2 border-zinc-800 rounded-lg items-center justify-center"></View>
      )}
      <Text className="text-white text-base ml-3">{label}</Text>
    </TouchableOpacity>
  );
}
