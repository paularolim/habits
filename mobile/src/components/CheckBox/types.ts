import { TouchableOpacityProps } from "react-native"

export interface CheckBoxProps extends TouchableOpacityProps {
    label: string
    checked?: boolean
}