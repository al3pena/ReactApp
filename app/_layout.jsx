import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#3c8415ff' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: '700' },
      }}
    />
  );
}