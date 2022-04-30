import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import * as Localization from 'expo-localization'

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

        const date = await fetchDate(Localization.timezone);
        setDate(date);
    }, [])

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home</Text>
        </View>
    )
}