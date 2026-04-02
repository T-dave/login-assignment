import { StyleSheet, Text, TouchableOpacity, ViewProps } from "react-native";

interface ButtonProp extends ViewProps {
  color?: string;
  onPress: () => void;
  children: React.ReactNode;
}
export default function Button({
  color,
  style,
  onPress,
  children,
}: ButtonProp) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "red",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "600",
  },
});
