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
  setText: any;
  valid?: boolean;
  placeholder: string;
  validate?: (text: string) => void;
}
export default function Input({
  label,
  setText,
  valid = true,
  validate = (text?: string) => {},
  placeholder,
}: Props) {
  const [secured, setSecured] = useState(label === "Password");
  const [value, setValue] = useState("");
  const [failed, setFailed] = useState(false);
  return (
    <View
      style={[
        styles.container,
        { borderColor: failed === false || valid ? "grey" : "red" },
      ]}
    >
      <Text style={styles.text}>{label}</Text>
      <View style={styles.inputView}>
        <TextInput
          onChangeText={(text: string) => {
            setText(text);
            setValue(text);
            console.log(failed)
            if (failed === true) validate(text);
          }}
          secureTextEntry={secured}
          placeholder={placeholder}
          onBlur={() => {
            validate(value);
            setFailed(!valid);
            console.log(valid)
            console.log(failed)
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
  );
}
//eye-off eye
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
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
});
