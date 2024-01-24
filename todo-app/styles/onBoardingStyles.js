import { StyleSheet } from 'react-native'

export default Style = StyleSheet.create({
    // your styles here 
    heading: {
        backgroundColor: '#fff',
        //backgroundColor: '#F122ab1',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: 10,
       
            },

    page: {
        flex: 1,
        justifyContent: 'center',
        //backgroundColor: '#15141A',
        backgroundColor: '#FFF'
    },
            
    footer: {
        marginTop: 'auto'
    },

    images: {
        height: 280,
        width: 350,
        alignSelf: 'center',
        marginTop: 15
        },    
        
        
    title: {
        fontFamily: 'sans-serif',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        padding: 20,
    }, 

    description: {
        color: 'grey',
        fontSize: 20,
        padding: 20,
    },
    
    buttonRow: {
        marginTop: 10,
       // backgroundColor: 'yellow',
        flexDirection: 'row',
        alignItems: 'center',
        gap:20
    },

    button:{
        backgroundColor: '#302E38',
        padding: 10,
        borderRadius: 50,
        flex:1,
    
        
    },
    buttonText:{
        color: '#FDFDFD',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold', 
    },
    skipText:{
        fontFamily: 'sans-serif',
        fontSize: 20,
        color: '#6397FF',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 15,
        paddingHorizontal: 25,
    },



    stepIndicatorContainer: {
        flexDirection: "row",
        gap: 5,
        marginHorizontal: 15
    },

    stepIndicator: {
        flex:1,
        height:3,
        backgroundColor: 'gray',
        margin:2,
        borderRadius: 10,
    },
                 
    
})