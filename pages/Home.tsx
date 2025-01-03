import React, { useState } from "react";
import { Text, View, SafeAreaView, ScrollView, Platform } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import PhonePePaymentSDK from 'react-native-phonepe-pg';
import { style } from "./stylesheets/Style";
import PPButton from "./Container/PPButton";
import PPTextField from "./Container/PPTextField";

const Home = () => {
  const [requestBody, setRequestBody] = useState<string>('');
  const [merchantId, setMerchantId] = useState<string>('');
  const [flowId, setFlowId] = useState<string>('');

  const [openEnvironment, setOpenEnvironment] = useState(false);
  const [environmentDropDownValue, setEnvironmentValue] = useState('PRODUCTION');

  const [environements, setEnvironment] = useState([
    { label: 'SANDBOX', value: 'SANDBOX' },
    { label: 'PRODUCTION', value: 'PRODUCTION' }
  ]);

  const [callbackURL, setCallbackURL] = useState<string>('reactDemoAppScheme');

  const handleStartTransaction = () => {
      PhonePePaymentSDK.startTransaction(
        requestBody,
        callbackURL
      ).then(a => {
        setMessage(JSON.stringify(a));
      }).catch(error => {
        setMessage("error:" + error.message);
      })
  };

  const initPhonePeSDK = () => {
    PhonePePaymentSDK.init(
      environmentDropDownValue,
      merchantId,
      flowId,
      true
    ).then(result => {
      setMessage("Message: SDK Initialisation ->" + JSON.stringify(result));
    }).catch(error => {
      setMessage("error:" + error.message);
    })
  };

  const [message, setMessage] = useState<string>('Message: ');

  const getUPIAppsInstalled = () => {
    if (Platform.OS == "ios") {
      getUPIAppsInstalledForiOS();
    } else {
      PhonePePaymentSDK.getUpiAppsForAndroid().then(a => {
        setMessage(JSON.stringify(a));
      }).catch(error => {
        setMessage("error:" + error.message);
      })
    }
  };

  const getUPIAppsInstalledForiOS = () => {
    PhonePePaymentSDK.getUPIAppsInstalledforIos().then(a => {
      setMessage(JSON.stringify(a));
    }).catch(error => {
      setMessage("error:" + error.message);
    })
  };

  return (
    <SafeAreaView>
      <View style={style.container}>
        <ScrollView>
          <Text style={style.heading}>RN Merchant Demo App</Text>

          <PPTextField
            title="Merchant ID:"
            placeholder="Enter Merchant ID"
            setValue={setMerchantId}
          />

          <PPTextField
            title="FLOW ID:"
            placeholder="Enter Flow ID"
            setValue={setFlowId}
          />

          <Text>Environment:</Text>
          <DropDownPicker
            open={openEnvironment}
            listMode="SCROLLVIEW"
            value={environmentDropDownValue}
            items={environements}
            setOpen={setOpenEnvironment}
            setValue={setEnvironmentValue}
            setItems={setEnvironment}
            style={style.dropdown}
          />

          <PPButton
            title="Init SDK"
            onPress={initPhonePeSDK}
          />

          <PPTextField
            title="Request Body:"
            placeholder="Enter request body"
            setValue={setRequestBody}
          />
          {Platform.OS == "ios" &&

            <PPTextField
              title="App Schema:"
              value={callbackURL}
              placeholder="Enter app schema url"
              setValue={setCallbackURL}
            />
          }

          <PPButton
            title="Start Transaction"
            onPress={handleStartTransaction}
          />

          <View style={style.bckView}>
            <PPButton
              title="Check Installed Apps"
              onPress={getUPIAppsInstalled}
            />
          </View>

          <Text style={{ marginVertical: 4 }}>{message}</Text>
          <View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Home;