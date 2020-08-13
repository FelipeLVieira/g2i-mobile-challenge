import React, { useState, useContext, useEffect} from 'react';
import { View, Text, ImageBackground, ActivityIndicator, BackHandler } from 'react-native';
import styles from './styles';
import constants from '../../constants/constants';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { fetchQuestionsList } from '../../services/triviaApi';
import redBackground from '../../assets/images/red-background.png';
import PlayerContext from '../../contexts/player.js';
import QuestionItem from '../../components/QuestionItem';
import QuestionCategory from '../../components/QuestionCategory';
import QuestionCounter from '../../components/QuestionCounter';

function Questions(){

    const { name, correct, setCorrect, wrong, setWrong } = useContext(PlayerContext);

    const { navigate } = useNavigation();

    const [loading, setLoading] = useState<boolean>(true);
    const [ selectedAnswer, setSelectedAnswer ] = useState<string>("");
    const [questions, setQuestions] = useState<any>(null);
    const [currentQuestion, setCurrentQuestion] = useState<number>(1);

    useEffect(() => {

        const backAction = () => {
            () => null
            return true;
          };
      
          const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        (async () => {
            await fetchQuestionsList(constants.QUESTIONS_AMOUNT, constants.QUESTIONS_DIFFICULTY, constants.QUESTIONS_TYPE)
            .then( (questions:any) => {
                    setQuestions(questions);
                    setLoading(false);
                }
            );
        })();
    }, []);

    useEffect(() => { 

        if (!loading){
            if (correct + wrong == questions.length){
                setLoading(true)
                navigate(constants.RESULTS_PAGE);
            }

            if (currentQuestion <= questions.length){
                setCurrentQuestion(currentQuestion+1);
                setSelectedAnswer("");
            }
        }
    }, [correct, wrong])

    const processAnswer = (selectedAnswerParam:string, correctAnswerParam:string) => {

        if (selectedAnswer === ""){
            return;
        }

        const isCorrect = selectedAnswerParam == correctAnswerParam;

        if(isCorrect){
            setCorrect(correct + 1)
        } else {
            setWrong(wrong + 1)
        }
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
            <ImageBackground resizeMode={constants.IMAGE_BACKGROUND_RESIZE_MODE} source={redBackground} style={styles.content}>
                
                <View style={{top: '8%', position: 'absolute', alignSelf: 'center'}}>
                    <QuestionCategory category={questions[currentQuestion-1].category}/>
                </View>

                <View style={styles.questionBox}>
                        <QuestionItem question={questions[currentQuestion-1].question}/>

                        <QuestionCounter currQuestion={currentQuestion} numQuestions={questions.length}/>
                </View>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonOptionsContainer}>
                        <RectButton 
                            onPress={() => setSelectedAnswer(constants.TRUE)}
                            style={selectedAnswer == constants.TRUE ? styles.buttonOptionSelected : styles.buttonOptionNotSelected}>

                            <Text style={styles.buttonOptionText}>Yes</Text>
                        </RectButton>
                        
                        <RectButton 
                            onPress={() => setSelectedAnswer(constants.FALSE)}
                            style={selectedAnswer == constants.FALSE ? styles.buttonOptionSelected : styles.buttonOptionNotSelected}>
                            
                            <Text style={styles.buttonOptionText}>No</Text>
                        </RectButton>
                    </View>
                
                    <View style={styles.buttonAnswerContainer}>
                        <RectButton 
                            onPress={() => processAnswer(selectedAnswer, questions[currentQuestion-1].correct_answer)}
                            style={styles.buttonAnswer}>

                            <Text style={styles.buttonAnswerText}>Answer</Text>
                        </RectButton>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Questions;