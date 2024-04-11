import { StyleSheet } from "react-native";

export const ProfileStyles = StyleSheet.create({
  photoBox: {
    backgroundColor: "#24262B",
    borderRadius: 10,
    border: "1px solid #FFFFFF",
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#24262B",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    height: 180,
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#24262B",
    borderRadius: 11,
    height: 72,
    width: 105,
  },

  orangeBox: {
    backgroundColor: "#FE6F32",
    borderRadius: 12,
    border: "1px solid #37383C",
    height: 70,
    marginRight: 24,
    marginLeft: 24,
    padding: 14,
    flexDirection: "row",
  },

  greyBox: {
    backgroundColor: "#37383C",
    borderRadius: 12,
    border: "1px solid #37383C",
    marginTop: 24,
    height: 54,
    marginRight: 24,
    marginLeft: 24,
    padding: 14,
    flexDirection: "row",
  },

  whiteBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 11,
    border: "1px solid #37383C",
    height: 54,
    marginRight: 24,
    marginLeft: 24,
    padding: 14,
    flexDirection: "row",
  },

  subBox: {
    backgroundColor: "#24262B",
    borderRadius: 10,
    height: 250,
    width: 350,
  },
});
