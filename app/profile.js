import React from "react";
import { Text } from "react-native";
import Layout from "../compontents/Layout";
import { View } from "react-native";

const Profile = () => {
  return (
    <Layout
      children={
        <View className="flex-1">
          <Text className="text-white">Profile</Text>
        </View>
      }
    />
  );
};

export default Profile;
