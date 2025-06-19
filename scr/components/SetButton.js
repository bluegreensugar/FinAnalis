import React from 'react';
import {Button, View} from 'react-native'


const SetButton=({title, onPress})=>{
    return(
        <View>
            <Button
                title={title}
                onPress={onPress}
                color='#add8e6' 
            />
        </View>
    )

}

export default SetButton;