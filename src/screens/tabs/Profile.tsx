import React, {useEffect} from 'react';
import {View, Alert, ScrollView} from 'react-native';

import {hooks} from '../../hooks';
import {utils} from '../../utils';
import {items} from '../../items';
import {svg} from '../../assets/svg';
import {components} from '../../components';

const Profile: React.FC = () => {
  const navigation = hooks.useAppNavigation();

  const user = hooks.useAppSelector(state => state.userSlice.user);

  // const emailVerified = user?.emailVerified || false;
  // const phoneVerified = user?.phoneVerified || false;

  console.log('user', JSON.stringify(user, null, 2));

  // const phoneVerifiedAlert = (): void => {
  //   Alert.alert(
  //     'Phone number is verified',
  //     'Your phone number is already verified.',
  //     [
  //       {
  //         text: 'OK',
  //         onPress: () => {
  //           console.log('OK Pressed');
  //         },
  //       },
  //     ],
  //     {cancelable: false},
  //   );
  // };

  // const emailVerifiedAlert = (): void => {
  //   Alert.alert(
  //     'Email is verified',
  //     'Your email is already verified.',
  //     [
  //       {
  //         text: 'OK',
  //         onPress: () => {
  //           console.log('OK Pressed');
  //         },
  //       },
  //     ],
  //     {cancelable: false},
  //   );
  // };

  const renderUserInfo = (): JSX.Element => {
    return (
      <components.UserData
        onPress={() => {
          navigation.navigate('EditProfile');
        }}
        containerStyle={{marginBottom: utils.responsiveHeight(30)}}
      />
    );
  };

  const renderMenu = (): JSX.Element => {
    return (
      <View style={{paddingLeft: 20}}>
        <items.ProfileItem
          title={'Personal info'}
          onPress={() => {
            navigation.navigate('EditProfile');
          }}
          icon={<svg.UserSvg />}
          goNavigation={true}
          containerStyle={{marginBottom: utils.responsiveHeight(10)}}
        />
        <items.ProfileItem
          title='Privacy Policy'
          onPress={() => {
            navigation.navigate('PrivacyPolicy');
          }}
          icon={<svg.FileTextSvg />}
          goNavigation={true}
          containerStyle={{marginBottom: utils.responsiveHeight(6)}}
        />
        <items.ProfileItem
          title='Prenium'
          onPress={() => {
            console.log('Prenium');
          }}
          icon={<svg.FileTextSvg />}
          goNavigation={true}
          containerStyle={{marginBottom: utils.responsiveHeight(6)}}
        />
        <items.ProfileItem
          title='Sign out'
          onPress={() => {
            navigation.navigate('LogOut');
          }}
          icon={<svg.SignOutSvg />}
          containerStyle={{marginBottom: utils.responsiveHeight(10)}}
        />
        <items.ProfileItem
          title='Delete account'
          onPress={() => {
            navigation.navigate('DeleteAccount');
          }}
          icon={<svg.DeleteSvg />}
        />
      </View>
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: utils.responsiveHeight(50),
          paddingBottom: utils.responsiveHeight(20),
        }}
        showsVerticalScrollIndicator={false}
      >
        {user && renderUserInfo()}
        {renderMenu()}
      </ScrollView>
    );
  };

  return renderContent();
};

export default Profile;
