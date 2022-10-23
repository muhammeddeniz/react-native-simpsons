import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 4,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 5,
    paddingLeft: 15,
  },
  avatar: {
    height: 50,
    width: 24,
  },
  leftSide: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
  },
  rightSide: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  button: {
    padding: 5,
  },
  trashButton: {
    marginLeft: 10,
    padding: 10,
  },
});

export default styles;
