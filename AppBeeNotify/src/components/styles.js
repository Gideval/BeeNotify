import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingTop: '10%',
    },
    topView: {
      backgroundColor: '#FFBB00',
      width: '100%', 
      height: '30%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    middleView: {
      position: 'absolute',
      top: 200, 
      backgroundColor: '#ffff',
      width: '100%', 
      height: '80%',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    responsiveImage: {
      resizeMode:'contain',
      height: '40%'
    },
    titleText: {
      color: '#CD6F00',
      fontFamily: 'normal',
      fontSize: 30,
      fontStyle: 'normal'
    },
    imageContainer: {
      alignItems: 'center',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    imageBackground: {
      width: '100%',  
      height: '100%', 
      justifyContent: 'center',
      alignItems: 'center',
    },

  });

  export { styles };