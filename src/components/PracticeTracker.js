
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function PracticeTracker({
  solved,
  onSolve,
  onReset,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Practice Tracker</Text>

      <Text style={styles.counter}>
        Solved: {solved}
      </Text>

      {solved >= 5 && (
        <Text style={styles.success}>
          Great job!
        </Text>
      )}

      <View style={styles.button}>
        <Button
          title="Solve +1"
          onPress={onSolve}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Reset"
          onPress={onReset}
          color="#C0392B"
        />
      </View>
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
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#23395B',
  },
  counter: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  success: {
    color: '#16803C',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  button: {
    marginTop: 8,
  },
});
