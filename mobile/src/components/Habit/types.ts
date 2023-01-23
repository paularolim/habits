import { TouchableOpacityProps } from "react-native"

export interface HabitProps extends TouchableOpacityProps {
    completed?: number
    amount?: number
    date: Date
}