import { Habit } from "../../../../components";
import { generateDatesFromYear } from "../../../../functions/generateDatesFromYear";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateDatesFromYear();

const minimumSummaryDatesSize = 18 * 7; // 18 weeks

const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((day, index) => (
          <div
            className="text-zinc-400 font-bold text-xl h-10 w-10 flex items-center justify-center"
            key={`${day}_${index}`}
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((summaryDate) => (
          <Habit key={summaryDate.toISOString()} completed={0} />
        ))}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, index) => (
            <div
              className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
              key={index}
            ></div>
          ))}
      </div>
    </div>
  );
}
