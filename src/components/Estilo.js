import { StyleSheet } from "react-native";

export default StyleSheet.create({
    titlefont: {
        fontSize: 32,
        color: 'white',
        textAlign: "center",
        fontFamily: 'PTSans-Bold',

    },
    font: {
        fontSize: 32,
        color: 'white',
        textAlign: "center",
        fontFamily: 'PTSans-Regular',

    },
    fontmenor: {
        fontSize: 22,
        color: 'white',
        textAlign: "center",
        fontFamily: 'PTSans-Regular',

    },
    fontPP: {
        fontSize: 16,
        color: 'white',
        textAlign: "center",
        fontFamily: 'PTSans-Regular',

    },
    App: {
        flexGrow: 1,  
        width: '100%',
        backgroundColor: '#82C4FF',
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    button: {
        width: 80,
        height: 80,
    },
    container: {
        flexDirection: "row",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "space-around",
        width: '100%',
    },
    buttonEnviar: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        width: 320,
    },
    countText: {
        color: "#FF00FF"
    },
    input:{
        width: 320,
        height: 50,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    inputLogin: {
        width: 320,
        height: 50,
        borderRadius: 3,
        borderWidth: 0.5,
        backgroundColor: '#fff',
    },
    seta: {
        color: 'white',
        left: 15,
        marginTop: '3%',
    },
    ajuda: {
        color: 'white',
        marginTop: '3%',
    },
    plenoemoticon: {
        color: '#0F6100',
        marginTop: '3%',
    },
    felizemoticon: {
        color: '#1AAD00',
        marginTop: '3%',
    },
    neutroemoticon: {
        color: '#FCE821',
        marginTop: '3%',
    },
    tristeemoticon: {
        color: '#FF0038',
        marginTop: '3%',
    },
    pessimoemoticon: {
        color: '#610025',
        marginTop: '3%',
    },
    Top: {
        padding: 10,
        height: 80,     
        backgroundColor: '#82C4FF',
    },
    logo: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    logoLogin: {
        width: '80%',
        resizeMode: "contain",
        backgroundColor: '#82C4FF',
    },
    loginScreen: {
        flexGrow: 1,  
        width: '100%',
        backgroundColor: '#82C4FF',
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
})