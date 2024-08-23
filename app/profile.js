import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import Layout from "../compontents/Layout";
import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { theme } from "../theme";

const Profile = () => {
  return (
    <Layout
      children={
        <View className="flex px-5 mt-8">
          <View className="flex-row justify-between align-middle py-2">
            <Text className="text-white text-lg font-medium">Setting</Text>
          </View>
          <View className="flex justify-center items-center py-8 ">
            <Image
              source={require("../assets/NotFoundProfile.png")}
              style={{ width: 150, height: 150 }}
            />
            <View className="py-3 items-center">
              <Text className="text-white font-medium">Abraham Cabrera</Text>
              <Text className="text-white font-light">
                CabreraDFall@FollowMe.com
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity className="flex my-2 flex-row items-center justify-between bg-[#333333] p-4 rounded-lg">
              <Text className="text-white font-semibold">Edit profile</Text>
              <AntDesign
                name="right"
                size={theme.sizeIcons.medium}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row my-2 items-center justify-between bg-[#333333] p-4 rounded-lg">
              <Text className="text-white font-semibold">Notifications</Text>
              <AntDesign
                name="right"
                size={theme.sizeIcons.medium}
                color="white"
              />
            </TouchableOpacity>

            <TouchableOpacity className="flex my-2 flex-row items-center justify-between bg-[#333333] p-4 rounded-lg">
              <Text className="text-white font-semibold">Support</Text>
              <AntDesign
                name="right"
                size={theme.sizeIcons.medium}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      }
    />
  );
};

export default Profile;
