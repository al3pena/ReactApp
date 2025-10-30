import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';

export default function ButtonBasics() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');

  const limpiarAmbos = () => {
    setA('');
    setB('');
  };

  const parseNumber = (s) => {
    const normalized = (s ?? '').trim().replace(',', '.');
    return normalized === '' ? NaN : Number(normalized);
  };

  const onSumar = () => {
    const n1 = parseNumber(a);
    const n2 = parseNumber(b);

    if (Number.isNaN(n1) || Number.isNaN(n2)) {
      Alert.alert('Datos inválidos', 'Ingresá dos números válidos (ej: 3.5 o 3,5).');
      return;
    }

    if (n1 === 0 || n2 === 99) {
      Alert.alert('Se introdujo el número prohibido en A o B. No se puede sumar');
      return;
    }

    const r = n1 + n2;

    // Vamos a la subpantalla de resultado dentro del tab "calc"
    router.push({
      pathname: '/(tabs)/calc/resultado',
      params: { a: String(n1), b: String(n2), r: String(r) },
    });
  };

  const otroEjemplo = () => {
    Alert.alert('Otro ejemplo!');
    Alert.prompt?.('Esto es un prompt de salida!'); // iOS
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Número A"
          value={a}
          onChangeText={setA}
          keyboardType="decimal-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Número B"
          value={b}
          onChangeText={setB}
          keyboardType="decimal-pad"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={onSumar} title="Sumar" color="#0ea5e9" />
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={otroEjemplo} title="Otro ejemplo" />
      </View>

      <View style={styles.alternativeLayoutButtonContainer}>
        <Button
          onPress={limpiarAmbos}
          title="Limpiar A y B"
          disabled={a === '' && b === ''}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3c8415ff',
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    marginHorizontal: 20,
    gap: 12,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    backgroundColor: '#3c8415ff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
