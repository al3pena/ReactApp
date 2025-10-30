import { Stack } from 'expo-router';

export default function CalcStack() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#3c8415ff' },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Sumar' }} />
      <Stack.Screen name="resultado" options={{ title: 'Resultado' }} />
    </Stack>
  );
}
