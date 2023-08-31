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

export default function MostPopular() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        MOST POPULAR
      </Text>
      <ScrollView style={styles.containerPicks} horizontal={true} showsHorizontalScrollIndicator={false}>

        <TouchableOpacity style={styles.animeButton}>

          <ImageLoader
            source={require('../../assets/img/icons/a14.png')}
            style={styles.animeAgeRate}
          />

          <ImageLoader
            source={require('../../assets/img/animes/one-piece.png')}
            style={styles.animeImage}
          />

          <View style={styles.actionButton}>
            <Ionicons name="ellipsis-vertical" size={18} color="#fff" />
          </View>

          <Text style={styles.nameAnime}>One Piece</Text>
          <Text style={styles.typeAnime}>Series</Text>

        </TouchableOpacity>


        <TouchableOpacity style={styles.animeButton}>

          <ImageLoader
            source={require('../../assets/img/icons/a16.png')}
            style={styles.animeAgeRate}
          />

          <ImageLoader
            source={require('../../assets/img/animes/demon-slayer.jpg')}
            style={styles.animeImage}
          />

          <View style={styles.actionButton}>
            <Ionicons name="ellipsis-vertical" size={18} color="#fff" />
          </View>

          <Text style={styles.nameAnime}>Demon Slayer: Kimetsu no Yaiba</Text>
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

          <View style={styles.actionButton}>
            <Ionicons name="ellipsis-vertical" size={18} color="#fff" />
          </View>

          <Text style={styles.nameAnime}>JUJUTSU KAISEN</Text>
          <Text style={styles.typeAnime}>Series</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.animeButton}>

          <ImageLoader
            source={require('../../assets/img/icons/a16.png')}
            style={styles.animeAgeRate}
          />

          <ImageLoader
            source={require('../../assets/img/animes/zom-100.jpg')}
            style={styles.animeImage}
          />

          <View style={styles.actionButton}>
            <Ionicons name="ellipsis-vertical" size={18} color="#fff" />
          </View>

          <Text style={styles.nameAnime}>Zom 100: Bucket List of the Dead</Text>
          <Text style={styles.typeAnime}>Series</Text>

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
    backgroundColor: '#213944',
    height: 270,
    width: 120,
    alignItems: 'left',
    marginRight: 8,
  },
  animeImage: {
    maxHeight: 200,
    maxWidth: 120,
    minHeight: 200,
    minWidth: 120,
  },
  actionButton: {
    position: 'absolute',
    bottom: 4,
    right: 0,
  },
  nameAnime: {
    marginTop: 4,
    marginLeft: 4,
    fontSize: 12,
    color: '#dadada',
    fontWeight: 'bold',
  },
  typeAnime: {
    position: 'absolute',
    bottom: 4,
    left: 4,
    fontSize: 12,
    color: '#2abdbb',
  },
  animeAgeRate: {
    position: 'absolute',
    height: 18,
    width: 18,
    top: 4,
    left: 4,
    zIndex: 999,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
  }
})