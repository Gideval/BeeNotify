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
    topViewAlarm: {
      backgroundColor: '#FFBB00',
      width: '100%', 
      height: '65%',
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
    middleViewLogin: {
      position: 'absolute',
      top: 200, 
      backgroundColor: '#ffff',
      width: '100%', 
      height: '80%',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    contentLogin: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageBackgroundLogin: {
      width: '100%',  
      height: '100%', 
      justifyContent: 'flex-start',
    },
    styleButtomLogin: {
      borderRadius: 10,
      backgroundColor: '#FB0',
      height: '11%',
      width: '90%',
      marginTop: '4%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    passwordButtom: {
      borderRadius: 10,
      backgroundColor: '#FFFFFF',
      height: '11%',
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '5%',
      borderColor: '#FB0',
      borderWidth: 2
    },
    textButtomLogin: {
      fontSize: 14,
      color: '#FB0'
    },
    loginScpace: {
      marginTop: '16%'
    },
    middleViewAlarm: {
      position: 'absolute',
      top: 500, 
      backgroundColor: '#ffff',
      width: '100%', 
      height: '55%',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    responsiveImage: {
      resizeMode:'contain',
      height: '45%'
    },
    responsiveImageAlarm: {
      resizeMode:'contain',
      height: '15%'
    },
    responsiveImageBell: {
      resizeMode:'contain',
      height: '25%',
      width: '100%'
    },
    loginText: {
      color: '#CD6F00',
      fontSize: 18,
      marginEnd: '75%',
      //marginBottom: '3%'
    },
    callButtom: {
      borderRadius: 10,
      backgroundColor: '#FB0',
      height: '28%',
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#CD6F00',
      borderWidth: 2
    },
    emailPasswordText: {
      color: '#CD6F00',
      fontSize: 22,
      marginEnd: '60%',
      marginTop: '3%'
    },
    textInputEmail: {
      width: 345,
      height: '10%',
      borderRadius: 8,
      paddingLeft: 15,
      backgroundColor: '#F6F5F5'
    },
    textInputPassword: {
      width: 345,
      height: '10%',
      borderRadius: 8,
      paddingLeft: 15,
      backgroundColor: '#F6F5F5'
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
    alarmButtom: {
      borderRadius: 10,
      backgroundColor: '#C8C8C8',
      height: '28%',
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    callButtom: {
      borderRadius: 10,
      backgroundColor: '#FB0',
      height: '28%',
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#CD6F00',
      borderWidth: 2
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
    AlarmText: {
      color: '#FFF',
      fontSize: 22,
      marginTop: '-5%',
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