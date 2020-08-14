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

    titleBold:{
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 30,
        color: white,
        textAlign: 'center',
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

    divisoryLine: {
        borderBottomColor: white,
        borderWidth: 1
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
    },

    loadingView:{
        flex:1, 
        justifyContent: "center", 
        alignItems: "center"
    },

    scrollView:{ 
        flex: 1, 
        maxHeight: '50%'
    }

});

export default styles;