import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: '#3c8415ff' },
        headerTintColor: '#fff',
        tabBarActiveTintColor: '#3c8415ff',
      }}
    >
      <Tabs.Screen
        name="calc"
        options={{
             headerShown: false,
          title: 'Calculadora',
          headerTitle: 'Sumar',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calculator-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="texto"
        options={{
          title: 'Texto',
          headerTitle: 'Información',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
