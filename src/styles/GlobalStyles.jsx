import { StyleSheet } from "react-native";
import { myColors } from "./Colors";

export const Styles = StyleSheet.create({
    // Button
    btnBlue: {
        width: 72,
        height: 72,
        borderRadius: 50,
        backgroundColor: myColors.blue,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnDark: {
        width: 72,
        height: 72,
        borderRadius: 50,
        backgroundColor: myColors.btnDark,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnLight: {
        width: 72,
        height: 72,
        borderRadius: 50,
        backgroundColor: myColors.white,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnGray: {
        width: 72,
        height: 72,
        borderRadius: 50,
        backgroundColor: myColors.btnGray,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    smallTextLight: {
        fontWeight:'500',
        fontSize: 32,
        color: myColors.white,
    },
    smallTextDark: {
        fontSize: 32,
        color: myColors.black,
    },
    // Keyboard
    row: {
        maxWidth: '100%',
        flexDirection: "row",
    },
    red:{
        backgroundColor:"#dc2f02"
    },
    viewBottom: {
        position: 'absolute',
        bottom: 10,
    },
    screenFirstNumber: {
        fontSize: 55,
        color: myColors.white,
        fontWeight: '400',
        paddingRight:5,
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: myColors.gray,
        fontWeight: '100',
        alignSelf: "flex-end",
    },
    topBar:{
        top:100,
        height:50,
        minWidth:'95%',
        color: myColors.black,
        backgroundColor:myColors.black,
        borderWidth:1,
        borderColor:myColors.white,
        borderRadius:10,
    },
    UnitContainer:{
        color:myColors.light,
        top:50,
        height:50,
        minWidth:'95%',
        color: myColors.gray,
        backgroundColor:myColors.white,
        borderRadius:10,

    },
    topBarStyle:{
        flex:1,
        justifyContent:'space-between',
        flexDirection:"row"
    },

})