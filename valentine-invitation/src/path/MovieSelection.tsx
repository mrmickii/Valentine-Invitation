import { useLocation } from "react-router-dom"
import { CustomText } from "../components/CustomText";

export const MovieSelection = () => {
  const locate = useLocation();
  const selectedCard = locate.state?.selectedData;

  console.log(selectedCard)

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-evenly">
      <CustomText label="What food to eat?"/>
    </div>
  )
}