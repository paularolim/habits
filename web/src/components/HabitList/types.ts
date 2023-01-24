export interface HabitListProps {
    date: Date
}

export interface HabitsByDateProps {
    possibleHabits: Array<{
        id: string
        title: string
        created_at: string
    }>
    completedHabits: string[]
}