import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface QuestionCategoryProps{
    category: string;
}

const QuestionCategory: React.FC<QuestionCategoryProps> = ({ category }) => {

    return (
        <View>
            <Text style={styles.categoryText}>{category}</Text>
        </View>
    )
}

export default QuestionCategory;