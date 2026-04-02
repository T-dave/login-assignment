import Input from "@/components/customInput";
import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/customButton";

export default function LogIn() {
const [formValid, setFormValid] = useState(false);

  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  const [password, setPassword] = useState("");

  
  const validatEmail = (text:string)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(text)) setEmailValid(true);
    else setEmailValid(false);
  }

  const handleSubmit = ()=>{
    validatEmail(email);
    if(emailValid) setFormValid(true);
    else setFormValid(false);
  }


  return (
    <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex:1}}>
            <View style={{flex:1, justifyContent:'space-between'}}>
                <View/>
                <KeyboardAvoidingView style={styles.keyboardContainer} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <Input label={"Email"} setText={setEmail} placeholder="example@gmail.com" valid={emailValid} validate={validatEmail}/>
                    <Input label={"Password"} setText={setPassword} placeholder="Input Password"/>
                </KeyboardAvoidingView>
                <View>
                    {
                        formValid &&
                        <View>
                            <Text>Email:{email}</Text>
                            <Text>Password:{password}</Text>
                        </View>
                    }
                    <Button onPress={handleSubmit}>
                        Submit
                    </Button>
                </View>
            </View>
        </TouchableWithoutFeedback>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        paddingBottom:20,
        justifyContent:'space-between'
    },
    keyboardContainer:{
        justifyContent:'center',
    }
})
