import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import { getSimpsons as getSimpsonsService } from "../../Services";
import { IData } from "../../Types/Data.type";
import {
  deleteData,
  moveDown,
  moveUp,
  setData,
} from "../../Store/slices/dataSlice";
import { ListItem } from "../../Components";
import { Routes } from "../../Types/Routes.enum";
import { useAppDispatch, useAppSelector } from "../../Hooks/useStore";
import styles from "./styles";

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

const ListScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const { dataSlice } = useAppSelector((state) => state);
  const [currentData, setCurrentData] = useState<Array<IData>>();

  const getSimpsons = () => {
    getSimpsonsService().then((res) => setCurrentData(res.data));
  };

  useEffect(() => {
    getSimpsons();
  }, []);

  useEffect(() => {
    if (dataSlice.data === undefined && currentData) {
      dispatch(setData(currentData));
    }
  }, [currentData]);

  const goToDetailScreen = (item: IData) =>
    navigation.navigate(Routes.DetailScreen, { ...item });

  const goToAddNewItemScreen = () => {
    navigation.navigate(Routes.AddItemScreen);
  };

  const onDelete = (id: string) => {
    Alert.alert("Warning", "Are you sure?", [
      { text: "No" },
      { text: "Yes", onPress: () => dispatch(deleteData(id)) },
    ]);
  };

  const renderItem = ({ item }: { item: IData }) => (
    <ListItem
      {...item}
      onPress={() => goToDetailScreen(item)}
      onDeletePress={() => onDelete(item.id)}
      onUpPress={() => dispatch(moveUp(item))}
      onDownPress={() => dispatch(moveDown(item))}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={dataSlice.data} renderItem={renderItem} />

      <View>
        <TouchableOpacity style={styles.button} onPress={goToAddNewItemScreen}>
          <Ionicons name="add-circle-sharp" size={50} color="#004FA9" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ListScreen;
