import { View, Text } from "react-native";
import React from "react";

import styles from "./styles";

type Props = {
  text: string;
};

const Tag: React.FC<Props> = ({ text }) => {
  return (
    <View style={styles.container} testID="Tag">
      <Text style={styles.text} testID="TagText">
        {text}
      </Text>
    </View>
  );
};

export default React.memo(Tag);
