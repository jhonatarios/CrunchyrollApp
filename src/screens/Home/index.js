import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import TopPicks from '../../components/TopPicks';
import AnimeRecomendation from '../../components/AnimeRecomendation';
import KeepWatching from '../../components/KeepWatching';
import YourWatchlist from '../../components/YourWatchlist';
import MostPopular from '../../components/MostPopular';

class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                })
              },
            ],
          },
          this.props.style,
        ]}
      />
    );
  }
}

export default function Home() {
 return (
    <><View style={style.topBar}>
     <Image
       source={require('../../assets/img/logo/crunchyroll_logo.png')}
       style={style.logo}
       resizeMode="contain"
     ></Image>
     <TouchableOpacity>
       <Ionicons name="search" style={style.searchButton} />
     </TouchableOpacity>
   </View><ScrollView style={style.container}>
      <View>
       <ImageLoader
         source={require('../../assets/img/animes/mushoku-tensei-jobless-reincarnation.jpg')}
         resizeMode="cover"
         style={style.imageBackgroundAR} />
      </View>
       <View style={style.animeRecomendation}>
         <AnimeRecomendation />
       </View>
       
       <View style={style.topPicksForYou}>
         <TopPicks />
       </View>

       <View style={style.keepWatching}>
         <KeepWatching />
       </View>

       <View style={style.yourWatchlist}>
         <YourWatchlist />
       </View>

       <View style={style.mostPopular}>
         <MostPopular />
       </View>

     </ScrollView></>
  );
}

const style = StyleSheet.create({
  container:{
    flexDirection: 'column',
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
    position: 'absolute',
    top: 0,
    flex: 1,
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
    flexDirection: 'column'
  },
  imageBackgroundAR:{
    position: 'absolute',
    width: '100%', 
    height: 600,
    top: 60,
  },
  topPicksForYou:{
    flex: 2,
    minHeight: 340,
  },
  keepWatching:{
    flex: 3,
    minHeight: 340,
    marginTop: -140,
  },
  yourWatchlist:{
    flex: 4,
    minHeight: 340,
    marginTop: -140,
  },
  mostPopular:{
    flex: 5,
    minHeight: 340,
    marginTop: -140,
  }

})
