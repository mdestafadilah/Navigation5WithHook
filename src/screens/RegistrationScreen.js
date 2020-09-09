import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';

// Komponen
import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';
import {IconButton} from '../components/IconButton';
import {Error} from '../components/Error';

// Context
import {AuthContext} from '../contexts/AuthContext';

export function RegistrationScreen({navigation}) {
  const {register} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <IconButton
        style={styles.closeIcon}
        name={'close-circle-outline'}
        onPress={() => {
          navigation.pop();
        }}
      />
      <Heading style={styles.title}>REGISTRATION</Heading>
      <Error error={'I am an Error'} />
      <Input
        style={styles.input}
        placeholder={'email'}
        keyboardType="email-address"
      />
      <Input style={styles.input} placeholder={'password'} secureTextEntry />
      <FilledButton
        title="Register"
        style={styles.loginButton}
        onPress={() => {
          register();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
  closeIcon: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
});
