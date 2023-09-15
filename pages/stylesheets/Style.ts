import {  StyleSheet } from "react-native";

export const style = StyleSheet.create({
    Text: {
      color: 'white',
    },
    tfborder: {
      marginVertical: 8,
      justifyContent: "flex-start",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: 'purple',
      borderRadius: 8,
      padding: 8,
    },
    container: {
      display: "flex",
      justifyContent: 'flex-start',
      marginHorizontal: 4,
      marginVertical:4,
      backgroundColor: 'white',
      padding: 8,
    },
    leadingHView: {
        flexDirection: 'row',
        jusitfyContent: 'flex-start',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    bckView: {
      flexDirection: 'row',
      jusitfyContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 4,
      padding: 8,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'purple',
    },
    buttonText: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    title: {
      textAlign: 'center',
      marginVertical: 4,
    },
    heading: {
      marginVertical: 8,
      backgroundColor: "white",
      borderColor: 'purple',
      borderWidth: 1,
      borderRadius: 20,
      paddingVertical: 8,
      textAlign: 'center',
      alignContent: "center",
      color: "purple"
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 4,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    dropdown: {
      height: 50,
      borderColor: 'purple',
      borderWidth: 1,
      borderRadius: 8,
      marginVertical: 4,
      padding: 8,
    },
    icon: {
      marginRight: 4,
    },
    centerLabel: {
      position: "relative",
      textAlign: "center",
      backgroundColor: 'clear',
      fontSize: 14,
      alignContent: "center"
    },
    label: {
      position: 'absolute',
      backgroundColor: 'clear',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    }
  });