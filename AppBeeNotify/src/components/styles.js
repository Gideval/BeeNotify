import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#FFBB00',
    },
    imageBackground: {
      width: '50%',
      height: '50%',
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    viewCustom: {
      flex: 0.55, // Define a altura da metade da tela
      backgroundColor: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5))`, 
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    customLinearGradient: {
      flex: 0.55,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      width: '100%',
      height: '2000%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    customTop: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        
    },
    image: {
        width: 200,
        height: 100,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#CD6F00',
      },
      gradient: {
        width: '100%',
        height: '55%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },
      input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 10,
      },
      clickableText: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginTop: 10,
      },

  });

  export { styles };