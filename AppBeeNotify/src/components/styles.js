import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
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
      height: '45%'
    },
    brandText: {
      color: '#CD6F00',
      fontSize: 35,
      marginTop: '-5%',
    },
    imageContainer: {
      alignItems: 'center',
      flexDirection: 'column'
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
    },
    botao: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    textoBotao: {
      color: 'white',
      fontSize: 18,
      textAlign: 'center',
    },
    inputText: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 12,
      paddingHorizontal: 8,
    },
    buttom: {
      padding: 5,
    },
    horizontalBar: {
      backgroundColor: '#EDEDED',
      height: '0.4%',
      width: '90%',
      marginVertical: 10
    },
    connectivityStatus: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    textButtom: {
      fontSize: 14,
      color: '#fff'
    },
    styleButtom: {
      borderRadius: 10,
      backgroundColor: '#FB0',
      height: '14%',
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    textStatus: {
      fontSize: 22,
      color:'#CD6F00'
    },
    space:{
      paddingTop: 30
    },
    content: {
      marginLeft: 35, // Adicione a margem desejada à esquerda
    },
    textInformative: {
      padding: 5,
      fontSize: 13,
    },
    textDataSystem: {
      fontSize: 17,
      color: '#CD6F00',
      paddingTop: 15
    },
    textApiario: {
      fontWeight: 'bold',
      fontSize: 17,
      paddingLeft: 20
    },
    textUser: {
      fontSize: 17,
      paddingLeft: 20
    }
    
  });

  export { styles };