import { View, Text, StyleSheet } from "react-native";
import Button from "./customButton";
import { useState } from "react";
interface Users{
    email:string;
    password:string;
}
export default function UserInfo({email, password}:Users){
    const [showPassword, setShowPassword] = useState(false);
    const asterik: string[] = [];
    const displayPassword = (password:string)=>{
        if(showPassword){
            return password
        }else{
            password.split("").forEach(()=>asterik.push("*"));
            return asterik.join("");
        }
    }
    return(
        <View style={styles.container}>
            <View/>
            <View>
                <Text style={{marginBottom:15}}>Email: {email}</Text>
                <Text>Password: {displayPassword(password)}</Text>
            </View>
            <Button onPress={()=>setShowPassword(!showPassword)} style={styles.button} size={13}>
                {showPassword ? "Hide Password" : "Show Password"}
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderStyle:'dotted',
        borderColor:'green',
        borderRadius:8,
        height:150,
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
        padding:5
    },
    button:{
        width:'auto',
    }
});