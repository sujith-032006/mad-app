import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      router.replace('/(tabs)');
    } else {
      alert("Invalid login details");
    }
  };

  return (
    <LinearGradient colors={['#1e3a8a', '#0f172a']} style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

        {/* App Title */}
        <Text style={styles.logo}>🏠</Text>
        <Text style={styles.title}>Smart Home</Text>
        <Text style={styles.subtitle}>Control everything, anywhere</Text>

        {/* Glass Card */}
        <View style={styles.card}>

          <TextInput
            placeholder="Username"
            placeholderTextColor="#94a3b8"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#94a3b8"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />

          {/* Login Button */}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          {/* Hint */}
          <Text style={styles.hint}>
            admin / 1234
          </Text>

        </View>

      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },

  logo: {
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitle: {
    color: '#cbd5f5',
    marginBottom: 30,
    textAlign: 'center',
  },

  card: {
    width: 300,
    backgroundColor: '#ffffff20',
    padding: 20,
    borderRadius: 20,
  },

  input: {
    backgroundColor: '#ffffff30',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    color: '#fff',
  },

  button: {
    backgroundColor: '#22c55e',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  hint: {
    color: '#94a3b8',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 12,
  }
});
