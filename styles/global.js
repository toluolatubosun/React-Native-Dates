import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        fontFamily: 'poppins-regular',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
        fontFamily: 'poppins-regular',
    },
    container: {
        flex: 1,
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