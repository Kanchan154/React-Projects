import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const [text, setText] = React.useState('');

  const speak = () => {
    Speech.speak(text);
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter text to speak....."
        onChangeText={setText}
        style={styles.input}
      />
      <Button title="Speak" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', padding: 20,
  },
  input: {
    borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10,
  },
});
