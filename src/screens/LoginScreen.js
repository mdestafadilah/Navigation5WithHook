import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';

// Komponen
import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';
import {TextButton} from '../components/TextButton';
import {Error} from '../components/Error';

// Contexts
import {AuthContext} from '../contexts/AuthContext';

export function LoginScreen({navigation}) {
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>LOGIN</Heading>
      <Error error={'I am an Error'} />
      <Input
        style={styles.input}
        placeholder={'email'}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        style={styles.input}
        placeholder={'password'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <FilledButton
        title="Login"
        style={styles.loginButton}
        onPress={() => {
          login(email, password);
        }}
      />
      <TextButton
        title={'Sudah punya akun? buat ya'}
        onPress={() => {
          navigation.navigate('Registration');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 100,
    alignItems: 'center',
  },
  title: {
    marginBottom: 48,
  },
  input: {
    marginVertical: 20,
  },
  loginButton: {
    marginVertical: 32,
  },
});
