import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput } from "react-native";

import { styles, eventName, eventDate, input } from "./styles";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2023</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do participante?"
        placeholderTextColor="#6b6b6b"
      />
    </View>
  );
};
