import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import { useCallback, useEffect, useState } from "react";
import { FlatList, ListRenderItemInfo, Text, View } from "react-native";
import { Habit } from "../../../../components";
import { httpClient } from "../../../../services/HttpClient";
import { data, weekDays } from "./data";
import { itemMargin, itemSize, itemSizeWithMargin } from "./styles";
import { SummaryDate, SummaryProps } from "./types";

export function SummaryTable() {
  const { navigate } = useNavigation();

  const [summary, setSummary] = useState<SummaryProps[]>([]);

  const getSummary = () => {
    httpClient
      .get("/summary")
      .then((response) => {
        setSummary(response.data);
      })
      .catch((error) => {
        console.error("Something went wrong");
        console.error(error);
      });
  };

  useEffect(getSummary, []);

  const Header = useCallback(
    () => (
      <View className="flex-row bg-background">
        {weekDays.map((day, index) => (
          <View
            className="items-center justify-center"
            key={`${day}_${index}`}
            style={{ width: itemSizeWithMargin }}
          >
            <Text className="text-zinc-400 font-bold text-xl ">{day}</Text>
          </View>
        ))}
      </View>
    ),
    []
  );

  const Item = useCallback(
    ({ item }: ListRenderItemInfo<SummaryDate>) => {
      const dayInSummary = summary.find((day) => dayjs(item.date).isSame(day.date, "day"));

      return (
        <Habit
          date={item.date as Date}
          completed={dayInSummary?.completed}
          amount={dayInSummary?.amount}
          disabled={item.isFuture}
          style={{ width: itemSize, height: itemSize, margin: itemMargin }}
          onPress={() => navigate("dayHabit", { date: item.date?.toISOString() || "" })}
        />
      );
    },
    [summary]
  );

  return (
    <View className="px-8 mt-6 flex-1">
      <FlatList
        data={data}
        renderItem={Item}
        numColumns={7}
        keyExtractor={(item, index) => item?.date?.toISOString() || index.toString()}
        ListHeaderComponent={Header}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      />
    </View>
  );
}
