import { StyleSheet } from 'react-native'

export default Style = StyleSheet.create({
    // your styles here 
    container: {
        height: '100%',
        justifyContent: 'center',               
     },


     details: {
        position: 'absolute',
       top: 0,
       left: 10, 
        width: '100%',
        justfyContent: 'center',
        alignItems: 'center'

     },

     inputBox: {
        position: 'absolute',
        top: 110,
        left: 10, 
         width: '85%',
         height: 60,
         borderRadius: 10,
         textAlign: 'left',
         justifyContent: 'center',
         backgroundColor: '#00FFF0',
         borderBottomColor: '#DBFF00',
         borderBottomWidth: 5
     },

     inputBox2: {
        position: 'absolute',
        top: 190,
        left: 10, 
         width: '85%',
         height: 60,
         borderRadius: 10,
         textAlign: 'left',
         justifyContent: 'center',
         backgroundColor: '#00FFF0',
         borderBottomColor: '#DBFF00',
         borderBottomWidth: 5
     },
     inputBox3: {
        position: 'absolute',
        top: 270,
        left: 10, 
         width: '85%',
         height: 60,
         borderRadius: 10,
         textAlign: 'left',
         justifyContent: 'center',
         backgroundColor: '#00FFF0',
         borderBottomColor: '#DBFF00',
         borderBottomWidth: 5
     },

     button: {
        position: 'absolute',
        top: 350,
        left: 20, 
         width: '85%',
         height: 60,
         borderRadius: 10,
         textAlign: 'center',
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#000000',
         paddingBottom:4
       
     },

     button2: {
        position: 'absolute',
        top: 350,
        left: 20, 
         width: '85%',
         height: 60,
         borderRadius: 10,
         textAlign: 'center',
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: 'blue',
         paddingBottom:4
       
     },


     footer: {
        position: 'absolute',
        top: 400,
        left: 20, 
         width: '85%',
         height: 60,
         borderRadius: 10,
         textAlign: 'center',
         justifyContent: 'center',
         alignContent: 'center',
         paddingBottom:4,
         alignItems: 'center',
         flexDirection: 'row',
         gap: 10,
        
         
     },

     buttonText: {
        color: '#FDFDFD',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold', 
     },

        skipText: {
            fontSize: 17, 
        },
     
     buttonText2: {
        color: '#DBFF00',
        textAlign: 'center',
        alignItems: 'center',
        
        fontSize: 20,
        fontWeight: 'bold',
        textShadowColor: '#000',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 5,
        
        
     },

     inputText: {
        padding: 10,
        fontSize: 20
         
     },
    
    
     headingTitle: {
        fontFamily: 'sans-serif',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
        alignItems:'center'
     },


    logo: {
        width: 400,
        height: 350,
        position: 'absolute',
        top: 20,
        bottom: 0,
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    body: {
       backgroundColor: '#fff',
       height: '65%',
       borderTopWidth: 2,
       borderLeftWidth:2,
       borderColor: '#000',
       width: '100%',
       position: 'absolute',
       bottom: 0,
       borderTopLeftRadius: 100,
      
       
            },

    heading: {
        borderTopWidth:10,
        width: '100%',
        
       
    }
})