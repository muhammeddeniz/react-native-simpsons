import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 6,
  },
  button: {
    paddingHorizontal: 5,
    width: 34,
  },
  title: {
    fontSize: 16,
  },
  emtyView: {
    width: 34,
    paddingHorizontal: 5,
  },
});

export default styles;
