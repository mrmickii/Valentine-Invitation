import { TextDisplayProps } from "../types/TextProps";

export const CustomText: React.FC<TextDisplayProps> = ({label}) => {
  return(
    <div className="text-xl text-red-400 font-bold sm:text-center">{label}</div>
  )
}