import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const QuoteCard = ({ quote, onNext }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>"{quote?.q}"</Text>
      <Text style={styles.author}>— {quote?.a || 'Unknown'}</Text>

      <TouchableOpacity style={styles.button} onPress={onNext}>
        <Text style={styles.buttonText}>Next Quote</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontStyle: 'italic',
    color: '#2d3436',
    textAlign: 'center',
    marginBottom: 15,
  },
  author: {
    fontSize: 16,
    color: '#636e72',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#0984e3',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default QuoteCard;
