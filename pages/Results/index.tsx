import React, { useState, useContext, useEffect } from 'react';
import { View, Text, ImageBackground, BackHandler, ActivityIndicator, ScrollView } from 'react-native';
import styles from './styles';
import constants from '../../constants/constants';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import blueBackground from '../../assets/images/blue-background.png';
import PlayerContext from '../../contexts/player';
import RankingItem from '../../components/RankingItem';
import SQL from '../../SQLite/SQLite';

function Results(){

    const [allResults, setAllResults] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const { name, correct, wrong, clearContext } = useContext(PlayerContext);

    const { navigate } = useNavigation();

    useEffect(() => {

        const backAction = () => {
          () => null
          return true;
        };

        (async () => {
            await SQL.getHistory().then((resultSet:any) => {
                setAllResults(resultSet)
                setLoading(false);
            });
        })();
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    }, []);

    const handleNavigateToLanding = () => {
        clearContext();
        navigate(constants.LANDING_PAGE);
    }

    if(loading){
        return (
            <View style={styles.loadingView}>
                <ActivityIndicator size="large" color="#555"/>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode={constants.IMAGE_BACKGROUND_RESIZE_MODE} source={blueBackground} style={styles.content}>
                <Text style={styles.resultText}>
                    You scored {"\n" + correct} / {correct + wrong}
                </Text>

                <Text style={styles.titleBold}>
                    Ranking
                </Text>

                <ScrollView style={styles.scrollView}>
                    {allResults.map( (element:any, index:number) => {
                        return <RankingItem key={index} index={index+1} rankingItemProps={ element } />
                    })}
                </ScrollView>
                <View style={styles.divisoryLine}/>
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