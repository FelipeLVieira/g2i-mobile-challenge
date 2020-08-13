import { StyleSheet } from 'react-native';

const pink = '#f56767';
const white = '#fff';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        width: "100%",
        height: "100%",
    },

    resultText:{
        top: '8%',
        position: 'absolute',
        fontFamily: 'Archivo_600SemiBold',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 25,
        marginBottom: '15%',
        color: white
    },

    content:{
        flex: 1,
        justifyContent: 'center'
    },

    buttonPlayAgain:{
        width: '80%',
        height: '8%',
        backgroundColor: pink,
        borderRadius: 20,
        padding: '5%',
        alignSelf: 'center',
        position: 'absolute',
        bottom: '10%',
        justifyContent: 'space-around'
    },

    textButtonPlayAgain:{
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 30,
        textAlign: 'center',
        color: white
    }

});

export default styles;