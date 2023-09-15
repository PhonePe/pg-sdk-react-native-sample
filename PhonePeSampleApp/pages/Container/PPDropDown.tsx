import { Text, View } from "react-native";
import React from "react";
import { style } from "../stylesheets/Style";
import DropDownPicker from 'react-native-dropdown-picker';

const PPDropDown = (props: any) => {    

    return (
        <View>
        <Text>{props.title}</Text>
          <DropDownPicker
            open={props.open}
            value={props.value}
            items={props.items}
            setOpen={props.setOpen}
            setValue={props.setValue}
            setItems={props.setItems}
            style={style.dropdown}
          />
        </View>
    )
}

export default PPDropDown;