import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Auth = createNativeStackNavigator();

const SignupScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.signUpView}>
      <Button
        title="Already have an account? Sign In instead."
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signUpView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignupScreen;
