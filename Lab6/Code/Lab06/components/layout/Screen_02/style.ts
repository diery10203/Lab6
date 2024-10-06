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
    width: "100%",
    height: "100%",
    paddingTop: 40,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1BA9FF",
  },
  searchContainer: {
    paddingLeft: 8,
    paddingVertical: 4,
    paddingRight: 124,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerIcons: {
    width: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productList: {
    marginBottom: 40,
  },
  productContainer: {
    width: "50%",
    alignItems: "center",
    padding: 12,
  },
  productImage: {
    width: 155,
    height: 90,
  },
  productName: {
    width: 144,
    paddingTop: 8,
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 16.41,
    textAlign: "left",
  },
  productRatingContainer: {
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  productComment: {
    paddingLeft: 4,
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "400",
    alignContent: "center",
  },
  productPriceContainer: {
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  productPrice: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 14.06,
    textAlign: "left",
  },
  productDiscount: {
    paddingLeft: 12,
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 14.06,
    textAlign: "left",
    color: "#969DAA",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1BA9FF",
  },
});

export default styles;
