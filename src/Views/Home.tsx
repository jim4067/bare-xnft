import React from "react";
import { Text, View } from "react-xnft";

import { Screen } from "../components/Screen";
import { RedBackpack } from "../utils/icons";
import Header from "../components/Header";

function Home() {

    return (
        <Screen>
            <Header />

            <View tw={`flex flex-col justify-center my-auto items-center h-[400px]`}>
                <View>
                    <RedBackpack width="80" height="55" />
                </View>
                <Text tw={`font-black text-xl my-5`}>
                    WAO
                </Text>
            </View>
        </Screen>
    )
}

export default Home;