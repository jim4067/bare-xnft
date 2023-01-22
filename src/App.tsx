import React from "react";
import ReactXnft, { View } from "react-xnft";

import TabNavigator from "./components/TabNavigator";

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
