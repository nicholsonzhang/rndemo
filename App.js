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
import {TabNavigator,TabBarBottom} from 'react-navigation';

import HomePage from './js/pages/HomePage';
import PracticePage from './js/pages/PracticePage';
import MinePage from './js/pages/MinePage';
import Ionicons from 'react-native-vector-icons/Ionicons';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

const Root = TabNavigator({
        Home: {
            screen: HomePage,
            navigationOptions:{
                tabBarLabel:'首页',
                tabBarIcon:({tintColor,focused})=>(
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
                tabBarIcon:({tintColor,focused})=>(
                    <Ionicons
                        name={focused?'ios-home':'ios-home-outline'}
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
                tabBarIcon:({tintColor,focused})=>(
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
        tabBarOption:{

        }
    });
export default class App extends Component<Props> {
    render() {
        return (
            <Root/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
