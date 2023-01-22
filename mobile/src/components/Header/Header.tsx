import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import { Feather } from "@expo/vector-icons";

import Logo from "../../../assets/logo.svg";
import colors from "tailwindcss/colors";

export function Header() {
  return (
    <SafeAreaView>
      <View className="flex-row items-center justify-between px-5">
        <Logo />

        <TouchableOpacity
          activeOpacity={0.7}
          className="flex-row h-11 px-4 border border-violet-500 rounded-lg items-center"
        >
          <Feather name="plus" color={colors.violet[500]} size={20} />

          <Text className="text-white ml-3 font-semibold text-base">Novo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
