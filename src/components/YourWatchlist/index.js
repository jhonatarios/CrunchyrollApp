import React, { Component }  from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

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

export default function YourWatchlist() {
 return (
    <View style={styles.container}>
        <Text style={styles.headerText}>
            YOUR WATCHLIST
        </Text>
        <ScrollView style={styles.containerPicks} horizontal={true} showsHorizontalScrollIndicator={false}>
            
            <TouchableOpacity style={styles.animeButton}>
                <ImageLoader
                  source={require('../../assets/img/icons/a12.png')}
                  style={styles.animeAgeRate}
                /> 

                <ImageLoader 
                source={require('../../assets/img/animes/boku-no-hero-academia.jpg')}
                style={styles.animeImage}
                />

                <Text style={styles.nameAnime}>My Hero Academia</Text>
                <Text style={styles.episodeAnime}>Up Next: S6 E130</Text>
                <Text style={styles.typeAnime}>Series</Text>
            
            </TouchableOpacity>

            <TouchableOpacity style={styles.animeButton}>
                
            <ImageLoader
                  source={require('../../assets/img/icons/a14.png')}
                  style={styles.animeAgeRate}
                /> 

                <ImageLoader 
                source={require('../../assets/img/animes/skull-face.jpg')}
                style={styles.animeImage}
                />

                <Text style={styles.nameAnime}>Skull-face Bookseller Honda-san</Text>
                <Text style={styles.episodeAnime}>Start Watching: S1 E1</Text>
                <Text style={styles.typeAnime}>Series</Text>
            
            </TouchableOpacity>        

            <TouchableOpacity style={styles.animeButton}>
                
            <ImageLoader
                  source={require('../../assets/img/icons/a16.png')}
                  style={styles.animeAgeRate}
                /> 

                <ImageLoader 
                source={require('../../assets/img/animes/jujutsu-kaisen.jpg')}
                style={styles.animeImage}
                />

                <Text style={styles.nameAnime}>JUTSU KAISEN</Text>
                <Text style={styles.episodeAnime}>Continue: S2 E28</Text>
                <Text style={styles.typeAnime}>Series</Text>
            
            </TouchableOpacity>     

        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 8,
        padding: 8,
    },
    containerPicks:{
        maxHeight: 280,
        marginBottom: 140,
        marginTop: 18,
    },
    animeButton:{
        flexDirection: 'column',
        backgroundColor: '#213944',
        height: 170,
        width: 160,
        alignItems: 'left',
        marginRight: 8,
    },
    animeImage:{
        height: 90,
        width: 160,
    },
    nameAnime:{
        position: 'absolute',
        top: 90,
        left: 4,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    typeAnime:{
        position: 'absolute',
        top: 148,
        left: 4,
        color: '#2abdbb',
        fontSize: 12,
    },
    episodeAnime:{
      position: 'absolute',
      top: 130,
      left: 4,
      color: '#fff',
      opacity: 0.9,
      fontSize: 12,
  },
  animeAgeRate:{
    position: 'absolute',
    height: 18,
    width: 18,
    top: 4,
    right: 4,
    zIndex: 999,
  },
    headerText:{
        color: 'white',
        fontWeight: 'bold',
    }
})