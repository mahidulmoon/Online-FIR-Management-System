import React,{useState,useEffect} from 'react';
import { Text,View,StyleSheet,Button,SafeAreaView,TextInput,KeyboardAvoidingView,Picker,Modal,TouchableHighlight } from 'react-native';
import axios from 'axios';
export default RegisterFIR=({history})=>{
    const [thana,setThana] = useState([]);
    const [registerfir,setRegisterfir] = useState({
        victimename:'',age:'',address:'',dateofincedence:'',timeofincedence:'',complaintype:'',thana:''
    });
    const [modalVisible, setModalVisible] = useState(true);
    const [complainerinfo, setComplainerinfo] =useState({
        name:'',fathername:'',address:'',contact:''
    })

    useEffect(() => {
        axios.get('http://192.168.137.171:8000/thana/contact').then(res=>{setThana(res.data)}).catch(err=>console.log(err));
        //https://reactnative.dev/movies.json
        console.log(thana);
        
    })
    const inputchange=(text,field)=>{
        if(field=='victimename'){
            setRegisterfir({...registerfir,victimename:text})
        }else if(field =='age'){
            setRegisterfir({...registerfir,age:text})
        }else if(field == 'address'){
            setRegisterfir({...registerfir,address:text})
        }else if(field == 'dateofincedence'){
            setRegisterfir({...registerfir,dateofincedence:text})
        }else if(field == 'timeofincedence'){
            setRegisterfir({...registerfir,timeofincedence:text})
        }else if(field=='complaintype'){
            setRegisterfir({...registerfir,complaintype:text})
        }else if(field=='thana'){
            setRegisterfir({...registerfir,thana:text})
        }else if(field=='name'){
            setComplainerinfo({...complainerinfo,name:text})
        }else if(field=='fathername'){
            setComplainerinfo({...complainerinfo,fathername:text})
        }else if(field=='address2'){
            setComplainerinfo({...complainerinfo,address:text})
        }else if(field=='contact'){
            setComplainerinfo({...complainerinfo,contact:text})
        }
    }
    const savefirbutton=()=>{
        console.log(registerfir);
        console.log(complainerinfo);
    }

    return(
        <SafeAreaView>
                
                 <KeyboardAvoidingView>
                     <React.Fragment>
                     <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            }}
                        >
                            <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>ComPlainer Information</Text>
                                <Text>Complainer Name</Text>
                                <TextInput placeholder="Complainer Name" value={complainerinfo.name} onChangeText={(text)=>inputchange(text,'name')}   style={styles.inputbox} />
                                <Text>Complainer Name</Text>
                                <TextInput placeholder="Father Name" value={complainerinfo.fathername} onChangeText={(text)=>inputchange(text,'fathername')}  style={styles.inputbox} />
                                <Text>Complainer Name</Text>
                                <TextInput placeholder="Address"  value={complainerinfo.address} onChangeText={(text)=>inputchange(text,'address2')}  style={styles.inputbox} />
                                <Text>Complainer Name</Text>
                                <TextInput placeholder="Contact" value={complainerinfo.contact} onChangeText={(text)=>inputchange(text,'contact')}   style={styles.inputbox} />
                                <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                                >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                                </TouchableHighlight>
                                
                            </View>
                            </View>
                        </Modal>

                        
                        </View>
                     <View style={styles.container}>
                         <Text>RegisterFIR</Text>
                         
                         <TextInput placeholder="Victimename" value={registerfir.victimename} onChangeText={(text)=>inputchange(text,'victimename')}   style={styles.inputbox} />
                         <TextInput placeholder="age" value={registerfir.age} onChangeText={(text)=>inputchange(text,'age')}  keyboardType={'numeric'}  style={styles.inputbox} />
                         <TextInput placeholder="Address"  value={registerfir.address} onChangeText={(text)=>inputchange(text,'address')}  style={styles.inputbox} />
                         <TextInput placeholder="dateofincedence" value={registerfir.dateofincedence} onChangeText={(text)=>inputchange(text,'dateofincedence')}   style={styles.inputbox} />
                         <TextInput placeholder="timeofincedence" value={registerfir.timeofincedence} onChangeText={(text)=>inputchange(text,'timeofincedence')}    style={styles.inputbox} />
                         <TextInput placeholder="complaintype" value={registerfir.complaintype} onChangeText={(text)=>inputchange(text,'complaintype')}   style={styles.inputbox} />
                         
                         <Picker
                            
                            style={styles.inputbox}
                            onValueChange={(itemValue) => inputchange(itemValue,'thana')}
                            >
                            <Picker.Item label="js" value="js" />
                            {/* {thana.map((item)=>
                                <Picker.Item label={item.id} />
                            )} */}
                            
                        </Picker>
                         
                         <Button title="Save FIR" onPress={savefirbutton} />
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
    
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    groundbutton:{
        justifyContent:'flex-end',
        
        width: '100%',
    },
    centeredView: {
        marginTop:30,
        justifyContent: "center",
        alignItems: "center",
      },
      modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
    
  });
