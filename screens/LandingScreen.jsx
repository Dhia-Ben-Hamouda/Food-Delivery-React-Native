import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";
import img from "../assets/logo.png"
import { useFonts } from "expo-font";
import Loading from "expo-app-loading";
import { TouchableWithoutFeedback } from "react-native";

export default function () {
  const [ loaded ] = useFonts({
    "bold":require("../fonts/Poppins-Bold.ttf"),
  })

  function pressHandler(){
    
  }

  if(!loaded){
    return <Loading/>
  }else{
    return (
      <View className="bg-[#f4f4f4] flex-1">
        <View className="h-[10%]" >
  
        </View>
        <View className="flex-1 flex justify-between py-8">
          <View className="flex items-center " >
            <Image source={img} className="w-[150px] h-[150px] mb-4 " />
            <Text className="text-2xl text-[#777]" style={{fontFamily:"bold"}}>
              Food Shop
            </Text>
          </View>
          <TouchableWithoutFeedback onPress={pressHandler} >
            <View className="bg-[#ff9901] p-[18px] rounded-full mx-8" >
              <Text className="text-white text-center text-lg" style={{fontFamily:"bold"}}>
                Get Started
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}