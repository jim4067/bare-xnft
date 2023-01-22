// import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import React from "react";
import { View } from "react-xnft";


type Props = {
    style?: React.CSSProperties
    children: JSX.Element | JSX.Element[] | null;
};

export function Screen({ style, children }: Props) {
    return <View style={{ padding: "10px 20px" }}>{children}</View>;
}

