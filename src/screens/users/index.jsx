import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {usersScreenStyle} from '../../styles/users/usersStyle';
import axios from 'axios';
import UserCard from '../../components/users/userCard';

const Users = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const response = await axios.get(
        'https://randomuser.me/api/?results=500',
      );
      setUsers(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={usersScreenStyle.container}>
      <FlatList
        keyExtractor={item => item.login.uuid}
        data={users}
        renderItem={({item}) => <UserCard user={item} />}
      />
    </View>
  );
};

export default Users;
