import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";

import styles from "./styles";

interface Props extends TextInputProps {
  title: string;
}

const TextInputComponent: React.FC<Props> = ({ title, ...props }) => {
  return (
    <View style={styles.container} testID="TextInputContainer">
      <Text style={styles.title} testID="Title">
        {title}
      </Text>

      <TextInput style={styles.textInput} {...props} testID="TextInput" />
    </View>
  );
};

export default React.memo(TextInputComponent);
