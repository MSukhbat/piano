import { View, Text } from "react-native";
import { useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { DeviceMotion } from "expo-sensors";

export const Second = () => {
  useEffect(() => {
    ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
    DeviceMotion.addListener(({ rotation }) => {
      const { gamma } = rotation;
      const roundedGamma = Math.floor(gamma);
      console.log("Gamma:", roundedGamma);
    });
  }, []);
  return (
    <View>
      <Text
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        60 SECONDS
      </Text>
    </View>
  );
};
