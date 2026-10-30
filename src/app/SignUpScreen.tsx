
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';

import signUpSchema, { SignUpFormData } from '@/schema/signupSchema';

const SignUpScreen = () => {
  const router = useRouter();

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const control = form.control;
  const handleSubmit = form.handleSubmit;
  const errors = form.formState.errors;
  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = (data: SignUpFormData) => {
    const { firstName, lastName, email } = data;
    console.log('Sign up submitted:', { firstName, lastName, email });

    router.push({
      pathname: '/Confirmation',
      params: { firstName },
    });
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Create Account</Text>

      <Text style={styles.subtitle}>
        Enter your details into the fields below:
      </Text>

      {/* First Name */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <Controller
          control={control}
          name="firstName"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, errors.firstName && styles.inputError]}
              placeholder="First Name"
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.firstName && (
          <Text style={styles.errorText}>{errors.firstName.message}</Text>
        )}
      </View>

      {/* Last Name */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name</Text>
        <Controller
          control={control}
          name="lastName"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, errors.lastName && styles.inputError]}
              placeholder="Last Name"
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.lastName && (
          <Text style={styles.errorText}>{errors.lastName.message}</Text>
        )}
      </View>

      {/* Email */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, errors.email && styles.inputError]}
              placeholder="johndoe@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}
      </View>

      {/* Password */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, errors.password && styles.inputError]}
              placeholder="At least 8 characters"
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}
      </View>

      {/* Confirm Password */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, errors.confirmPassword && styles.inputError]}
              placeholder="Re-enter your password"
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.confirmPassword && (
          <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>
        )}
      </View>

      {/* Submit Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Sign Up"
          onPress={handleSubmit(onSubmit)}
          color="#f42dbf"
          disabled={isSubmitting}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000000',
    padding: 32,
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
    color: '#000000',
    backgroundColor: '#FAFAFA',
  },
  inputError: {
    borderColor: '#ff4d4f',
    borderWidth: 2,
  },
  errorText: {
    color: '#ff6b6b',
    fontSize: 13,
    marginTop: 6,
  },
  buttonContainer: {
    marginTop: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default SignUpScreen;
