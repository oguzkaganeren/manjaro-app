# Manjaro Mobile App.

## Build With

- [Expo](https://docs.expo.io)

### Installing and running localy

- Install on Manjaro with `pacman -S yarn git`
- Then `yarn global add expo-cli`
- Clone the repo on local machine `git clone https://github.com/oguzkaganeren/manjaro-app`
- `cd manjaro-app` and `yarn install`
- `yarn start`
- To start with android emulator press `a` or open web interface with pressing `d` then click run on android emulator

### To build local

```
yarn global add turtle-cli
```

Add below lines to with `sudo -H gedit /etc/environment`

```
EXPO_ANDROID_KEYSTORE_PASSWORD="yourkey"
EXPO_ANDROID_KEY_PASSWORD="yourkey"
```

After that reboot the system

Inside of project folder run the command:

```
expo export --public-url http://127.0.0.1:8000 --dev --force
```

Then, go dist folder `cd dist` and

```
python -m http.server 8000
```

Then

```
sudo turtle build:android --type apk --keystore-path <yourjkslocation> --keystore-alias "yourkey" --allow-non-https-public-url --public-url http://127.0.0.1:8000/android-index.json -o ~/Desktop/manjaro.apk

```

### Libraries used, get familiar with them

- [react-native](https://www.reactnative.com/)
- [ui-kitten](https://akveo.github.io/react-native-ui-kitten/)
- [react-navigation](https://reactnavigation.org/)
- [eva-icons](https://akveo.github.io/eva-icons/#/)
- [fontawesome-icons](https://fontawesome.com/v4.7.0/icons/)
