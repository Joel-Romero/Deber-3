import { StackScreenProps } from '@react-navigation/stack'; 
import React from 'react' 
import { Image,View, Text, Button, TouchableOpacity } from 'react-native'; 
import { styles } from '../Themes/Themes';

export const Screen1 = ({navigation}:any) => { 
return ( 
    <View style={styles.globalMargin}>  
        <Text style={styles.title}>Bienvenido</Text> 
        <View>
        <Image source={{uri:'https://iconecta.es/blog/wp-content/uploads/2019/12/2.jpg'}  
        }style={styles.avatar} 
        />
        </View>
        <Button 
        title='Acceder' 
        onPress={()=> navigation.navigate('Dividir', {data:'someData'})}color="#003B6F">  
        </Button>
        
    </View> 
) 
}
export default Screen1;
