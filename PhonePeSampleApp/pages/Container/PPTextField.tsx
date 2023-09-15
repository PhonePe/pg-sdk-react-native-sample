import { Text, TextInput, View } from "react-native";
import React from "react";
import { style } from "../stylesheets/Style";

const PPTextField = (props: any) => {    

    return (
        <View>
        <Text style={props.headerStyle}>{props.title}</Text>
            <TextInput
                placeholder={props.placeholder}
                textAlign="left"
                placeholderTextColor="gray"
                multiline
                style={style.tfborder}
                value={props.value}
                onChangeText={text => {
                  props.setValue(text);
                }}
              ></TextInput>
        </View>
    )
}

export default PPTextField;
