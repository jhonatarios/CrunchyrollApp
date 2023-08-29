import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const globalStyle = require("../../assets/js/globalStyle.js");

export default function Home() {
 return (
    
    <View style={style.container}>

        <View style={style.topBar}>
          <Image 
            source={require('../../assets/img/crunchyroll_logo.png')}
            style={style.logo} 
            resizeMode="contain"
          ></Image>
          <TouchableOpacity>
            <Ionicons name="search" style={style.searchButton}/>
          </TouchableOpacity>
        </View>

        <Image
          source={require('../../assets/img/mushoku-tensei-jobless-reincarnation.png')}
          resizeMode="cover" 
          style={style.imageBackgroundAR}
          />

        <View style={style.animeRecomendation}>
          
            <View style={style.descriptionAnimeRecomendation}>
              <Text style={style.darAnimeTitle}>Mushoku Tensei: Jobless Reincarnation</Text>
              <Image
                source={require('../../assets/img/a16.png')}
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
              <Text style={style.darWatchNowAgeVerify}>
                <Ionicons name="information-circle-outline" style={style.darWatchNowAgeVerifyIcon}/>
                Check the Indicative Rating
              </Text>
            </View>
          
        </View>

        <View style={style.topPicksForYou}>
          <Text style={globalStyle.text}>Teste</Text>
        </View>


    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
  },
  topBar:{
    height: 'auto',
    width: '100%',
    backgroundColor: 'black',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 12,
    zIndex: 9999,
  },
  logo:{
    width: 160, 
    height: 35,
  },
  searchButton:{
    color: 'white',
    fontSize: 24,
    padding: 6,
  },
  animeRecomendation:{
    flex: 1,
  },
  imageBackgroundAR:{
    position: 'absolute',
    width: '100%', 
    height: 350,
    top: 60,
  },
  descriptionAnimeRecomendation:{
    marginTop: 200,
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
    textAlign: 'center',
    padding: 16,
    color: '#fff'
  },
  darWatchNowAgeVerifyIcon:{
    color: 'white',
    fontSize: 24,
    marginRight: 10,
  },

  //Top picks
  topPicksForYou:{
    height: 100,
    flex: 1,
  }
})
