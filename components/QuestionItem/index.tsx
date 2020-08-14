import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
const Entities = require('html-entities').XmlEntities;

const entities = new Entities();

interface QuestionItemProps{
    question: string;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ question }) => {

    const clearText = (text:string) => { return entities.decode(text) }
    
    return (
        <View>
            <View style={styles.squareLine}>
                <Text style={styles.questionText}>
                    {clearText(question)}
                </Text>
            </View>
        </View>
    )
}

export default QuestionItem;