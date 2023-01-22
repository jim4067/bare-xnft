import React from "react";
import { Text, View } from "react-xnft";

import { Screen } from "../components/Screen";
import Header from "../components/Header";

function About() {
    return (
        <Screen>

            <Header />

            <View tw={`flex h-[400px]  text-center flex-col items-center my-auto justify-center`}>
                <Text tw={`font-black text-2xl`}>
                    Welcome to backpack
                </Text>
                <Text tw={`font-bold my-4`}>
                    Minimal xNFT to get you started building.
                </Text>
                <Text>
                    X stands for eXecutable—tokenized code representing ownership rights over its execution.
                    The idea is simple, so simple it’s surprising no one has done it yet.
                    But it’s as simple as it is powerful.
                </Text>
            </View>
        </Screen >
    )
}

export default About;