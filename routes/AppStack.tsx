import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../pages/Landing';
import PlayerInfo from '../pages/PlayerInfo';
import Questions from '../pages/Questions';
import Results from '../pages/Results';

const { Navigator, Screen } = createStackNavigator();

function AppStack(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Landing" component={Landing} options={{gestureEnabled:false, header:null}} />
                <Screen name="PlayerInfo" component={PlayerInfo} options={{gestureEnabled:false}}/>
                <Screen name="Questions" component={Questions} options={{gestureEnabled:false}}/>
                <Screen name="Results" component={Results} options={{gestureEnabled:false}}/>
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;