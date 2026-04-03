import { FontAwesomeFreeSolid } from "@react-native-vector-icons/fontawesome-free-solid";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  label: string;
  placeholder: string;
  form: any;
  setForm:any;
  validate:any;
  error:string;
}
export default function Input({
  label,
  placeholder,
  form,
  setForm,
  validate,
  error
}: Props) {
  const [secured, setSecured] = useState(label === "Password");
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputContainer,
          { borderColor: form[label.toLowerCase() + "Error"].length > 0 ? "red" : "grey" },
        ]}
      >
        <Text style={styles.text}>{label}</Text>
        <View style={styles.inputView}>
          <TextInput
            onChangeText={(text: string) => {
              setForm({
                ...form, [label.toLowerCase()]:text, [label.toLowerCase() + "Error"]:""
              });
            }}
            value={form[label.toLowerCase()]}
            secureTextEntry={secured}
            placeholder={placeholder}
            onBlur={() => {
              if(validate(form[label.toLowerCase()])) setForm({...form, [label.toLowerCase() + "Error"]:""})
              else setForm({...form, [label.toLowerCase() + "Error"]:error})
            }}
            style={styles.input}
          />
          {label === "Password" && (
            <TouchableOpacity onPress={() => setSecured(!secured)} style={{paddingRight:5, paddingLeft:10}}>
              <FontAwesomeFreeSolid
                name={secured ? "eye" : "eye-slash"}
                size={15}
                color="grey"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {
        form[label.toLowerCase() + "Error"].length > 0 &&
        <Text style={styles.error}>{form[label.toLowerCase() + "Error"]}</Text>
      }
    </View>
  );
}
//eye-off eye
const styles = StyleSheet.create({
  container:{
    marginVertical: 10,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
  text: {
    paddingLeft: 5,
  },
  input: {
    flex: 1,
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
  },
  error:{
    color:'red',
    fontSize:10
  }
});
