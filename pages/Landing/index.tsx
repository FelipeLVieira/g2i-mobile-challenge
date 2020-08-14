import React, {useEffect} from 'react';
import { View, Text, ImageBackground, BackHandler } from 'react-native';
import styles from './styles';
import constants from '../../constants/constants';
import { useNavigation } from '@react-navigation/native';
import redBackground from '../../assets/images/red-background.png';
import FadeInView from '../../animations/animations';
import { RectButton } from 'react-native-gesture-handler';


function Landing(){

    const { navigate } = useNavigation();

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

    

    function handleNavigateToPlayerInfo(){
        navigate(constants.PLAYER_INFO_PAGE);
    }

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode={constants.IMAGE_BACKGROUND_RESIZE_MODE} source={redBackground} style={styles.content}>

                <FadeInView animLength={1000}>
                    <Text style={[styles.title, styles.titleBold]}> 
                        Welcome to the Trivia Challenge
                    </Text>
                </FadeInView>

                <FadeInView animLength={3000}>
                    <Text style={styles.title}>
                            You will be presented with 10 True or False questions.
                    </Text>
                </FadeInView>

                <FadeInView animLength={5000}>
                    <Text style={styles.title}>
                            Can you score 100%?
                    </Text>
                </FadeInView>
                
                <View style={styles.buttonContainer}>
                    <RectButton 
                        onPress={handleNavigateToPlayerInfo}
                        style={styles.buttonBegin}>

                        <Text style={styles.buttonBeginText}>Begin</Text>
                    </RectButton>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Landing;