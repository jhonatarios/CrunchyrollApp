import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const globalStyle = require("../../assets/js/globalStyle.js");

export default function Account() {
 return (
    <View style={globalStyle.container}>
        <Text style={globalStyle.text}>Account</Text>
    </View>
  );
}
