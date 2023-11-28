import { StyleSheet } from 'react-native'

export default Style = StyleSheet.create({
    // your styles here 
    heading: {
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-around",
        gap:50,
        marginBottom:30,
       
       
    },
    container: {
        marginTop:64,
        marginHorizontal:24,
      
        
      
      
    },

    input: {
        borderBottomWidth:2,
        padding:10,
        marginBottom:30
        

    },

    inputbig: {
        borderWidth:2,
        padding:15,
        borderRadius:10,
        height:130,
        marginBottom:30
       
    },

    text: {
       flex:4, 
       fontSize:30, 
       
            },

    button: {
       backgroundColor: 'black',
       height:40, 
       weight:'50%' ,
       justifyContent:'center',
       alignItems: 'center',
       borderRadius: 100
       
            }
});



