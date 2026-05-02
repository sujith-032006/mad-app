import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  const [devices, setDevices] = useState([
    { name: 'Light', icon: '💡', status: true },
    { name: 'Fan', icon: '🌀', status: false },
    { name: 'AC', icon: '❄️', status: false },
    { name: 'TV', icon: '📺', status: true },
    { name: 'Speaker', icon: '🔊', status: false },
    { name: 'Door Lock', icon: '🔐', status: true },
    { name: 'Heater', icon: '🔥', status: false },
    { name: 'Camera', icon: '📷', status: true },
    { name: 'Washing Machine', icon: '🧺', status: false },
    { name: 'Refrigerator', icon: '🧊', status: true },
  ]);

  const toggleDevice = (index: number) => {
    const updated = [...devices];
    updated[index].status = !updated[index].status;
    setDevices(updated);
  };

  const activeCount = devices.filter(d => d.status).length;

  return (
    <LinearGradient colors={['#0f172a', '#1e3a8a']} style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome 👋</Text>
        <Text style={styles.title}>Smart Home</Text>
      </View>

      {/* SUMMARY CARD */}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          {activeCount} Devices ON
        </Text>
      </View>

      {/* DEVICE GRID */}
      <ScrollView contentContainerStyle={styles.grid}>
        {devices.map((device, index) => (
          <View key={index} style={styles.card}>
            
            <Text style={styles.icon}>{device.icon}</Text>
            <Text style={styles.device}>{device.name}</Text>

            <Switch
              value={device.status}
              onValueChange={() => toggleDevice(index)}
              thumbColor={device.status ? '#22c55e' : '#ccc'}
              trackColor={{ false: '#555', true: '#22c55e55' }}
            />

            <Text
              style={[
                styles.status,
                { color: device.status ? '#22c55e' : '#ef4444' },
              ]}
            >
              {device.status ? 'ON' : 'OFF'}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* LOGOUT */}
      <TouchableOpacity
        style={styles.logout}
        onPress={() => router.replace('/login')}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },

  header: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  greeting: {
    color: '#cbd5f5',
    fontSize: 16,
  },

  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },

  summary: {
    margin: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#ffffff20',
  },

  summaryText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 120,
  },

  card: {
    width: 150,
    height: 180,
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#ffffff15',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    fontSize: 36,
    marginBottom: 10,
  },

  device: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },

  status: {
    marginTop: 6,
    fontWeight: 'bold',
  },

  logout: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: '#ef4444',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },

  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});