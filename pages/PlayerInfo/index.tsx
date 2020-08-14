import React, { useContext, useEffect }  from 'react';
import { View, Text, TextInput, ImageBackground, BackHandler } from 'react-native';
import styles from './styles';
import constants from '../../constants/constants';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import blueBackground from '../../assets/images/blue-background.png';
import FadeInView from '../../animations/animations';
import PlayerContext from '../../contexts/player.js';

function PlayerInfo(){

    const { navigate } = useNavigation();
    
    const { setName } = useContext(PlayerContext);

    useEffect(() => {
        const backAction = () => {
          () => null
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    }, []);
    
    function handleNavigateToQuestion(){

        navigate(constants.QUESTIONS_PAGE);
    }

    const setPlayerName = (text:string) => {
        setName(text);
    }

    return (
            <View style={styles.container}>
                <ImageBackground resizeMode={constants.IMAGE_BACKGROUND_RESIZE_MODE} source={blueBackground} style={styles.content}>

                    <FadeInView animLength={1500}>
                        <Text style={[styles.title, styles.titleBold]}> 
                            Before we start...
                        </Text>
                    </FadeInView>

                    <FadeInView animLength={2000}>
                        <Text style={[styles.title, styles.titleBold]}> 
                            Please, insert your name below
                        </Text>
                    </FadeInView>

                    <TextInput
                        style={styles.textInput}
                        placeholder="Insert your name here"
                        onChangeText= {(text) => setPlayerName(text)}
                    />
                    
                    <View style={styles.buttonContainer}>
                        <RectButton 
                            onPress={handleNavigateToQuestion}
                            style={styles.buttonStart}>
                            <Text style={styles.buttonBeginText}>
                                Start
                            </Text>
                        </RectButton>
                    </View>
                </ImageBackground>
            </View>
    )
}

export default PlayerInfo;