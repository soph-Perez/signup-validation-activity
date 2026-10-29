import {StyleSheet, Text, TextInput, View, Button, ScrollView} from 'react-native';

import { z } from 'zod';
import signUpSchema from '@/schema/signupSchema';

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUpScreen= () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <Text style={styles.subtitle}>
        Enter your details into the fields below:
      </Text>

      {/* First Name */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          autoCapitalize="words"
          autoCorrect={false}
        />
      </View>

      {/* Last Name */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          autoCapitalize="words"
          autoCorrect={false}
        />
      </View>

      {/* Email */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="johndoe@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      {/* Password */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="At least 8 characters"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      {/* Confirm Password */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Re-enter your password"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      {/* Submit Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Sign Up"
          onPress={() => {}}
          color="#f42dbf"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    padding: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'rgb(255, 51, 245)',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#e8e8e8',
    textAlign: 'center',
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#f42dbf',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#FAFAFA',
  },
  buttonContainer: {
    marginTop: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default SignUpScreen;