import React,{Component} from 'react';
import {View,Text} from 'react-native';


export default class HomePage extends Component{



    render(){
        const {navigation} = this.props;
        return(
            <View>
                <Text>这个是训练页</Text>

                <Text onPress={()=>navigation.navigate('TwoPage')}>go to Two page</Text>
            </View>
        );
    }
}
