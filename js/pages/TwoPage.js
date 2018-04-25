import React,{Component} from 'react';
import {View,Text} from 'react-native';


export default class TwoPage extends Component{



    render(){
        const {navigation} = this.props;
        return(
            <View>
                <Text>这个是Two</Text>
                <Text onPress={()=>navigation.goBack()}>返回</Text>
            </View>
        );
    }
}
