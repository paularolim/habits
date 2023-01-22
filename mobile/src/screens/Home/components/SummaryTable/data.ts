import { generateDatesFromYear } from "../../../../functions/generateDatesFromYear";
import { SummaryDate } from "./types";

export const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

export const summaryDates = generateDatesFromYear();

export const minimumSummaryDatesSize = 18 * 7; // 18 weeks

export const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;

export const pastDates: SummaryDate[] = summaryDates.map((summaryDate) => ({ date: summaryDate }));
export const futureDates: SummaryDate[] = Array.from({ length: amountOfDaysToFill }).map(() => ({
    date: null,
    isFuture: true,
}));

export const data = [...pastDates, ...futureDates]