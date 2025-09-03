import { Text, View, Image, TextInput, Dimensions, Pressable, Touchable,
TouchableOpacity, TouchableWithoutFeedback,
ScrollView, Alert, Platform } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {

  const {width , height} = Dimensions.get('screen')

  // console.log('screen width :', width, 'and' ,'screen height :', height)

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
      }}
>
      <Text style={{padding:20}}>English(UK)</Text>

      <Image style={{width:100, height:70,marginTop: height*.04, resizeMode:'contain'}}
       source={require('../assets/images/fb-logo.png')}/>

       <TextInput style={{borderColor:'gray', color:'black', borderWidth:1, fontColor:'white',
      borderRadius:10, height:60, paddingLeft:10, marginTop: height*.09}}/>

      <TextInput style={{borderColor:'gray', color:'black', borderWidth:1, fontColor:'white',
      borderRadius:10, height:50, paddingLeft:20, marginTop: height*.01}}/>

      

      

      <TouchableOpacity onPress={() =>{

        // console.log('Log in')
             
      }} style={{backgroundColor:'blue',alignItems: "center", width:width*.9, marginTop:30, padding:20, borderRadius:50}}>

        <Text style={{color:'white', }}>Log in</Text>

      </TouchableOpacity>

      <Text style={{margin:20}}>Forgotten password?</Text>

      <TouchableOpacity onPress={() =>{

        // console.log('Log in')
             
      }} style={{backgroundColor:'white', borderColor:'blue', borderWidth:1, 
      alignItems: "center", width:width*.9, height:60, marginTop:70, padding:20, borderRadius:50}}>

        <Text style={{color:'blue', }}>Create new account</Text>

      </TouchableOpacity>

      <Image style={{width:100, height:70,marginTop: height*.04, resizeMode:'contain'}} source={require('../assets/images/meta-logo.png')}/>


     
    </SafeAreaView>
  );
}
