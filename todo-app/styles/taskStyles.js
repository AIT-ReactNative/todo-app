import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    title: {
        height: 45,
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 60,
        justifyContent: 'space-evenly'
    },

    newBox: {
        width: '75%',
        alignItems: 'center',
    },

    textSize: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default styles