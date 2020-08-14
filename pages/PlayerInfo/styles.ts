import { StyleSheet } from 'react-native';

const pink = '#f56767';
const white = '#fff';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: white,
        width: "100%",
        height: "100%",
    },

    title:{
        fontFamily: 'Archivo_400Regular',
        padding: '5%',
        fontSize: 30,
        color: white,
        textAlign: 'center',
    },

    titleBold:{
        fontFamily: 'Archivo_600SemiBold',
    },

    buttonContainer:{
        marginTop: '10%',
        marginBottom: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonStart:{
        width: '50%',
        backgroundColor: pink,
        borderRadius: 20,
        padding: 25,
        alignItems: 'center'
    },

    buttonBeginText:{
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 30,
        textAlign: 'center',
        color: white
    },

    textInput:{
        fontSize: 20,
        width: '80%',
        height: '8%',
        marginTop: '10%',
        backgroundColor: white,
        borderRadius: 15,
        paddingLeft: '5%',
        alignSelf: 'center'
    },

    content:{
        flex: 1,
        justifyContent: 'center'
    }
});

export default styles;