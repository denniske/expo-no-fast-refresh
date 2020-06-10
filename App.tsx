import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeModules } from 'react-native';

if (__DEV__) {
  const { DevSettings } = NativeModules;
  DevSettings.setHotLoadingEnabled(false);
  DevSettings.setLiveReloadEnabled(false);
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
