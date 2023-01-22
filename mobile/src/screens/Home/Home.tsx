import { Text, View } from "react-native";
import { daySize, Habit, Header } from "../../components";
import { SummaryTable } from "./components/SummaryTable";

export function Home() {
  return (
    <View className="bg-background flex-1">
      <Header />
      <SummaryTable />
    </View>
  );
}
