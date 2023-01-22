import { useCallback } from "react";
import { FlatList, ListRenderItemInfo, Text, View } from "react-native";
import { Habit } from "../../../../components";
import { data, weekDays } from "./data";
import { itemMargin, itemSize, itemSizeWithMargin } from "./styles";
import { SummaryDate } from "./types";

export function SummaryTable() {
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
    ({ item }: ListRenderItemInfo<SummaryDate>) => (
      <Habit disabled={item.isFuture} style={{ width: itemSize, height: itemSize, margin: itemMargin }} />
    ),
    []
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
