import React from "react";
import { View } from "react-xnft";
import { RedBackpack } from "../utils/icons";

function Header() {
    return (
        <View tw={`flex justify-center my-1`}>
            <View> <RedBackpack width="20" height="40" /> </View>
            <View tw={`font-extrabold text-xl text-white my-auto mx-2`}>Backpack</View>
        </View>
    )
}

export default Header;