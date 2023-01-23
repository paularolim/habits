export interface SummaryDate {
    date: Date | null;
    isFuture?: boolean;
}

export interface SummaryProps {
    id: string
    date: string
    amount: number
    completed: number
}