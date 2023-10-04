import React, { useState } from "react";
import { Text, View, SafeAreaView, ScrollView, Platform } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import PhonePePaymentSDK from 'react-native-phonepe-pg';
import { style } from "./stylesheets/Style";
import PPButton from "./Container/PPButton";
import PPTextField from "./Container/PPTextField";
import PPHTextField from "./Container/PPHStack";

const Home = () => {

  const [requestBody, setRequestBody] = useState<string>('');
  const [merchantId, setMerchantId] = useState<string>('');
  const [appId, setAppId] = useState<string>('');

  const [checksum, setChecksum] = useState<string>('');

  const [open, setOpen] = useState(false);
  const [dropDownValue, setValue] = useState('');

  const [items, setItems] = useState([
    { label: 'Debit', value: '/v4/debit' },
    { label: 'B2B PG', value: '/pg/v1/pay' }
  ]);


  const [openEnvironment, setOpenEnvironment] = useState(false);
  const [environmentDropDownValue, setEnvironmentValue] = useState('PRODUCTION');

  const [environements, setEnvironment] = useState([
    { label: 'UAT', value: 'UAT' },
    { label: 'UAT_SIM', value: 'UAT_SIM' },
    { label: 'PRODUCTION', value: 'PRODUCTION' }
  ]);

  const [headers, setHeaders] = useState<any>({});
  const [headerKey, setHeaderKey] = useState<string>('');
  const [headerValue, setHeaderValue] = useState<string>('');

  const [packageName, setPackageName] = useState<string>('');
  const [callbackURL, setCallbackURL] = useState<string>('');

  const handleAddHeader = () => {
    if (!headerKey || !headerValue)
      return

    setHeaders({
      ...headers,
      [headerKey]: headerValue
    })
    setHeaderKey("");
    setHeaderValue("");
  };

  const handleResetHeader = () => {
    setHeaders({})
    setHeaderKey("");
    setHeaderValue("");
  };


  const handleStartTransaction = () => {
    if (dropDownValue == "/pg/v1/pay") {
      PhonePePaymentSDK.startPGTransaction(
        requestBody,
        checksum,
        dropDownValue,
        headers,
        packageName,
        callbackURL
      ).then(a => {
        setMessage(JSON.stringify(a));
      }).catch(error => {
        setMessage("error:" + error.message);
      })
    } else {
      PhonePePaymentSDK.startContainerTransaction(
        requestBody,
        checksum,
        dropDownValue,
        headers,
        callbackURL
      ).then(a => {
        setMessage(JSON.stringify(a));
      }).catch(error => {
        setMessage("error:" + error.message);
      })
    }
  };

  const initPhonePeSDK = () => {
    PhonePePaymentSDK.init(
      environmentDropDownValue,
      merchantId,
      appId,
      true
    ).then(result => {
      setMessage("Message: SDK Initialisation ->" + JSON.stringify(result));
    }).catch(error => {
      setMessage("error:" + error.message);
    })
  };

  const [, setPhonePeAppInstalled] = useState<boolean>();
  const [, setGPayAppInstalled] = useState<boolean>();
  const [, setPaytmAppInstalled] = useState<boolean>();
  const [message, setMessage] = useState<string>('Message: ');

  const handleIsPhonePeAppInstalled = () => {
    PhonePePaymentSDK.isPhonePeInstalled().then(a => {
      setPhonePeAppInstalled(a);
      if (a) {
        setMessage("Message: PhonePe App Installed")
      } else {
        setMessage("Message: PhonePe App Unavailable")
      }
    }).catch(error => {
      setMessage("error:" + error.message);
    })
  };

  const handleIsGPayAppInstalled = () => {
    PhonePePaymentSDK.isGPayAppInstalled().then(a => {
      setGPayAppInstalled(a);
      if (a) {
        setMessage("Message: Gpay App Installed")
      } else {
        setMessage("Message: Gpay App Unavailable")
      }
    }).catch(error => {
      setMessage("error:" + error.message);
    })
  };

  const handleIsPaytmInstalled = () => {
    PhonePePaymentSDK.isPaytmAppInstalled().then(a => {
      setPaytmAppInstalled(a);
      if (a) {
        setMessage("Message: Paytm App Installed")
      } else {
        setMessage("Message: Paytm App Unavailable")
      }
    }).catch(error => {
      setMessage("error:" + error.message);
    })
  };

  const getPackageSignatureForAndroid = () => {
    if (Platform.OS === 'android') {
      PhonePePaymentSDK.getPackageSignatureForAndroid().then(packageSignture => {
        setMessage(JSON.stringify(packageSignture));
      }).catch(error => {
        setMessage("error:" + error.message);
      })
    }
  };

  const getUpiAppsForAndroid = () => {
    if (Platform.OS === 'android') {
      PhonePePaymentSDK.getUpiAppsForAndroid().then(upiApps => {
        if (upiApps != null)
          setMessage(JSON.stringify(JSON.parse(upiApps)));
      }).catch(error => {
        setMessage("error:" + error.message);
      })
    }
  };

  return (
    <SafeAreaView>
      <View style={style.container}>
        <ScrollView>
          <Text style={style.heading}>React Native Demo App</Text>

          <PPTextField
            title="Merchant ID:"
            placeholder="Enter Merchant ID"
            setValue={setMerchantId}
          />

          <PPTextField
            title="APP ID:"
            placeholder="Enter App ID"
            setValue={setAppId}
          />

          <Text>Environment:</Text>
          <DropDownPicker
            open={openEnvironment}
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

          <PPTextField
            title="Checksum:"
            placeholder="Enter CheckSum"
            setValue={setChecksum}
          />

          <Text>API Endpoint:</Text>
          <DropDownPicker
            open={open}
            value={dropDownValue}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={style.dropdown}
          />

          {Platform.OS == "ios" &&
            <View>
              <Text>Headers:</Text>
              <View>
                {
                  Object.keys(headers)?.map(key => {
                    (
                      <Text>
                        {key} : {headers[key]}
                      </Text>
                    )
                  })
                }
              </View>
              <PPHTextField
                title="Key"
                placeholder="Enter Header Key"
                setValue={setHeaderKey}
              />
              <PPHTextField
                title="Value"
                placeholder="Enter Header Value"
                setValue={setHeaderValue}
              />

              <Text style={{ marginVertical: 4 }}>{JSON.stringify(headers)}</Text>
              <View style={style.bckView}>
                <PPButton
                  headerStyle={style.centerLabel}
                  title="Reset Header"
                  onPress={handleResetHeader}
                />
                <PPButton
                  headerStyle={style.centerLabel}
                  title="Add Header"
                  onPress={handleAddHeader}
                />
              </View>
            </View>
          }
          {Platform.OS == "android" &&
            <PPTextField
              title="Package Name: "
              placeholder="Enter package name"
              setValue={setPackageName}
            />
          }
          {Platform.OS == "ios" &&

            <PPTextField
              title="CallbackURL:"
              placeholder="Enter callback url"
              setValue={setCallbackURL}
            />
          }

          <PPButton
            title="Start Transaction"
            onPress={handleStartTransaction}
          />

          <View style={style.bckView}>
            <PPButton
              title="Check PhonePe"
              onPress={handleIsPhonePeAppInstalled}
            />
            <PPButton
              title="Check PayTm"
              onPress={handleIsPaytmInstalled}
            />
            <PPButton
              title="Check GPay"
              onPress={handleIsGPayAppInstalled}
            />
          </View>

          {
            Platform.OS == "android" &&
            <View style={style.bckView}>
              <PPButton
                title="Get Package Signature"
                onPress={getPackageSignatureForAndroid}
              />
              <PPButton
                title="Get UPI Apps"
                onPress={getUpiAppsForAndroid}
              />
            </View>
          }
          <Text style={{ marginVertical: 4 }}>{message}</Text>
          <View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Home;

