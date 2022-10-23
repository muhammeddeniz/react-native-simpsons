import { View, Text, ViewStyle, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./styles";
import { TextStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  leftIcon?: any;
  leftOnPress?: (...args: any[]) => any;
  rightIcon?: any;
  rightOnPress?: (...args: any[]) => any;
  title?: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
};

const Header: React.FC<Props> = ({
  leftIcon,
  leftOnPress,
  rightIcon,
  rightOnPress,
  title,
  containerStyle,
  titleStyle,
}) => {
  const renderButton = (
    icon: any,
    testID: string,
    onPress?: (...args: any[]) => any
  ) =>
    icon ? (
      <TouchableOpacity testID={testID} onPress={onPress} style={styles.button}>
        <Ionicons name={icon} size={24} color="black" />
      </TouchableOpacity>
    ) : (
      <View style={styles.emtyView} />
    );

  return (
    <View style={[styles.container]} testID="Header">
      <SafeAreaView style={styles.inner}>
        {renderButton(leftIcon, "LeftIcon", leftOnPress)}

        <Text style={[styles.title, titleStyle]} testID="Title">
          {title}
        </Text>

        {renderButton(rightIcon, "RightIcon", rightOnPress)}
      </SafeAreaView>
    </View>
  );
};

export default React.memo(Header);
