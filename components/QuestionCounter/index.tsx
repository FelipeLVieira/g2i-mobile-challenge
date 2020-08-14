import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface QuestionCounterProps{
    numQuestions: number;
    currQuestion: number;
}

const QuestionCounter: React.FC<QuestionCounterProps> = ({ currQuestion, numQuestions }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.questionCounterText}> {currQuestion} of {numQuestions} </Text>
        </View>
    )
}

export default QuestionCounter;