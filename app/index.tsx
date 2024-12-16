import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const quotes = [
  'The only way to do great work is to love what you do. - Steve Jobs',
  'Life is what happens when you’re busy making other plans. - John Lennon',
  'The journey of a thousand miles begins with one step. - Lao Tzu',
  'Believe you can and you’re halfway there. - Theodore Roosevelt',
  'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
  'Keep smiling, because life is a beautiful thing and there’s so much to smile about. - Marilyn Monroe',
  'In the middle of every difficulty lies opportunity. - Albert Einstein',
]

const index: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState<string>(
    'Tap the button to generate a quote'
  )
  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setCurrentQuote(quotes[randomIndex])
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quotes Generator</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={generateQuote}>
          Generate Quote
        </Text>
      </TouchableOpacity>
      <Text style={styles.quote}>{currentQuote}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#030303',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    padding: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  quote: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '500',
    paddingHorizontal: 20,
  },
})

export default index
