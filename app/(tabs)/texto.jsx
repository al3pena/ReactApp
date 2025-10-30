import { ScrollView, StyleSheet, Text } from 'react-native';

export default function Texto() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Página de Texto</Text>
      <Text style={styles.parrafo}>
        Esta es una pantalla simple que demuestra una segunda pestaña en el
        bottom menu. Podés colocar aquí cualquier contenido estático o dinámico
        (FAQ, instrucciones, términos de uso, etc.).
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3c8415ff',
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  titulo: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
  parrafo: {
    color: 'white',
    fontSize: 16,
    lineHeight: 22,
  },
});
