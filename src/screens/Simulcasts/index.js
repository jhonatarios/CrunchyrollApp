import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const globalStyle = require("../../assets/js/globalStyle.js");

export default function Simulcasts() {
 return (
    <View style={globalStyle.container}>
        <Text style={globalStyle.text}>Simulcasts</Text>
    </View>
  );
}
