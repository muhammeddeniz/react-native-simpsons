import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { IData } from "../../Types/Data.type";
import styles from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import Tag from "../Tag";

interface Props extends IData {
  onPress?: (...args: any[]) => any;
  onUpPress?: (...args: any[]) => any;
  onDownPress?: (...args: any[]) => any;
  onDeletePress?: (...args: any[]) => any;
}

const ListItem: React.FC<Props> = ({
  name,
  avatar,
  job,
  onPress,
  onUpPress,
  onDownPress,
  onDeletePress,
}) => {
  return (
    <TouchableOpacity
      testID="ListItem"
      style={styles.container}
      onPress={onPress}
    >
      <Image source={{ uri: avatar }} style={styles.avatar} />

      <View style={styles.leftSide}>
        <Tag text={job} />
        <Text style={styles.name} testID="Name">
          {name}
        </Text>
      </View>

      <View style={styles.rightSide}>
        <TouchableOpacity
          style={styles.button}
          onPress={onUpPress}
          testID="UpButton"
        >
          <FontAwesome5 name="arrow-circle-up" size={20} color="#466BFF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={onDownPress}
          testID="DownButton"
        >
          <FontAwesome5 name="arrow-circle-down" size={20} color="#466BFF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.trashButton}
          onPress={onDeletePress}
          testID="DeleteButton"
        >
          <FontAwesome5 name="trash" size={22} color="#FF3B3B" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ListItem);
