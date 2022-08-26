import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import ProductFlatList from './components/card/ProductFlatList';

function App() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View>
        <Text style={styles.headerText}>PATIKASTORE</Text>
      </View>
      <ProductFlatList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    color: 'purple',
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
  },
  safeAreaContainer: {
    backgroundColor: 'white',
  },
});

export default App;
