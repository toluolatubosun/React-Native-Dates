import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    titleText: {
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
        fontFamily: 'poppins-regular',
    },
    LargeText: {
        fontSize: 50,
        marginVertical: 40,
        color: '#333',
        textAlign: 'center',
        fontFamily: 'poppins-bold',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#333',
        padding: 14,
        borderRadius: 6,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'poppins-regular',
        textTransform: 'uppercase',
        textAlign: 'center',
    }
});