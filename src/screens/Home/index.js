import { useState } from "react";

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
    setParticipants([participantName, ...participants]);
    setParticipantName("");
  };

  const handleRemoveParticipant = (participantName) => {
    alert(`Remover ${participantName}`);
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
