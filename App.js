/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {TabNavigator,TabBarBottom,DrawerNavigator} from 'react-navigation';

import HomePage from './js/pages/HomePage';
import PracticePage from './js/pages/PracticePage';
import MinePage from './js/pages/MinePage';
import OhterPage from './js/pages/OtherPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

const TabNav = TabNavigator({
        Home: {
            screen: HomePage,
            navigationOptions:{
                tabBarLabel:'首页',
                tabBarIcon:({focused,tintColor})=>(
                    <Ionicons
                        name={focused?'ios-home':'ios-home-outline'}
                        size={26}
                        style={{color:tintColor}}
                    />
                 ),
            }
        },
        Practice: {
            screen: PracticePage,
            navigationOptions:{
                tabBarLabel:'训练',
                tabBarIcon:({focused,tintColor})=>(
                    <Ionicons
                        name={focused?'ios-book':'ios-book-outline'}
                        size={26}
                        style={{color:tintColor}}
                    />
                ),
            }
        },
        Mine: {
            screen: MinePage,
            navigationOptions:{
                tabBarLabel:'我的',
                tabBarIcon:({focused,tintColor})=>(
                    <Ionicons
                        name={focused?'ios-people':'ios-people-outline'}
                        size={26}
                        style={{color:tintColor}}
                    />
                ),
            }
        }
    },
    {
        tabBarComponent:TabBarBottom,


        tabBarPosition:'bottom',
        tabBarOptions:{
            activeTintColor:'#E67F11',
            inactiveTintColor: '#666',

        }
    });
const DrawerNav =DrawerNavigator({
    Main:{
        screen:TabNav,
        navigationOptions:{
            drawerLabel:"主页"
        }
    },
    Other:{
        screen:OhterPage,
        navigationOptions:{
            drawerLabel:'其他'
        }
    }
},{

    drawerWidth:300,
    contentOptions:{


    }
});
export default class App extends Component<Props> {
    render() {
        return (
            <DrawerNav/>
        );
    }
}

