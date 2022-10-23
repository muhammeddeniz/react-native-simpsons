import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { IData } from "../../Types/Data.type";
import { Header, Tag } from "../../Components";
import { Icons } from "../../Types/Icons.enum";
import styles from "./styles";
import useDiscover from "../../Hooks/useDiscover";
import { Routes } from "../../Types/Routes.enum";

type Props = {
  navigation: NativeStackNavigationProp<any>;
  route: {
    params: IData;
  };
};

const DetailScreen: React.FC<Props> = ({ navigation, route }) => {
  const { name, description, job, avatar } = route.params;
  const data = useDiscover();

  const goBack = () => navigation.goBack();
  const goToDetail = (item: IData) =>
    navigation.navigate(Routes.DetailScreen, { ...item });

  const renderItem = ({ item }: { item: IData }) => (
    <TouchableOpacity
      style={styles.dicoverContainer}
      onPress={() => goToDetail(item)}
    >
      <Image source={{ uri: item.avatar }} style={styles.discoverAvatar} />
      <Text style={styles.discoverText}>{item.name}</Text>
    </TouchableOpacity>
  );

  console.log();

  return (
    <View style={styles.container}>
      <Header leftIcon={Icons.left} title={name} leftOnPress={goBack} />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.inner}>
          <View style={styles.content}>
            <Image
              source={{ uri: avatar.slice(0, -14) }}
              style={styles.avatar}
            />
            <Tag text={job} />

            <Text style={styles.title}>{name}</Text>
            <Text style={styles.text}>{description}</Text>
          </View>

          <View style={styles.spacer} />
          <View style={styles.footer}>
            <Text style={styles.footerText}>Other Characters</Text>
            <FlatList
              data={data}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default DetailScreen;
