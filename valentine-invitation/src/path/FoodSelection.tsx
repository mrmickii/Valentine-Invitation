import { data, useLocation, useNavigate } from "react-router-dom"
import { CustomText } from "../components/CustomText";
import { CustomCard } from "../components/CustomCard";
import { CustomButton } from "../components/CustomButton";
import Wingers from '../assets/wingers.jpg'
import Yukimaru from '../assets/yukimaru.jpg'
import Tamp from '../assets/tamp.png'
import TFChicken from '../assets/24chicken.jpg'
import Chill from '../assets/chill.png'
import Heart from '../assets/peach-goma-love-peach-cat.gif'
import { useState } from "react";

export const FoodSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedTime = location.state?.time;

  console.log(selectedTime);

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-evenly"
      style={{
        backgroundImage: `url(${Heart})`,
        backgroundSize: "35%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}>
      <div className="p-5">
        <CustomText label="What would want to eat?"/>
      </div>
      <div className="flex justify-center items-center gap-10 max-w-screen-xl flex-wrap">
        <CustomCard 
          image={Yukimaru} 
          label="Yukimaru"
          onClick={() => {
            navigate("/movie-selection", {state: {selectedData: "Yukimaru"}});
          }}
        />
        <CustomCard 
          image={TFChicken} 
          label="24-Chicken"
          onClick={() => {
            navigate("/movie-selection", {state: {selectedData: "24-Chicken"}});
          }}
        />
        <CustomCard 
          image={Tamp} 
          label="Tamp"
          onClick={() => {
            navigate("/movie-selection", {state: {selectedData: "Tamp"}});
          }}
        />
        <CustomCard 
          image={Wingers} 
          label="Wingers Unlimited"
          onClick={() => {
            navigate("/movie-selection", {state: {selectedData: "Wingers Unlimited"}});
          }}
        />
        <CustomCard 
          image={Chill} 
          label="Home Cook + Chill"
          onClick={() => {
            navigate("/movie-selection", {state: {selectedData: "Home Cook + Chill"}});
          }}
        />
      </div>
      <div className="flex flex-col gap-5">
        <CustomButton label="(˶˃ ᵕ ˂˶) Click here" onClick={() => navigate("/")}/>
      </div>
    </div>
  )
}