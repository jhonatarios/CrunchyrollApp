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

export default function TopPicks() {
 return (
    <View style={styles.container}>
        <Text style={styles.headerText}>
            TOP PICKS FOR YOU
        </Text>
        <ScrollView style={styles.containerPicks} horizontal={true} showsHorizontalScrollIndicator={false}>
            
            <TouchableOpacity style={styles.animeButton}>
                
                <ImageLoader 
                source={require('../../assets/img/animes/one-piece.png')}
                style={styles.animeImage}
                />

                <View style={styles.actionButton}>
                    <Ionicons name="ellipsis-vertical" size={18} color="#fff"/>
                </View>

                <Text style={styles.nameAnime}>One Piece</Text>
                <Text style={styles.typeAnime}>Series</Text>
            
            </TouchableOpacity>

            <TouchableOpacity style={styles.animeButton}>
                
                <ImageLoader 
                source={require('../../assets/img/animes/black-clover.png')}
                style={styles.animeImage}
                />

                <View style={styles.actionButton}>
                    <Ionicons name="ellipsis-vertical" size={18} color="#fff"/>
                </View>

                <Text style={styles.nameAnime}>Black Clover</Text>
                <Text style={styles.typeAnime}>Series</Text>
            
            </TouchableOpacity>

            <TouchableOpacity style={styles.animeButton}>
                
                <ImageLoader 
                source={require('../../assets/img/animes/naruto-shippuden.png')}
                style={styles.animeImage}
                />

                <View style={styles.actionButton}>
                    <Ionicons name="ellipsis-vertical" size={18} color="#fff"/>
                </View>

                <Text style={styles.nameAnime}>Naruto Shippuden</Text>
                <Text style={styles.typeAnime}>Series</Text>
            
            </TouchableOpacity>

            <TouchableOpacity style={styles.animeButton}>
                
                <ImageLoader 
                source={require('../../assets/img/animes/fate-zero.png')}
                style={styles.animeImage}
                />

                <View style={styles.actionButton}>
                    <Ionicons name="ellipsis-vertical" size={18} color="#fff"/>
                </View>

                <Text style={styles.nameAnime}>Fate/Zero</Text>
                <Text style={styles.typeAnime}>Series</Text>
            
            </TouchableOpacity>

            <TouchableOpacity style={styles.animeButton}>
                
                <ImageLoader 
                source={require('../../assets/img/animes/mob-pyscho-100.png')}
                style={styles.animeImage}
                />

                <View style={styles.actionButton}>
                    <Ionicons name="ellipsis-vertical" size={18} color="#fff"/>
                </View>

                <Text style={styles.nameAnime}>Mob Pyscho 100</Text>
                <Text style={styles.typeAnime}>Series</Text>
            
            </TouchableOpacity>

            <TouchableOpacity style={styles.animeButton}>
                
                <ImageLoader 
                source={require('../../assets/img/animes/yu-gi-oh-zexal.png')}
                style={styles.animeImage}
                />

                <View style={styles.actionButton}>
                    <Ionicons name="ellipsis-vertical" size={18} color="#fff"/>
                </View>

                <Text style={styles.nameAnime}>Yu-Gi-Oh!ZEXAL</Text>
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
        maxHeight: 250,
        maxWidth: 120,
        minHeight: 250,
        minWidth: 120,
        alignItems: 'left',
        marginRight: 8,
    },
    animeImage:{
        maxHeight: 200,
        maxWidth: 120,
        minHeight: 200,
        minWidth: 120,
    },
    actionButton:{
        position: 'absolute',
        bottom: 4,
        right: 0,
    },
    nameAnime:{
        marginTop: 4,
        marginLeft: 4,
        color: '#dadada',
    },
    typeAnime:{
        marginTop: 4,
        marginLeft: 4,
        color: '#25787d',
    },
    headerText:{
        color: 'white',
        fontWeight: 'bold',
    }
})