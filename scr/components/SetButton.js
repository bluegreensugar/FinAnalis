import React from 'react';
import {Button, View} from 'react-native'


const SetButton=({title, onPress, color})=>{
    return(
        <View>
            <Button
                title={title}
                onPress={onPress}
                color={color?color:'#add8e6'}
            />
        </View>
    )

}

export default SetButton;