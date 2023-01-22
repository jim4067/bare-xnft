import React from "react";
import ReactXnft, { Tab, View } from "react-xnft";

import Home from "../Views/Home";
import About from "../Views/About";

import { HomeIcon, RedBackpack, } from "../utils/icons";

function TabNavigator() {

    return (
        <View style={{ height: '100vh'}}>
            <Tab.Navigator
                style={{
                    borderTop: "none",
                }}
                options={({ route }) => {
                    return {
                        tabBarIcon: ({ focused }) => {
                            const color = focused
                                ? "#FFFFFF"
                                : "#6B7280";
                            if (route.name === "home") {
                                return (
                                    <Tab.Icon element={<HomeIcon fill={color} />} />
                                );
                            } else if (route.name ==="about") {
                                return (
                                    <Tab.Icon element={<RedBackpack height="23" width="23" /* fill={color} */ />} />
                                );
                            }
                        },
                    };
                }}
            >
                <Tab.Screen
                    name="home"
                    disableLabel={true}
                    component={() => <Home />}
                />
                <Tab.Screen
                    name="about"
                    disableLabel={true}
                    component={() => <About />}
                />
            </Tab.Navigator>
        </View>
    )
}

export default TabNavigator;