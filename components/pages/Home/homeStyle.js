import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  home_1: {
    date: {
      color: "#6b7280",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: 20,
      letterSpacing: 0.3,
    },
    welcome: {
      color: "#FFF",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: 20,
      letterSpacing: "0.2px",
    },
    caloriesTitle: {
      color: "#FFF",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: 20,
      letterSpacing: "0.2px",
    },
    caloriesDates: {
      color: "#6b7280",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: 20,
      letterSpacing: 0.3,
      paddingTop: "4px",
    },
  },
  home_2: {
    workoutsStyle: {
      seeAllOff: {
        marginTop: 24,
        backgroundColor: "#0B0418",
        marginLeft: "24px",
        gap: 16,
      },

      seeAllOn: {
        marginLeft: "24px",
        marginRight: "24px",
        marginTop: 24,
      },
    },

    imageCard: {
      card: {
        width: 366,
        height: 224,
        borderRadius: 12,
        border: "1px solid #37383C",
        overflow: "hidden",
        marginRight: 12,
      },
      cardAll: {
        width: 380,
        marginBottom: 12,
        height: 224,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#37383C",
        overflow: "hidden",
      },
      title: {
        color: "#FFF",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "120%",
        marginTop: 126,
      },
      category: {
        color: "#988EA9",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "170%",
        letterSpacing: 0.3,
        marginTop: 6,
      },
      button: {
        display: "flex",
        width: 111,
        height: 32,
        padding: "8px 16px",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        borderRadius: 8,
        background: "#FF8036",
      },
    },
    seeAllTextOff: {
      color: "#FF8036",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: 20,
      letterSpacing: 0.3,
      marginRight: "24px",
    },
    seeAllTextOn: {
      color: "#FF8036",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: 20,
      letterSpacing: 0.3,
    },
  },
  home_3: {
    workoutsStyle: {
      seeAllOff: {
        marginTop: 24,
        backgroundColor: "#111214",
        marginLeft: "24px",
        gap: 16,
      },

      seeAllOn: {
        marginLeft: "24px",
        marginRight: "24px",
        marginTop: 24,
      },
    },

    welcome: {
      color: "#FFF",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: 20,
      letterSpacing: "0.2px",
      marginBottom: 12,
    },
    categoryCard: {
      selected: {
        display: "flex",
        width: "72.75px",
        height: "36px",
        padding: "8px 16px",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
        marginRight: "12px",
        borderRadius: "8px",
      },
      selectedText: {
        color: "#8C38F9",
      },
      notSelected: {
        display: "flex",
        width: "72.75px",
        height: "36px",
        padding: "8px 16px",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
        borderRadius: "8px",
        marginRight: "12px",
      },
      notSelectedText: {
        color: "#988EA9",
      },
    },
    workoutCard: {
      card: {
        width: "100%",
        height: "120px",
        marginBottom: 8,
        overflow: "hidden",
      },
      title: {
        color: "#FFF",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "120%",
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
        fontWeight: 500,
        lineHeight: "170%",
        letterSpacing: 0.3,
        marginBottom: 10,
      },

      title: {
        color: "#FFF",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "120%",
      },
      category: {
        color: "#988EA9",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "170%",
        letterSpacing: 0.3,
      },
      category2: {
        color: "#FFF",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: 500,
      },
    },
  },
});
