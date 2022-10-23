import React, { useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  ViewStyle,
  Alert,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import { Header, TextInput } from "../../Components";
import { Icons } from "../../Types/Icons.enum";
import { useAppDispatch } from "../../Hooks/useStore";
import { addData } from "../../Store/slices/dataSlice";
import generateID from "../../Utils/generateID";
import styles from "./styles";

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

const AddNewItemScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [link, setLink] = useState<string>("");

  const goBack = () => navigation.goBack();

  const checkEmpty = (value: string) => value.trim() === "";

  const disabled =
    checkEmpty(name) ||
    checkEmpty(job) ||
    checkEmpty(description) ||
    checkEmpty(link);
  const buttonStyle: Array<ViewStyle> = [
    styles.button,
    { backgroundColor: disabled ? "#E3EBFF" : "#3B72FF" },
  ];

  const saveCharacter = async () => {
    try {
      await dispatch(
        addData({
          id: generateID(),
          description,
          avatar: link,
          job,
          name,
        })
      );
    } catch (err) {
      Alert.alert("Fail", "Something went wrong!");
    }

    Alert.alert("Success", "Character Added", [{ onPress: () => goBack() }]);
  };

  return (
    <View style={styles.container}>
      <Header
        leftIcon={Icons.left}
        title="Add New Character"
        leftOnPress={goBack}
      />
      <ScrollView>
        <TextInput
          title="Name Surname"
          placeholder="Enter name and surname"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          title="Job"
          placeholder="Enter job"
          value={job}
          onChangeText={setJob}
        />

        <TextInput
          title="About Him/Her"
          placeholder="Enter about her"
          value={description}
          onChangeText={setDescription}
        />

        <TextInput
          title="Image link"
          placeholder="Enter image link"
          value={link}
          onChangeText={setLink}
        />

        <View>
          <TouchableOpacity
            style={buttonStyle}
            onPress={saveCharacter}
            disabled={disabled}
          >
            <Ionicons name="add-circle" size={24} color="#fff" />
            <Text style={styles.buttonText}>Add Character</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddNewItemScreen;
