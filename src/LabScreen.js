
import { useState } from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import PracticeTracker from './components/PracticeTracker';
import Stopwatch from './components/Stopwatch';
import useStopwatch from './hooks/useStopwatch';

export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = useStopwatch(isRunning);

  const handleSolve = () => {
    setSolved(s => s + 1);
  };

  const handleReset = () => {
    setSolved(0);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Lab Timer & Practice Tracker</Text>

        <PracticeTracker
          solved={solved}
          onSolve={handleSolve}
          onReset={handleReset}
        />

        <Stopwatch
          seconds={seconds}
          isRunning={isRunning}
        />

        <View style={styles.button}>
          <Button
            title="Start"
            onPress={handleStart}
            disabled={isRunning}
            color="#16803C"
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Stop"
            onPress={handleStop}
            disabled={!isRunning}
            color="#C0392B"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EAF0F8',
  },
  container: {
    flexGrow: 1,
    padding: 22,
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#23395B',
    marginBottom: 24,
  },
  button: {
    marginTop: 8,
  },
});
