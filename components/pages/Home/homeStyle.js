import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  home_1: {
    date: {
      color: "#6b7280",
      fontSize: 12,
      fontStyle: "normal",

      lineHeight: 20,
      letterSpacing: 0.3,
    },
    welcome: {
      color: "#FFF",
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 20,
      letterSpacing: 0.2,
    },
    caloriesTitle: {
      color: "#FFF",
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 20,
      letterSpacing: 0.2,
    },
    caloriesDates: {
      color: "#6b7280",
      fontSize: 12,
      fontStyle: "normal",

      lineHeight: 20,
      letterSpacing: 0.3,
      paddingTop: 4,
    },
  },
  home_2: {
    workoutsStyle: {
      seeAllOff: {
        marginTop: 24,
        backgroundColor: "#111214",
        marginLeft: 24,
        gap: 16,
      },

      seeAllOn: {
        marginTop: 24,
        backgroundColor: "#111214",
        marginLeft: 24,
        marginRight: 24,
        gap: 16,
      },
    },

    imageCard: {
      card: {
        width: 303,
        height: 166,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#37383C",
        overflow: "hidden",
        marginRight: 12,
      },
      cardAll: {
        width: "100%",
        marginBottom: 12,
        height: 186,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#37383C",
        overflow: "hidden",
      },
      title: {
        color: "#FFF",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "bold",
        // lineHeight: "120%",
        marginBottom: 14,
      },
      category: {
        color: "#FFF",
        fontSize: 12,
        fontStyle: "normal",

        // lineHeight: "170%",
        letterSpacing: 0.3,
        marginBottom: 10,
      },
      button: {
        display: "flex",
        width: 111,
        height: 32,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        backgroundColor: "#FF8036",
      },
    },
    seeAllTextOff: {
      color: "#FF8036",
      fontSize: 12,
      fontStyle: "normal",

      lineHeight: 20,
      letterSpacing: 0.3,
      marginRight: 24,
    },
    seeAllTextOn: {
      color: "#FF8036",
      fontSize: 12,
      fontStyle: "normal",

      lineHeight: 20,
      letterSpacing: 0.3,
    },
  },
  home_3: {
    categoryCard: {
      selected: {
        display: "flex",
        width: 72.75,
        height: 36,
        padding: "8 16",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
        marginRight: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#374151",
        backgroundColor: "#FFF",
      },
      selectedText: {
        color: "#111827",
      },
      notSelected: {
        display: "flex",
        width: 72.75,
        height: 36,
        padding: "8 16",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
        borderRadius: 8,
        marginRight: 12,
        color: "red",
        borderWidth: 1,
        borderColor: "#374151",
        background: "#24262B",
      },
      notSelectedText: {
        color: "#6B7280",
      },
    },
    workoutCard: {
      card: {
        width: 184,
        height: 220,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#37383C",
        overflow: "hidden",
        marginRight: 12,
      },
      title: {
        color: "#FFF",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "bold",
        // lineHeight: "120%",
        marginTop: 114,
      },
      secondaryTextPart: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      },
      secondaryTextPartDiv: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
      },
      secondaryTextPartText: {
        color: "#FFF",
        fontSize: 12,
        fontStyle: "normal",

        // lineHeight: "170%",
        letterSpacing: 0.3,
        marginBottom: 10,
      },
    },
  },
});
