import { StyleSheet } from 'react-native';

const pink = '#f56767';
const white = '#fff';

const styles = StyleSheet.create({

    container:{
        alignSelf: 'center',
        justifyContent: 'space-around',
    },

    rankingText:{
        fontFamily: 'Archivo_400Regular',
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 20,
        color: white
    },

    squareContainer:{
        textAlignVertical: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        borderColor: "#FFF",
        borderWidth: 1,
        padding: '5%',
        margin: '5%',
        flexDirection:'row', 
        flexWrap: 'wrap',
        width: '80%'
    }
});

export default styles;