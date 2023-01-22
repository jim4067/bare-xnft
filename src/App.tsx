import React from "react";
import ReactXnft, { Tab, View } from "react-xnft";

import TabNavigator from "./components/TabNavigator";
import Header from "./components/Header";

ReactXnft.events.on("connect", () => {
    // no-op
});

function App() {

    return (
        <View style={{ height: "100%" }}>
            <TabNavigator />
        </View>
    );
}

export default App;
