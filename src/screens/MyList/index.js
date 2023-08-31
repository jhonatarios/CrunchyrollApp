import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const globalStyle = require("../../assets/js/globalStyle.js");


export default function MyList() {
  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.text}>My list</Text>
    </View>
  );
}
