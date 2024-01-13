import React from "react";
import { Text } from "react-native";

export const BazziText = props => {
    return (
        <Text
            {...props}
            style={{
                ...props.style,
                fontFamily: 'Bazzi'
            }}>
            {props.children}
        </Text>

    )
}