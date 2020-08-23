import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import propTypes from 'prop-types';
import styles from './styles';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('FoodList')}>
        <Text style={styles.btnText}> Launch </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

Home.propTypes = {
  navigation: propTypes.object,
};

export default Home;
