import { StyleSheet, Text, TouchableOpacity, ViewProps } from "react-native";

interface ButtonProp extends ViewProps {
  color?: string;
  onPress: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  size?: number;
}
export default function Button({
  color,
  style,
  size,
  onPress,
  children,
  disabled = false
}: ButtonProp) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: disabled ? "#FF000044" : "#FF0000"}, style]} onPress={onPress} disabled={disabled}>
      <Text style={[styles.buttonText, {fontSize: size || 20}]}>{children}</Text>
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
    fontWeight: "600",
  },
});
