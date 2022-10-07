import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";
import img from "../assets/logo.png"

export default function(){
  return(
    <>
      <View className="bg-[#f4f4f4] flex-1">
        <View className="h-[15%]" >

        </View>
        <View className="flex-1 bg-green-600">
          <View className="flex items-center" >
            <Image source={ img } className="w-[150px] h-[150px] mb-4 " />
            <Text className="text-lg" >
              Food Shop
            </Text>
          </View>
        </View>
      </View>
    </>
  )
}