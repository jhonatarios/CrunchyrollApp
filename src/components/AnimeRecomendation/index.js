import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AnimeRecomendation() {
 return (
    <View style={style.descriptionAnimeRecomendation}>
    <Text style={style.darAnimeTitle}>Mushoku Tensei: Jobless Reincarnation</Text>
    <Image
      source={require('../../assets/img/icons/a16.png')}
      resizeMode="cover" 
      style={style.darAgeRate}
    />
    <Text style={style.darAnimeDescription}>
    Follows the story of a 34-year-old Japanese man who dies in a car 
    accident and is reincarnated as a baby named Rudeus Greyrat in a 
    new fantasy world filled with magic.
    </Text>
    <TouchableOpacity style={style.darWatchNow}>
      <Ionicons name="play-outline" style={style.darWatchNowIcon}/>
      <Text style={style.darWatchNowText}>WATCH NOW</Text>
    </TouchableOpacity>
    <View style={style.darWatchNowAgeVerify}>
      <Ionicons name="information-circle-outline" style={style.darWatchNowAgeVerifyIcon}/>
        <Text style={style.darWatchNowAgeVerifyText}>Check the Indicative Rating</Text>
    </View>
  </View>
  );
}

const style = StyleSheet.create({

      descriptionAnimeRecomendation:{
        flex: 1,
        marginTop: 450,
        padding: 8,
      },
      darAnimeTitle:{
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 8,
      },
      darAnimeDescription:{
        fontSize: 12,
        color: 'white',
        marginBottom: 8,
      },
      darAgeRate:{
        height: 20,
        width: 20,
        marginBottom: 8,
      },
      darWatchNow:{
        backgroundColor: '#f47521',
        width: 160,
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginBottom: 8,    
      },
      darWatchNowText:{
        color: '#23252b',
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 8,
        paddingRight: 16,
      },
      darWatchNowIcon:{
        color: '#23252b',
        fontSize: 28,
        paddingLeft: 8,
        paddingTop: 4,
        paddingBottom: 4,
      },
      darWatchNowAgeVerify:{
        width: '100%',
        backgroundColor: '#23252b',
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      darWatchNowAgeVerifyText:{
        color: '#fff',
      },
      darWatchNowAgeVerifyIcon:{
        color: 'white',
        fontSize: 24,
        marginRight: 10,
      },
})