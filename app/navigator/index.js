import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import AddData from "../screen/AddData";
import ListOutData from "../screen/ListoutData";
import EditData from "../screen/EditData";

const appNavigator = createStackNavigator({
    AddData:{
        screen:AddData,
    },
    ListOutData:{
        screen:ListOutData,
    },
    EditData: {
        screen: EditData,
    },
});

const appContainer = createAppContainer(appNavigator);

export default appContainer;