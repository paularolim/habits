import { useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "tailwindcss/colors";
import { BackButton, CheckBox } from "../../components";
import { Feather } from "@expo/vector-icons";
import { httpClient } from "../../services/HttpClient";

const availableWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export function HabitForm() {
  const [title, setTitle] = useState("");
  const [weekDays, setWeekDays] = useState<number[]>([]);

  const handleToggleWeekDays = (index: number) => {
    if (weekDays.includes(index)) {
      setWeekDays((prev) => prev.filter((weekDay) => weekDay !== index));
    } else {
      setWeekDays((prev) => [...prev, index]);
    }
  };

  const handleCreateHabit = async () => {
    if (!title.trim() || weekDays.length === 0) return;

    await httpClient
      .post("/habits", {
        title,
        weekDays,
      })
      .then(() => {
        setTitle("");
        setWeekDays([]);

        Alert.alert(`Hábito '${title}' criado com sucesso`);
      })
      .catch((error) => {
        console.error("Something went wrong");
        console.error(error);
      });
  };

  return (
    <SafeAreaView className="flex-1 bg-background px-8" edges={["top"]}>
      <ScrollView>
        <BackButton />
        <Text className="mt-4 text-white font-extrabold text-3xl">Criar hábito</Text>

        <Text className="mt-6 text-white font-extrabold text-base">Qual seu comprometimento?</Text>

        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white border-2 border-zinc-700 focus:border-green-600"
          placeholder="Exercícios, dormir bem, etc..."
          placeholderTextColor={colors.zinc[400]}
          value={title}
          onChangeText={setTitle}
        />

        <Text className="mt-4 text-white font-extrabold text-base mb-3">Qual a recorrência?</Text>
        {availableWeekDays.map((weekDay, index) => (
          <CheckBox
            key={weekDay}
            label={weekDay}
            onPress={() => handleToggleWeekDays(index)}
            checked={weekDays.includes(index)}
          />
        ))}

        <TouchableOpacity
          className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6"
          onPress={handleCreateHabit}
        >
          <Feather name="check" size={20} color={colors.white} />
          <Text className="text-white font-semibold text-base ml-3">Confirmar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
