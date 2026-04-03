import Input from "@/components/customInput";
import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/customButton";
import UserInfo from "@/components/userInfo";

export default function LogIn() {
const [submitted, setSubmitted] = useState(false);
const [form, setForm] = useState({
    email: "",
    emailError:"",
    password:"",
    passwordError:""
})


  const validatEmail = (text:string)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(text);
  }
  const validatePassword = (text:string)=>{
    return text.length > 0;
  }

  const handleSubmit = ()=>{
    if(submitted){
        setForm({
            email: "",
            emailError:"",
            password:"",
            passwordError:""
        });
        setSubmitted(false);
    }else{
        if(form.emailError.length > 0 && form.passwordError.length > 0) setSubmitted(false);
        else setSubmitted(true);
    }
  }


  return (
    <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex:1}}>
            <View style={{flex:1, justifyContent:'space-between'}}>
                <View/>
                <KeyboardAvoidingView style={styles.keyboardContainer} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <Input 
                    label={"Email"} 
                    form={form}
                    setForm={setForm}
                    placeholder="example@gmail.com" 
                    validate={validatEmail}
                    error={"Invalid email address"}
                    />
                    <Input 
                    label={"Password"} 
                    form={form}
                    setForm={setForm}
                    placeholder="Input Password" 
                    validate={validatePassword} 
                    error={"Enter your password"}
                    />
                </KeyboardAvoidingView>
                <View>
                    {
                        submitted &&
                        <UserInfo email={form.email} password={form.password}/>
                    }
                    <Button onPress={handleSubmit} disabled={!validatEmail(form.email) || !validatePassword(form.password)}>
                        {
                            submitted ? "Clear" : "Submit"
                        }
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
        justifyContent:'space-between',
        backgroundColor:"#FFF"
    },
    keyboardContainer:{
        justifyContent:'center',
    }
})
