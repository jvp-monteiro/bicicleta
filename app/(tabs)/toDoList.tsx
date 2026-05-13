import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useTarefas } from "../hooks/useTarefas";

export default function App() {
  const { tarefas, novaTarefa, setNovaTarefa, adicionarTarefa, removerTarefa } =
    useTarefas();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de manutenção</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa..."
          value={novaTarefa}
          onChangeText={setNovaTarefa}
        />
        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={adicionarTarefa}
          activeOpacity={0.7}
        >
          <Text style={styles.botaoTexto}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tarefaContainer}>
            <Text style={styles.tarefaTexto}>{item.texto}</Text>
            <TouchableOpacity onPress={() => removerTarefa(item.id)}>
              <Text style={styles.remover}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#05070D" },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#E5E7EB",
  },
  inputContainer: { flexDirection: "row", marginBottom: 10 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#b3b9bb",
    backgroundColor: "#0E1320",
    color: "#E5E7EB",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  tarefaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#0E1320",
    padding: 15,
    marginBottom: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowRadius: 3,
    elevation: 2,
  },
  tarefaTexto: { fontSize: 16, color: "#E5E7EB" },
  remover: { fontSize: 18, color: "#A855F7" },
  botaoAdicionar: {
    backgroundColor: "#757575",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#757575",
    shadowRadius: 4,
    elevation: 4,
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
