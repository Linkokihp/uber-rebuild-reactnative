import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";

//1:Setting up Redux (done)
//2: 


export default function App() {
  return (
    <Provider store={store}>
          <SafeAreaProvider>
            <HomeScreen/>
          </SafeAreaProvider>
    </Provider>
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
