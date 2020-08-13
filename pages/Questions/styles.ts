import { StyleSheet, Dimensions } from 'react-native';

const green = '#12820d';
const pink = '#f56767';
const white = '#fff';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        height: "100%",
        width: '100%'
    },

    title:{
        fontFamily: 'Archivo_400Regular',
        fontSize: 25,
        marginTop: '10%',
        color: white,
    },

    titleBold:{
        fontFamily: 'Archivo_600SemiBold',
    },

    buttonOptionsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '10%',
        marginBottom: '10%',
    },

    buttonAnswerContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonOptionNotSelected:{
        width: '45%',
        backgroundColor: pink,
        borderRadius: 20,
        padding: '4%',
        alignItems: 'center'
    },

    buttonOptionSelected:{
        width: '45%',
        backgroundColor: green,
        borderRadius: 20,
        padding: '4%',
        alignItems: 'center'
    },

    buttonAnswer:{
        width: '80%',
        backgroundColor: pink,
        borderRadius: 20,
        padding: '4%',
        alignItems: 'center',
        marginBottom: '5%'
    },

    buttonOptionText:{
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 25,
        textAlign: 'center',
        color: white
    },

    buttonAnswerText:{
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 35,
        textAlign: 'center',
        color: white
    },

    buttonsContainer:{
        alignSelf: 'center',
        position: 'absolute',
        bottom: '2%'
    },

    content:{
        flex: 1,
        justifyContent: 'center'
    },

    loadingView:{
        flex:1, 
        justifyContent: "center", 
        alignItems: "center"
    },

    questionBox:{
        position:'absolute', 
        alignSelf: 'center', 
        top: Math.round(Dimensions.get('window').height/5)
    }
});

export default styles;