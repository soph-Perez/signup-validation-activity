import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#000000' },
        headerTintColor: '#f42dbf',
        contentStyle: { backgroundColor: '#000000' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Sign Up' }} />
      <Stack.Screen name="confirmation" options={{ title: 'Confirmation' }} />
    </Stack>
  );
}
