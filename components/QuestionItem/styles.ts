import { StyleSheet } from 'react-native';

const pink = '#f56767';
const white = '#fff';

const styles = StyleSheet.create({

    container:{
        alignSelf: 'center',
        justifyContent: 'center'
    },

    questionText:{
        fontFamily: 'Archivo_400Regular',
        textAlign: 'center',
        fontSize: 25,
        color: white
    },

    squareLine:{
        borderColor: "#FFF",
        borderWidth: 1,
        padding: '5%',
        paddingTop: '5%',
        paddingBottom: '15%',
        margin: '5%',
        maxWidth: '100%',
        maxHeight: '80%',
        flexDirection:'row', 
        flexWrap: 'wrap'
    }
});

export default styles;