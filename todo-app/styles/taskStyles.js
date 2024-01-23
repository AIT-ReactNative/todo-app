import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
    },

    roundColorsBox: {
        height: 50,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    remindText: {
        fontSize: 25,
        fontWeight: 'bold'
    },

    roundNumBox: {
        alignItems: 'center',
        height: 50,
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    inputBox: {
        marginBottom: '50',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop:10,
        height: 200,
    },

    circleBox: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    selectorBox: {
        marginRight: 40,
        borderWidth: 1,
        borderRadius: 10,
        width: '40%',
        height: 40,
        margin: 10,
        justifyContent: 'center'
    },

    iconsBox: {
        width: '100%',
        height: 60,
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    iconCircle: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        height: 60,
        width: 60,
        backgroundColor: '#2F2E41'
    },

    numCircle: {
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        height: 35,
        width: 35,
        borderColor: '#2F2E41'
    },

    firstInput: {
            fontStyle: 'italic',
            borderBottomWidth:2,
            height: 50,
            width: '90%',
            padding: 10,
            marginBottom: 20,
        },

    secondInput: {
        fontStyle: 'italic',
        borderRadius: 11,
        padding: 10,
        height: 100,
        width: '90%',
        borderWidth: 2,
        marginBottom: 30,
        textAlignVertical: 'top'
    },

    title: {
        height: 45,
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 60,
        justifyContent: 'space-evenly',
    },

    newBox: {
        width: '75%',
        alignItems: 'center',
    },

    textSize: {
        fontSize: 30,
        fontWeight: 'bold'
    },

    addBox: {
        marginTop: 30,
        width: '100%',
        height: 65,
        alignItems: 'center',
    },

    addText: {
        fontSize: 20,
        color: '#FFF'
    },

    add: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2F2E41',
        height: 65,
        width: '50%',
        borderRadius: 45,
    }
})

export default styles