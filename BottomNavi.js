import React from 'react';
import { createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation';
import IndexPage from './Pages/IndexPage';
import NewMessagePage from './Pages/NewMessagePage';
import ChatPage from './Pages/ChatPage';
import UpdateProfilePage from './Pages/UpdateProfilePage';
import SettingsScreen from './Pages/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import styles from './Components';

  //Icon Navigation
  class IconWithBadge extends React.Component {
    render() {
      const { name, badgeCount, color, size } = this.props;
      return (
        <View style={styles.iconSize}>
          <Ionicons name={name} size={size} color={color} />
          { badgeCount > 0 && (
            <View style={{
              // If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -8,
              top: -8,
              backgroundColor: 'red',
              borderRadius: 15,
              width: 22,
              height: 18,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>{badgeCount}</Text>
            </View>
          )}
        </View>
      );
    }
  }
  //Count Sms
  const HomeIconWithBadge = (props) => {
    // You should pass down the badgeCount in some other ways like react context api, redux, mobx or event emitters.
    return <IconWithBadge {...props} badgeCount={3} />;  
  }

const Home = createStackNavigator({ 
  Index:{
    screen: IndexPage,
  },
  NewMessage:{
    screen: NewMessagePage,
  },
   
});
//let Settings = createStackNavigator({ SettingsScreen });
//var UpdateProfile = createStackNavigator({ UpdateProfilePage });
const Settings = createStackNavigator(
  {
    MainSetting: {screen: SettingsScreen},
    UpdateProfile: {screen: UpdateProfilePage},
    
  },

  );
const Chat = createStackNavigator({ ChatPage });


const TabNavigator = createBottomTabNavigator({
    //Home: { screen: HomePage },
    Home,
    Settings,
    Chat,
    },

    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-chatbubbles`;
            // Sometimes we want to add badges to some icons. 
            // You can check the implementation below.
            IconComponent = HomeIconWithBadge; 
          } else if (routeName === 'Settings') {
            iconName = `ios-options`;
          }
  
          // You can return any component that you like here!
          return <IconComponent name={iconName} size={26} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: '#007AFF',
        inactiveTintColor: 'gray',
        style: {
          paddingTop: 10,
          height: 55,
          backgroundColor: '#f8f8f8',
        },

      },
      
    },
    {
      initialRouteName: "Settings",
      
    },
    
    );



export default TabNavigator;