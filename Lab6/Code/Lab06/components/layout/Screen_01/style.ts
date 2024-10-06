import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontFamily: "Roboto",
    fontSize: 20,
    color: "#000",
  },
  container: {
    marginTop: 40,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#1BA9FF",
    height: 60,
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
  },
  infoContainer: {
    height: 80,
    backgroundColor: "#C4C4C4",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  flatList: {
    marginBottom: 40,
  },
  itemContainer: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#C4C4C4",
    padding: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  itemTextContainer: {
    flexDirection: "row",
  },
  itemName: {
    fontSize: 14,
    marginBottom: 5,
  },
  shopContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  shopLabel: {
    color: "#7D5B5B",
    marginRight: 5,
  },
  shopName: {
    color: "#FF0E0E",
  },
  chatContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  chatButton: {
    width: 88,
    height: 38,
    backgroundColor: "#F31111",
    padding: 10,
    borderRadius: 5,
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: 10,
  },
  chatButtonText: {
    color: "#fff",
  },
  footer: {
    width: "100%",
    height: 40,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1BA9FF",
  },
});

export default styles;
