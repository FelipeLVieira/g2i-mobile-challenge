import React, { useState, useContext, useEffect} from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import constants from '../../constants/constants';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import redBackground from '../../assets/images/red-background.png';
import PlayerContext from '../../contexts/player';

function Results(){

    const { name, correct, wrong } = useContext(PlayerContext);

    const { navigate } = useNavigation();

    const handleNavigateToLanding = () => {
        navigate(constants.LANDING_PAGE);
    }

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="stretch" source={redBackground} style={styles.content}>
                <Text style={styles.resultText}>
                    You scored {"\n" + correct} / {correct + wrong}
                </Text>

                <RectButton 
                    onPress={handleNavigateToLanding}
                    style={styles.buttonPlayAgain}
                    >
                    <Text style={styles.textButtonPlayAgain}>Play Again?</Text>
                </RectButton>
            </ImageBackground>
        </View>
    )
}

export default Results;