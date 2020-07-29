import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';


const Logo = () => (
  <Image source={require('./images/Logo.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    marginTop: 150,
    marginBottom: 12,
    width: 128,
    height: 128,
  },
});

export { Logo };
