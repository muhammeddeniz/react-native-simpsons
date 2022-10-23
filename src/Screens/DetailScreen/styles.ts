import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f8f8",
    flex: 1,
    height: "100%",
  },
  inner: {
    flex: 1,
    height: "100%",
  },
  content: {
    padding: 20,
  },
  avatar: {
    height: 100,
    width: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#111",
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    color: "#111",
  },
  spacer: {
    flex: 1,
    height: 10,
    width: 10,
  },
  dicoverContainer: {
    marginHorizontal: 10,
    borderRadius: 12,
    backgroundColor: "#fff",
    padding: 10,
    alignSelf: "flex-end",
    marginBottom: "10%",
  },
  discoverAvatar: {
    height: 60,
    width: 30,
    alignSelf: "center",
  },
  discoverText: {
    fontSize: 10,
  },
  footer: {
    justifyContent: "flex-end",
  },
  footerText: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 10,
    fontWeight: "400",
  },
});

export default styles;
