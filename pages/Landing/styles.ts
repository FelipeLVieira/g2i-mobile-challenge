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

    title:{
        fontFamily: 'Archivo_400Regular',
        padding: '5%',
        fontSize: 30,
        marginTop: '10%',
        color: white,
        textAlign: 'center',
    },

    titleBold:{
        fontFamily: 'Archivo_600SemiBold',
    },

    buttonContainer:{
        marginTop: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonBegin:{
        width: '50%',
        backgroundColor: pink,
        borderRadius: 20,
        padding: '5%',
        alignItems: 'center'
    },

    buttonBeginText:{
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 30,
        textAlign: 'center',
        color: white
    },

    content:{
        flex: 1,
        justifyContent: 'center'
    }
});

export default styles;