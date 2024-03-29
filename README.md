# pg-sdk-react-native-sample
Sample App to demonstrate the integration of PhonePe PG SDK React Native package.

> [!NOTE]
> To run the sample app, you must add your encrypted keys. Please get in touch with the ```PhonePe integration team``` (merchant-integration@phonepe.com) to generate your credentials for testing the payment flow.

> [!WARNING]  
> Without valid credentials this sample app wouldn't work.

```

open project
open terminal
```
```
npm i
npm i react-native-dropdown-picker
```

To load the PhonePe PG package with node_modules
```
npm i https://phonepe.mycloudrepo.io/public/repositories/phonepe-mobile-react-native-sdk/releases/v2/react-native-phonepe-pg.tgz
```

For installing iOS Native dependencies
```
cd ios
pod install
```


To run on iOS:
```
npm run ios
```
or
```
npx react-native run-ios
```

To run on Android:
```
npm run android
```

For more details, Please visit the Dev Docs : [PhonePe Developer Docs](https://developer.phonepe.com/v1/docs/react-native-sdk-integration-standard).

