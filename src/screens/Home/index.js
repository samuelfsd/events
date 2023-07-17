import { useState } from "react";

import Toast from "react-native-toast-message";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";

import { Participant } from "../../components/Participant";

import {
  styles,
  eventName,
  eventDate,
  form,
  input,
  button,
  buttonText,
} from "./styles";

export const Home = () => {
  const [participants, setParticipants] = useState([]);
  const [participantName, setParticipantName] = useState("");

  const handleParticipantAdd = () => {
    if (participants.includes(participantName)) {
      Toast.show({
        type: "error",
        text1: "Participante já cadastrado",
      });
      return;
    }

    setParticipants([...participants, participantName]);
    setParticipantName("");
    Toast.show({
      type: "success",
      text1: "Participante adicionado com sucesso",
    });
  };

  const handleRemoveParticipant = (participantName) => {
    if (!participants.includes(participantName)) {
      Toast.show({
        type: "error",
        text1: "Não existe participante com esse nome",
      });
      return;
    }
    const participantsFiltered = participants.filter(
      (name) => name !== participantName
    );

    setParticipants(participantsFiltered);

    Toast.show({
      type: "success",
      text1: "Participante removido com sucesso",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante?"
          placeholderTextColor="#6b6b6b"
          defaultValue={participantName}
          onChangeText={(participantName) =>
            setParticipantName(participantName)
          }
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(participantName) => participantName}
        renderItem={({ item: participantName }) => (
          <Participant
            key={participantName}
            name={participantName}
            onRemove={() => handleRemoveParticipant(participantName)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Nenhum participante cadastrado
          </Text>
        )}
      />
    </View>
  );
};
