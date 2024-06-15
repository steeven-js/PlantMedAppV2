import axios, {AxiosError} from 'axios';
import {
  View,
  Text,
  Alert,
  Platform,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';

import {alert} from '../../alert';
import {hooks} from '../../hooks';
import {utils} from '../../utils';
import {custom} from '../../custom';
import {theme} from '../../constants';
import {components} from '../../components';
import {actions} from '../../store/actions';
import {CONFIG, ENDPOINTS} from '../../config';
import {VerifyPhoneScreenProps} from '../../types/ScreenProps';

const Verification: React.FC<VerifyPhoneScreenProps> = ({route}) => {
  const dispatch = hooks.useAppDispatch();
  let {email, phoneNumber} = route.params;

  const navigation = hooks.useAppNavigation();

  const inp1Ref = useRef(null);
  const inp2Ref = useRef(null);
  const inp3Ref = useRef(null);
  const inp4Ref = useRef(null);
  const inp5Ref = useRef(null);

  const [inp1, setInp1] = useState('');
  const [inp2, setInp2] = useState('');
  const [inp3, setInp3] = useState('');
  const [inp4, setInp4] = useState('');
  const [inp5, setInp5] = useState('');

  const [loading, setLoading] = useState<boolean>(false);

  const otp = inp1 + inp2 + inp3 + inp4 + inp5;

  useEffect(() => {
    if (inp1Ref.current) {
      (inp1Ref.current as TextInput).focus();
    }
  }, []);

  useEffect(() => {
    if (
      inp1Ref.current &&
      inp2Ref.current &&
      inp3Ref.current &&
      inp4Ref.current &&
      inp5Ref.current
    ) {
      if (otp.length === 5) {
        (inp1Ref.current as TextInput).blur();
        (inp2Ref.current as TextInput).blur();
        (inp3Ref.current as TextInput).blur();
        (inp4Ref.current as TextInput).blur();
        (inp5Ref.current as TextInput).blur();
        handleVerify();
      }
    }
  }, [otp]);

  const handleVerify = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: 'post',
        headers: CONFIG.headers,
        data: {email, phoneNumber, otp},
        url: ENDPOINTS.VERIFY_PHONE_OTP,
      });

      if (response.status === 200) {
        dispatch(actions.setUser(response.data.user));
        navigation.replace('PhoneVerified');
        return;
      }

      alert.somethingWentWrong();
    } catch (error) {
      const err = error as AxiosError;

      if (err.response?.status === 401) {
        return alert.invalidOtp();
      }

      alert.somethingWentWrong();
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: 'post',
        headers: CONFIG.headers,
        data: {email, phoneNumber},
        url: ENDPOINTS.SEND_PHONE_OTP,
      });

      if (response.status === 200) {
        Alert.alert('OTP sent successfully');
        return;
      }

      alert.somethingWentWrong();
    } catch (error) {
      alert.somethingWentWrong();
    } finally {
      setLoading(false);
    }
  };

  const renderHeader = (): JSX.Element => {
    return <components.Header goBackIcon={true} title='Verification' />;
  };

  const renderDescription = (): JSX.Element => {
    return (
      <Text
        style={{
          marginBottom: utils.responsiveHeight(20),
          ...theme.fonts.DM_Sans_400Regular,
          color: theme.colors.textColor,
          fontSize: Platform.OS === 'ios' ? 16 : 14,
          lineHeight: 16 * 1.7,
        }}
        numberOfLines={1}
      >
        Enter your OTP code here.
      </Text>
    );
  };

  const renderInputFields = (): JSX.Element => {
    const inputStyle: object = {
      textAlign: 'center',
      flex: 1,
      width: '100%',
      fontSize: Platform.OS === 'ios' ? 20 : 18,
      color: theme.colors.mainColor,
    };

    const inputContainerStyle: object = {
      width: utils.responsiveWidth(59),
      height: utils.responsiveWidth(59),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#E7EBEB',
      backgroundColor: theme.colors.white,
    };

    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: utils.responsiveHeight(15),
        }}
      >
        <View style={{...inputContainerStyle}}>
          <TextInput
            ref={inp1Ref}
            maxLength={1}
            style={{...inputStyle}}
            keyboardType='number-pad'
            onChangeText={text => {
              setInp1(text);
              if (text !== '') {
                if (inp2Ref.current) {
                  (inp2Ref.current as TextInput).focus();
                }
              } else if (text === '') {
                if (inp1Ref.current) {
                  (inp1Ref.current as TextInput).focus();
                }
              }
            }}
          />
        </View>
        <View style={{...inputContainerStyle}}>
          <TextInput
            ref={inp2Ref}
            maxLength={1}
            style={{...inputStyle}}
            keyboardType='number-pad'
            onChangeText={text => {
              setInp2(text);
              if (text !== '') {
                if (inp3Ref.current) {
                  (inp3Ref.current as TextInput).focus();
                }
              } else if (text === '') {
                if (inp1Ref.current) {
                  (inp1Ref.current as TextInput).focus();
                }
              }
            }}
          />
        </View>
        <View style={{...inputContainerStyle}}>
          <TextInput
            ref={inp3Ref}
            maxLength={1}
            style={{...inputStyle}}
            keyboardType='number-pad'
            onChangeText={text => {
              setInp3(text);
              if (text !== '') {
                if (inp4Ref.current) {
                  (inp4Ref.current as TextInput).focus();
                }
              } else if (text === '') {
                if (inp2Ref.current) {
                  (inp2Ref.current as TextInput).focus();
                }
              }
            }}
          />
        </View>
        <View style={{...inputContainerStyle}}>
          <TextInput
            ref={inp4Ref}
            maxLength={1}
            style={{...inputStyle}}
            keyboardType='number-pad'
            onChangeText={text => {
              setInp4(text);
              if (text !== '') {
                if (inp5Ref.current) {
                  (inp5Ref.current as TextInput).focus();
                }
              } else if (text === '') {
                if (inp3Ref.current) {
                  (inp3Ref.current as TextInput).focus();
                }
              }
            }}
          />
        </View>
        <View style={{...inputContainerStyle}}>
          <TextInput
            ref={inp5Ref}
            maxLength={1}
            style={{...inputStyle}}
            keyboardType='number-pad'
            onChangeText={text => {
              setInp5(text);
              if (text === '') {
                if (inp4Ref.current) {
                  (inp4Ref.current as TextInput).focus();
                }
              }
            }}
          />
        </View>
      </View>
    );
  };

  const renderIfDidNotReceiveCode = (): JSX.Element => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: utils.responsiveHeight(30),
        }}
      >
        <Text
          style={{
            ...theme.fonts.DM_Sans_400Regular,
            color: theme.colors.textColor,
            fontSize: Platform.OS === 'ios' ? 16 : 14,
            lineHeight: 16 * 1.7,
          }}
          numberOfLines={1}
        >
          Didn’t receive the OTP?{' '}
        </Text>
        <TouchableOpacity onPress={handleResendOtp}>
          <Text
            style={{
              ...theme.fonts.DM_Sans_400Regular,
              color: theme.colors.mainColor,
              fontSize: Platform.OS === 'ios' ? 16 : 14,
              lineHeight: 16 * 1.7,
            }}
          >
            Resend.
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        title='verify'
        loading={loading}
        onPress={() => {
          Alert.alert(
            'Sorry',
            'Unfortunatelly, this feature is not available yet.',
            [
              {
                text: 'Cancel',
                onPress: () => {
                  console.log('Cancel');
                },
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => {
                  console.log('OK');
                },
              },
            ],
            {cancelable: false},
          );
        }}
        containerStyle={{marginBottom: 20}}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1, padding: 20}}>
        {renderDescription()}
        {renderInputFields()}
        {renderIfDidNotReceiveCode()}
        {renderButton()}
      </ScrollView>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
    </custom.SafeAreaView>
  );
};

export default Verification;
