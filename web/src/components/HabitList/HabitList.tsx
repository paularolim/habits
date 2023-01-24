import dayjs from "dayjs";
import { useCallback, useEffect, useState } from "react";
import { httpClient } from "../../services/HttpClient";
import { CheckBox } from "../CheckBox";
import { HabitListProps, HabitsByDateProps } from "./types";

export function HabitList({ date }: HabitListProps) {
  const [habits, setHabits] = useState<HabitsByDateProps>();

  const isDateInPast = dayjs(date).endOf("day").isBefore(new Date());

  const handleToggleHabit = useCallback(
    async (habitId: string) => {
      await httpClient.patch(`/habits/${habitId}/toggle`).catch(console.error);

      const isHabitAlreadyComplete = habits!.completedHabits.includes(habitId);
      let completedHabits: string[] = [];

      if (isHabitAlreadyComplete) {
        completedHabits = habits!.completedHabits.filter((id) => id !== habitId);
      } else {
        completedHabits = [...habits!.completedHabits, habitId];
      }

      setHabits({ possibleHabits: habits!.possibleHabits, completedHabits });
    },
    [habits]
  );

  const getHabitsByDate = useCallback(() => {
    httpClient
      .get("/day", { params: { date: date.toISOString() } })
      .then(({ data }) => setHabits(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    getHabitsByDate();
  }, []);

  return (
    <>
      {habits?.possibleHabits.map((habit) => (
        <div key={habit.id} className="mt-2 flex flex-col gap-3">
          <CheckBox
            label={habit.title}
            checked={habits?.completedHabits?.includes(habit.id)}
            onCheckedChange={() => handleToggleHabit(habit.id)}
            disabled={isDateInPast}
          />
        </div>
      ))}
    </>
  );
}
