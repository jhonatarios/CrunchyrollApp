import React, { Component } from 'react';
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

export default function KeepWatching() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerPicks} horizontal={true} showsHorizontalScrollIndicator={false}>

        <TouchableOpacity style={styles.animeButton}>
          <ImageLoader
            source={require('../../assets/img/animes/preview/mushoku-tensei-jobless-reincarnation.jpg')}
            style={styles.animeImage}
          />

          <ImageLoader
            source={require('../../assets/img/icons/a16.png')}
            style={styles.animeAgeRate}
          />

          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="ellipsis-vertical" size={24} color="#bababa" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.playButton}>
            <Ionicons name="play-sharp" size={24} color="#f47521" />
            <Text style={styles.playButtonText}>WATCH NEXT</Text>
          </TouchableOpacity>

          <Text style={styles.animeTimeLeft}></Text>

          <Text style={styles.nameAnime}>Mushoku Tensei: Jobless Reincarnation</Text>
          <Text style={styles.episodeAnime}>S1 E13 - Missed Connections</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.animeButton}>
          <ImageLoader
            source={require('../../assets/img/animes/preview/sacrificial-princess-and-the-king-of-beasts.jpg')}
            style={styles.animeImage}
          />

          <ImageLoader
            source={require('../../assets/img/icons/a14.png')}
            style={styles.animeAgeRate}
          />

          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="ellipsis-vertical" size={24} color="#bababa" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.playButton}>
            <Ionicons name="play-sharp" size={24} color="#f47521" />
            <Text style={styles.playButtonText}>CONTINUE WATCHING</Text>
          </TouchableOpacity>

          <Text style={styles.animeTimeLeft}>4m left</Text>

          <Text style={styles.nameAnime}>Sacrificial Princess and the King of Beasts</Text>
          <Text style={styles.episodeAnime}>S1 E10 - Day of Festival and Revelation</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.animeButton}>
          <ImageLoader
            source={require('../../assets/img/animes/preview/zom-100.jpg')}
            style={styles.animeImage}
          />

          <ImageLoader
            source={require('../../assets/img/icons/a16.png')}
            style={styles.animeAgeRate}
          />

          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="ellipsis-vertical" size={24} color="#bababa" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.playButton}>
            <Ionicons name="play-sharp" size={24} color="#f47521" />
            <Text style={styles.playButtonText}>WATCH NEXT</Text>
          </TouchableOpacity>

          <Text style={styles.animeTimeLeft}></Text>

          <Text style={styles.nameAnime}>Zom 100: Bucket List of the Dead</Text>
          <Text style={styles.episodeAnime}>S1 E2 - </Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    padding: 8,
  },
  containerPicks: {
    maxHeight: 280,
    marginBottom: 140,
    marginTop: 18,
  },
  animeButton: {
    flexDirection: 'column',
    backgroundColor: '#000',
    height: 200,
    width: 360,
    alignItems: 'left',
    marginRight: 8,
  },
  animeImage: {
    position: 'absolute',
    height: 200,
    width: 360,
    opacity: 0.5,
  },
  animeAgeRate: {
    position: 'absolute',
    height: 18,
    width: 18,
    top: 8,
    right: 32,
  },
  animeTimeLeft: {
    position: 'absolute',
    bottom: 8,
    right: 12,
    padding: 4,
    color: 'white',
    fontSize: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    textAlign: 'center'
  },
  actionButton: {
    flexDirection: 'row',
    position: 'absolute',
    top: 4,
    right: 0,
    alignItems: 'center',
  },
  playButton: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 4,
    left: 12,
    alignItems: 'center',
  },
  playButtonText: {
    color: '#f47521',
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 4,
  },
  nameAnime: {
    marginTop: 4,
    marginLeft: 8,
    color: '#bababa',
  },
  episodeAnime: {
    marginLeft: 8,
    color: '#fff',
    fontSize: 18,
  },
})