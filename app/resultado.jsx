import { router, useLocalSearchParams } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Resultado() {
  const { a = '0', b = '0', r = '0' } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resultado</Text>
      <Text style={styles.linea}>{a} + {b} =</Text>
      <Text style={styles.resultado}>{r}</Text>

      <View style={{ marginTop: 24 }}>
        <Button title="Volver" onPress={() => router.back()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3c8415ff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
    marginBottom: 8,
  },
  linea: {
    fontSize: 18,
    color: 'white',
  },
  resultado: {
    fontSize: 42,
    fontWeight: '800',
    color: 'white',
    marginTop: 4,
  },
});
