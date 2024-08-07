import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    globalMargin:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#003B6F',
   
    },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#003B6F', 
        padding: 20,
      },
      title:{
        color: 'white',
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 100,
      },
      input: {
        height: 50,
        borderRadius: 50,
        paddingHorizontal: 85,
        marginBottom: 30,
        width: '70%',
        backgroundColor: 'white',
      },
      result: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
      },
      avatar:{
            width:150,
            height:150,
            borderRadius:10,
            textAlign: 'center',
            backgroundColor: '#003B6F',
        },
      }); 
