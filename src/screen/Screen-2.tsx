import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';
import { styles } from '../../Themes/Themes';

export const Screen2 = () => {
  const [number1, setNumber1] = useState<string>('');
  const [number2, setNumber2] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const Dividir = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Ingrese de nuevo');
      return;
    }

    if (num2 === 0) {
      Alert.alert('Error', num1 === 0 ? 'Indeterminacion' : 'No exixte division para cero');
      setResult('');
      return;
    }

    setResult((num1 / num2).toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresa dos Numeros:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={number1}
        onChangeText={setNumber1}
        placeholder="Primer Numero"
        placeholderTextColor="#B0B0B0"
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={number2}
        onChangeText={setNumber2}
        placeholder="Segundo Numero"
        placeholderTextColor="#B0B0B0"
      />
      <Button title="Resultado" onPress={Dividir} color="#003B6F" />
      {result && <Text style={styles.result}>{result}</Text>}
    </View>
  );
};

export default Screen2;
