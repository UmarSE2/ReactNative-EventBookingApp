import React from 'react';
import { StatusBar, View } from 'react-native';
import Container from '../Abstracts/Container';
import ProfileHead from '../Components/ProfileHead';
import About from '../Components/About';

const Profile = ({ navigation, route }) => {
    return (
        <Container>
            <View style={{ height: StatusBar.currentHeight }} />
            <StatusBar
                translucent={true}
                barStyle={'dark-content'}
                backgroundColor={'transparent'}
            />
            <ProfileHead own={true} navigation={navigation} route={route} />
            <About own={true} />
        </Container>
    );
};

export default Profile;
