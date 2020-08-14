import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import unescape from 'lodash/unescape';

interface RankingItem{
    id: number;
    name: string;
    score: number;
    max_score: number;
}

interface RankingItemProps{
    rankingItemProps: RankingItem,
    index: number,
}

const RankingItem: React.FC<RankingItemProps> = ({index,  rankingItemProps }) => {
    
    return (
        <View>
            <View style={styles.squareContainer}>
                <Text style={styles.rankingText}>
                    {index + " - " + rankingItemProps.name + " | " + rankingItemProps.score + " of " + rankingItemProps.max_score}
                </Text>
            </View>
        </View>
    )
}

export default RankingItem;