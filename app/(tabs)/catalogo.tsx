import { BikeCard } from "@/components/BikeCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  Alert,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useBikes } from "../hooks/useBikes";
import { styles } from "./catalogo.styles";

const TIPOS_BIKE = ["Mountain", "Speed", "Elétrica"];

export default function CatalogScreen() {
  const { bikesFiltradas, filtroTipo, setFiltroTipo, busca, setBusca } =
    useBikes();
  const [ordenacao, setOrdenacao] = useState<
    "preco-asc" | "preco-desc" | "rating"
  >("rating");

  const bikeOrdenadas = [...bikesFiltradas].sort((a, b) => {
    switch (ordenacao) {
      case "preco-asc":
        return a.preco - b.preco;
      case "preco-desc":
        return b.preco - a.preco;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const handleSelecionarBike = (bikeId: string) => {
    const bike = bikeOrdenadas.find((b) => b.id === bikeId);
    if (bike) {
      Alert.alert(
        `${bike.nome}`,
        `Marca: ${bike.marca}\nPreço: R$ ${bike.preco.toLocaleString("pt-BR")}\n\nMaterial: ${bike.especificacoes.material}\nVelocidades: ${bike.especificacoes.velocidades}`,
        [
          {
            text: "Ver Detalhes",
            onPress: () => console.log("Detalhes:", bike),
          },
          {
            text: "Adicionar ao Carrinho",
            onPress: () =>
              Alert.alert("Sucesso", "Bike adicionada ao carrinho!"),
          },
          { text: "Fechar", style: "cancel" },
        ],
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Performance</Text>
      </View>

      {/* Barra de Busca */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por nome ou marca..."
          placeholderTextColor="#bbb"
          value={busca}
          onChangeText={setBusca}
        />
        {busca !== "" && (
          <TouchableOpacity onPress={() => setBusca("")}>
            <Ionicons name="close-circle" size={20} color="#888" />
          </TouchableOpacity>
        )}
      </View>

      {/* Filtros por Tipo */}
      <View style={styles.filtrosContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtrosScroll}
        >
          <TouchableOpacity
            style={[
              styles.filtroButton,
              filtroTipo === "" && styles.filtroButtonActive,
            ]}
            onPress={() => setFiltroTipo("")}
          >
            <Text
              style={[
                styles.filtroButtonText,
                filtroTipo === "" && styles.filtroButtonTextActive,
              ]}
            >
              Todas
            </Text>
          </TouchableOpacity>

          {TIPOS_BIKE.map((tipo) => (
            <TouchableOpacity
              key={tipo}
              style={[
                styles.filtroButton,
                filtroTipo === tipo && styles.filtroButtonActive,
              ]}
              onPress={() => setFiltroTipo(tipo)}
            >
              <Text
                style={[
                  styles.filtroButtonText,
                  filtroTipo === tipo && styles.filtroButtonTextActive,
                ]}
              >
                {tipo}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Ordenação */}
      <View style={styles.ordenacaoContainer}>
        <Text style={styles.ordenacaoLabel}>Ordenar por:</Text>
        <View style={styles.botoesOrdenacao}>
          <TouchableOpacity
            style={[
              styles.botaoOrdenacao,
              ordenacao === "rating" && styles.botaoOrdenacaoActive,
            ]}
            onPress={() => setOrdenacao("rating")}
          >
            <Text style={styles.botaoOrdenacaoText}>⭐ Rating</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.botaoOrdenacao,
              ordenacao === "preco-asc" && styles.botaoOrdenacaoActive,
            ]}
            onPress={() => setOrdenacao("preco-asc")}
          >
            <Text style={styles.botaoOrdenacaoText}>💰 Menor</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.botaoOrdenacao,
              ordenacao === "preco-desc" && styles.botaoOrdenacaoActive,
            ]}
            onPress={() => setOrdenacao("preco-desc")}
          >
            <Text style={styles.botaoOrdenacaoText}>💎 Maior</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Lista de Bikes */}
      {bikeOrdenadas.length > 0 ? (
        <FlatList
          data={bikeOrdenadas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ width: "100%", paddingHorizontal: 8 }}>
              <BikeCard
                bike={item}
                onPress={() => handleSelecionarBike(item.id)}
              />
            </View>
          )}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <View style={styles.emptyState}>
          <Ionicons name="search" size={48} color="#ccc" />
          <Text style={styles.emptyStateText}>Nenhuma bike encontrada</Text>
          <Text style={styles.emptyStateSubtext}>
            Tente ajustar seus filtros
          </Text>
        </View>
      )}
    </View>
  );
}
