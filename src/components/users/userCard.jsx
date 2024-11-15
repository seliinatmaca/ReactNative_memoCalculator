
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {userCardStyle} from '../../styles/users/usersStyle';
import {compareName} from '../../utils/funtions';
import FastImage from 'react-native-fast-image';

const UserCard = ({user}) => {
  return (
    <View style={userCardStyle.container}>
      <View>
        <FastImage
          style={userCardStyle.image}
          source={{
            uri: user?.picture?.large,
            priority: FastImage.priority.high,
            cache: FastImage.cacheControl.immutable,
          }}
          resizeMode={FastImage.resizeMode.contain}
          onLoadStart={() => console.log('start load')}
        />
      </View>
      <View
        style={{
          marginHorizontal: 10,
          paddingVertical: 10,
        }}>
        <Text style={userCardStyle.name}>
          {compareName(user.name.title, user.name.first, user.name.last)}
        </Text>
        <Text style={userCardStyle.email}>{user.email}</Text>
      </View>
    </View>
  );
};

export default UserCard;
