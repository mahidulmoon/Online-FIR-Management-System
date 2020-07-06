import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter,Switch,Route } from 'react-router-native';
import Index from './Components/Index';
import Login from './Components/Login';
import RegisterFIR from './Components/RegisterFIR';
export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
      <Switch>
        <Route exact path='/' component={Index} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/registerfir' component={RegisterFIR} />
      </Switch>
      </View>
    </NativeRouter>
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
