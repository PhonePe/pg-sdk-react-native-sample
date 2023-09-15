import { Text, TextInput, View } from "react-native";
import React from "react";
import { style } from "../stylesheets/Style";

const PPHTextField = (props: any) => {    

    return (
        <View style={style.leadingHView}>
            <View style={{ marginHorizontal: 4 }}>
            <Text style={props.headerStyle}>{props.title}</Text>
            </View>
            <View style={{ marginHorizontal: 4 }}>
                <TextInput
                placeholder={props.placeholder}
                textAlign="left"
                placeholderTextColor="gray"
                multiline
                style={style.tfborder}
                onChangeText={text => {
                  props.setValue(text);
                }}
              ></TextInput>
            </View>
        </View>
    )
};

export default PPHTextField;
