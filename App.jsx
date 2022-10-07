import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { StatusBar } from "react-native";
import LandingScreen from "./screens/LandingScreen.jsx";

export default function(){
  return(
    <>
      <TailwindProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#f4f4f4" />
        <LandingScreen/>
      </TailwindProvider>
    </>
  )
}