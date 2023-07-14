import { View, Text, TouchableOpacity } from "react-native";

import { styles, button, buttonText } from "./styles";

export const Participant = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Samuel Alves Medeiros</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};
