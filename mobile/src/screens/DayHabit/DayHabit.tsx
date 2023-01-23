import { useRoute } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackButton, CheckBox, ProgressBar } from "../../components";
import { DayHabitParams } from "./types";
import dayjs from "dayjs";

const habits = ["2L de água", "Exercício", "Alimentação saudável", "Planejar próximo dia", "Dormir 8h"];

export function DayHabit() {
  const route = useRoute();
  const { date } = route.params as DayHabitParams;

  const parsedDate = dayjs(date);
  const dayOfWeek = parsedDate.format("dddd");
  const dayAndMonth = parsedDate.format("DD/MM");

  const [selected, setSelected] = useState<number[]>([]);

  const handleToggleHabit = useCallback((index: number) => {
    if (selected.includes(index)) {
      setSelected((prev) => prev.filter((item) => item !== index));
    } else {
      setSelected((prev) => [...prev, index]);
    }
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-background px-8" edges={["top"]}>
      <ScrollView>
        <BackButton />

        <Text className="text-zinc-400">{dayOfWeek}</Text>
        <Text className="text-white text-3xl font-extrabold">{dayAndMonth}</Text>

        <ProgressBar progress={75} />

        {habits.map((habit, index) => (
          <CheckBox
            key={habit}
            label={habit}
            checked={selected.includes(index)}
            onPress={() => handleToggleHabit(index)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
