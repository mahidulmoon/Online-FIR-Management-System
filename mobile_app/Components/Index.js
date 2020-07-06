import React, { Component } from 'react';
import { View,Text,SafeAreaView,StyleSheet,Image,Button } from 'react-native';
class Index extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={styles.logocontainer}>
                <Image style={styles.logo} source={require("../assets/kisspng-indonesian-national-police-promoter-police-officer-5b08c6618354b5.5194515315273017295379.png")} />
                <Text>Online FIR Management System</Text>
                </View>
                <View style={styles.buttonaction}>
                    <View style={styles.buttonrvrs}><Button title="LogIn" onPress={() => this.props.history.push("/login")} color="#da674e"/></View>
                    <View style={styles.buttonrvrs}><Button title="Regiser FIR" onPress={() => this.props.history.push("/registerfir")} color="#117304"/></View>
                </View>
                
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    logocontainer:{
        
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        height: 130,
        width: 100,
    },
    buttonaction:{
        flexDirection: 'row',
    },
    buttonrvrs:{
        flex: 1,
        top: 50,
    }
  })

export default Index;