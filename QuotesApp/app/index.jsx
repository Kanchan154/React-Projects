import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import QuoteCard from './components/QuoteCard';
import { fetchQuotesFromAPI } from './utils/fetchQuotes';

export default function App() {
  const [quotes, setQuotes] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const loadQuotes = async () => {
    const data = await fetchQuotesFromAPI();
    if (data.length > 0) {
      setQuotes(data);
      console.log(data);
      setCurrentIndex(Math.floor(Math.random() * data.length));
    }
    setLoading(false);
  };

  useEffect(() => {
    loadQuotes();
  }, []);

  const handleNextQuote = () => {
    const next = Math.floor(Math.random() * quotes.length);
    setCurrentIndex(next);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0984e3" />
        <Text style={styles.loadingText}>Loading Quotes...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <QuoteCard quote={quotes[currentIndex]} onNext={loadQuotes} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffeaa7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#ffeaa7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#2d3436',
  },
});
