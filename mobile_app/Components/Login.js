import React, { Component,useState } from 'react';
import { View,Text,SafeAreaView,StyleSheet,Image,Button,TextInput, KeyboardAvoidingView } from 'react-native';
// class Login extends Component {
//     state={
//         login:{
//             username:'',password:''
//         }
//     }
//     loginbutton=()=>{
//         console.log(this.state.login);
//     }
//     inputchange(text,field){
//         if(field == 'username'){
//             this.setState({login:{username:text}});
//         }else if( field == 'password'){
//             this.setState({login:{password:text}});
//         }
//     }
//     render() {
//         return (
//             <SafeAreaView>
                
//                 <KeyboardAvoidingView>
//                     <React.Fragment>
//                     <View style={styles.container}>
//                         <Text>Login</Text>
//                         <Image style={styles.logo} source={require("../assets/login.png")} />
//                         <TextInput placeholder="Username" name='username' onChangeText={(text)=>this.inputchange(text, 'username')} value={this.state.login.username}  style={styles.inputbox} />
//                         <TextInput placeholder="Password" name='password' onChangeText={(text)=>this.inputchange(text, 'password')} value={this.state.login.password} style={styles.inputbox} />
//                         <Button title="Login" onPress={this.loginbutton} />
//                         <Text>{this.state.login.username}</Text>
//                         <Text>{this.state.login.password}</Text>
                        
//                     </View>
//                     <View style={styles.groundbutton}><Button title="Back" onPress={() => this.props.history.push("/")} /></View>
//                     </React.Fragment>
//                 </KeyboardAvoidingView>
                    
                
//             </SafeAreaView>
//         );
//     }
// }
export default  Login=({history})=>{
    const [login, setLogin] = useState(
        { username: '', password: ''}
    );
    const inputchange=(text,field)=>{
            if(field == 'username'){
                setLogin({...login,username:text});
            }else if( field == 'password'){
                setLogin({...login,password:text});
            }
        }
    const loginbutton=()=>{
        console.log(login);
    }
    return(
        <SafeAreaView>
                
                 <KeyboardAvoidingView>
                     <React.Fragment>
                     <View style={styles.container}>
                         <Text>Login</Text>
                         <Image style={styles.logo} source={require("../assets/login.png")} />
                         <TextInput placeholder="Username"  onChangeText={(text)=>inputchange(text, 'username')}   style={styles.inputbox} />
                         <TextInput placeholder="Password"  onChangeText={(text)=>inputchange(text, 'password')}  style={styles.inputbox} />
                         <Button title="Login" onPress={loginbutton} />
                         {/* <Text>{login.username}</Text>
                         <Text>{login.password}</Text> */}
                        
                     </View>
                     <View style={styles.groundbutton}><Button title="Back" onPress={() => history.push("/")} /></View>
                     </React.Fragment>
                 </KeyboardAvoidingView>
                    
                
             </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    inputbox:{
        height: 40,
        padding: 5,
        margin: 10,
        borderColor: 'gray', borderWidth: 1,width: 250,borderRadius:10,
    },
    logo:{
        height: 150,
        width: 150,
        marginTop: 10,
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    groundbutton:{
        justifyContent:'flex-end',
        
        width: '100%',
    }
    
  })

//export default Login;