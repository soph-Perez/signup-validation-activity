import { StyleSheet, Text, View, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

const ConfirmationScreen = () => {
  const router = useRouter();
  const { firstName } = useLocalSearchParams<{ firstName?: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Submission Successful</Text>
      <Text style={styles.message}>
        Account created for {firstName ?? 'you'}!
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Back to Sign Up"
          onPress={() => router.back()}
          color="#f42dbf"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'rgb(255, 51, 245)',
    textAlign: 'center',
    marginBottom: 12,
  },
  message: {
    fontSize: 18,
    color: '#e8e8e8',
    textAlign: 'center',
    marginBottom: 32,
  },
  buttonContainer: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default ConfirmationScreen;
