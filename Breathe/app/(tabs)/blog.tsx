import React from 'react';
import { StyleSheet, Image, Platform, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Posts from '../../Posts';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function TabTwoScreen() {
  return (
    <View>
      <Posts/>
    </View>  
    
  );
}
