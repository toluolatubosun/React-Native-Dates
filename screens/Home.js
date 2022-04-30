import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import * as Localization from 'expo-localization'

import { globalStyles } from '../styles/global';
import moment from '../utils/moment';

const fetchDate = async (timeZone) => {
    const response = await fetch(`http://worldtimeapi.org/api/timezone/${timeZone}`);
    const data = await response.json();
    return data;
}

export default function Home(){
    const [timeZone, setTimeZone] = React.useState('');
    const [date, setDate] = React.useState('');

    React.useEffect(async () => {
        setTimeZone(Localization.timezone);
    }, [])

    React.useEffect(() => {
        if(!timeZone) return;

        const interval = setInterval(async () => {
            const date = await fetchDate(timeZone);
            setDate(date);
        }, 1000);

        return () => clearInterval(interval);        
    }, [timeZone])

    const [inputTimeZone, setInputTimeZone] = React.useState('');

    const HandleSubmit = async () => {
        setTimeZone(inputTimeZone);
    }

    return(
        <View style={globalStyles.container}>
            <TextInput 
                style={globalStyles.input} 
                value={inputTimeZone}
                onChangeText={setInputTimeZone}
            />
            <Pressable style={globalStyles.button} onPress={HandleSubmit}>
                <Text style={globalStyles.buttonText}>Submit</Text>
            </Pressable>

            <Text style={globalStyles.titleText}>{timeZone}</Text>
            <Text style={globalStyles.LargeText}>{moment.getTime(date?.datetime)}</Text>
            <Text style={globalStyles.titleText}>{moment.getDate(date?.datetime)}</Text>
        </View>
    )
}