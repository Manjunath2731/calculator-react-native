import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Switch, Text } from "react-native";
import { myColors } from './src/styles/Colors';
import { ThemeContext } from './src/context/ThemeContext';
import MyKeyboard from './src/components/MyKeyboard';
import TopBar from './src/components/TopBar';
import { View } from 'react-native';
import { Styles } from './src/styles/GlobalStyles';




export default function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, { backgroundColor: 'black' }]}>
{/* 
          <TopBar /> */}
          <Switch
            value={theme === 'dark'}
            onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            ios_backgroundColor="black"
            style={styles.switch}
          />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  switch:{
    minWidth:"90%",
    marginTop:50,
    height:50
  }
});
