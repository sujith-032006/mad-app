import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  const [devices, setDevices] = useState([
    { name: 'Light', icon: '💡', status: false },
    { name: 'Fan', icon: '🌀', status: false },
    { name: 'AC', icon: '❄️', status: false },
    { name: 'TV', icon: '📺', status: false },
    { name: 'Speaker', icon: '🔊', status: false },
    { name: 'Door Lock', icon: '🔐', status: false },
    { name: 'Heater', icon: '🔥', status: false },
    { name: 'Camera', icon: '📷', status: false },
    { name: 'Washing Machine', icon: '🧺', status: false },
    { name: 'Refrigerator', icon: '🧊', status: false },
  ]);

  const toggleDevice = (index: number) => {
    const updated = [...devices];
    updated[index].status = !updated[index].status;
    setDevices(updated);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Smart Home Dashboard</Text>
      <Text style={styles.subtitle}>Welcome, User 👋</Text>

      <ScrollView contentContainerStyle={styles.grid}>
        {devices.map((device, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.icon}>{device.icon}</Text>
            <Text style={styles.device}>{device.name}</Text>

            <Switch
              value={device.status}
              onValueChange={() => toggleDevice(index)}
            />

            <Text style={styles.status}>
              {device.status ? "ON" : "OFF"}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Logout Button */}
      <TouchableOpacity
        style={styles.logout}
        onPress={() => router.replace('/login')}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#94a3b8',
    marginBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#1e293b',
    width: 140,
    height: 170,
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  icon: {
    fontSize: 30,
    marginBottom: 10,
  },
  device: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  status: {
    color: '#38bdf8',
    marginTop: 5,
    fontWeight: 'bold',
  },
  logout: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
  },
});