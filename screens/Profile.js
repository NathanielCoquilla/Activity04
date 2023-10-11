import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpksu6S3Rc6c62Ce5RmC5DGRK9Bu3Q4Nal0A&usqp=CAU' }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Nathaniel Coquilla</Text>
      <Text style={styles.bio}>
        Front-end Developer passionate about React Native and JavaScript.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  username: {
    color: '#777',
    fontSize: 16,
    marginTop: 5,
  },
  bio: {
    fontSize: 16,
    marginHorizontal: 20,
    textAlign: 'center',
  },
});

export default ProfileScreen;
