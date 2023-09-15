import { Text, Pressable } from "react-native";
import React from "react";
import { style } from "../stylesheets/Style";

const PPButton = (props: any) => {    
    return (
        <Pressable style={style.button} onPress={props.onPress}>
            <Text style={style.buttonText}>{props.title}</Text>
        </Pressable>
    )
}

export default PPButton;