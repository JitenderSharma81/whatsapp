import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppBody from './AppBody.js';
import Chat from './Chat.js';
//import Profile from './src/components/profile.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { MenuProvider } from 'react-native-popup-menu';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import {createStackNavigator,} from 'react-navigation';

export default class Home extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.mainContainer}><MenuProvider>
        <View style={styles.topheaderContainer}></View>

        <View style={styles.headerContainer}>
          <View style={styles.leftHeaderContainer}>
            <Text style={styles.logoText}>WhatsApp</Text>
          </View>

          <View style={styles.rightHeaderContainer}>
            <Icon name="search" color='#fff' size={23} style={{ padding: 5 }} />
            <Icon name="call" color='#fff' size={23} style={{ padding: 5 }} />

            <Menu>
              <MenuTrigger>
                <Icon name="more-vert" color='#fff' size={23} style={{ padding: 5 }} />
              </MenuTrigger>
              <MenuOptions>
                <MenuOption onSelect={() =>navigate('Profile', { name: 'Jane' })} text='Save' />
                <MenuOption onSelect={() => alert(`Delete`)} >
                  <Text style={{ color: 'red' }}>Delete</Text>
                </MenuOption>
                <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
              </MenuOptions>
            </Menu>
          </View>

        </View>

        <View style={styles.contentContainer}>
          <ScrollableTabView
            tabBarUnderlineColor="#fff"
            tabBarUnderlineStyle={{ backgroundColor: "#fff" }}
            tabBarBackgroundColor="#075e54"
            tabBarActiveTextColor="#fff"
            tabBarInactiveTextColor="#88b0ac"
          >
            {/* <Chat tabLabel="Chats" {...this.props} /> */}

            <Chat tabLabel="Chats" {...this.props} />

            <AppBody tabLabel="Calls" {...this.props} />
            <Chat tabLabel="Contacts" {...this.props} />
          </ScrollableTabView>
          {/* <AppBody></AppBody>
            <Chat></Chat> */}
        </View></MenuProvider>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 24
  },
  topheaderContainer: {
    flex: .3,
    // flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#11554D",
    alignItems: "center",
    paddingRight: 5,
    // borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: 2
  },
  headerContainer: {
    flex: .5,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#075e54",
    alignItems: "center",
    paddingRight: 5,

  },
  leftHeaderContainer: {
    alignItems: "flex-start",
    // flexDirection: "row",
  },
  rightHeaderContainer: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  contentContainer: {
    flex: 6,
  },
  logoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    alignItems: "flex-start",
    marginLeft: 10
  },
  // imageView: {

  //     width: "99%",
  //     margin: 1,
  //     borderRadius: 90,
  //     borderColor: "black",
  //     borderWidth: 1,
  //     flex: 1,
  //   },
  // rowContainer: {
  //     flexDirection: "row",
  //     borderColor: "red",
  //     borderWidth: 1,
  //  //   width:"100%",
  //     height:100,
  //  //   alignItems: "center",
  // },
  // imageContainer: {
  //     flex: 2,
  //     borderColor: "green",
  //     borderWidth: 1,
  //     margin:1,
  //   //  borderRadius: 90, 
  // },
  // dataContainer: {
  //     flex: 6,
  //     borderColor: "black",
  //     borderWidth: 1,
  //     margin:1
  // },
});
