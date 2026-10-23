
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Stopwatch({ seconds, isRunning }) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime =
    `${String(minutes).padStart(2, '0')}:` +
    `${String(remainingSeconds).padStart(2, '0')}`;

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Lab Stopwatch</Text>

      <Text style={styles.timer}>{formattedTime}</Text>

      <Text style={styles.status}>
        {isRunning ? 'Running…' : 'Paused'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 14,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#23395B',
  },
  timer: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#172B4D',
  },
  status: {
    marginTop: 8,
    fontSize: 17,
    color: '#526579',
  },
});
