import { View, Text, StyleSheet, TextInput, ScrollView, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useBikes } from '../hooks/useBikes';
import { BikeCard } from '@/components/BikeCard';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

const TIPOS_BIKE = ['Mountain', 'Speedway', 'Híbrida', 'Elétrica'];

export default function CatalogScreen() {
    const { bikesFiltradas, filtroTipo, setFiltroTipo, busca, setBusca } = useBikes();
    const [ordenacao, setOrdenacao] = useState<'preco-asc' | 'preco-desc' | 'rating'>('rating');

    const bikeOrdenadas = [...bikesFiltradas].sort((a, b) => {
        switch (ordenacao) {
            case 'preco-asc':
                return a.preco - b.preco;
            case 'preco-desc':
                return b.preco - a.preco;
            case 'rating':
                return b.rating - a.rating;
            default:
                return 0;
        }
    });

    const handleSelecionarBike = (bikeId: string) => {
        const bike = bikeOrdenadas.find(b => b.id === bikeId);
        if (bike) {
            Alert.alert(
                `${bike.nome}`,
                `Marca: ${bike.marca}\nPreço: R$ ${bike.preco.toLocaleString('pt-BR')}\n\nMaterial: ${bike.especificacoes.material}\nVelocidades: ${bike.especificacoes.velocidades}`,
                [
                    {
                        text: 'Ver Detalhes',
                        onPress: () => console.log('Detalhes:', bike),
                    },
                    {
                        text: 'Adicionar ao Carrinho',
                        onPress: () => Alert.alert('Sucesso', 'Bike adicionada ao carrinho!'),
                    },
                    { text: 'Fechar', style: 'cancel' },
                ]
            );
        }
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>🚴 Catálogo de Bikes</Text>
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
                {busca !== '' && (
                    <TouchableOpacity onPress={() => setBusca('')}>
                        <Ionicons name="close-circle" size={20} color="#888" />
                    </TouchableOpacity>
                )}
            </View>

            {/* Filtros por Tipo */}
            <View style={styles.filtrosContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtrosScroll}>
                    <TouchableOpacity
                        style={[
                            styles.filtroButton,
                            filtroTipo === '' && styles.filtroButtonActive,
                        ]}
                        onPress={() => setFiltroTipo('')}
                    >
                        <Text style={[
                            styles.filtroButtonText,
                            filtroTipo === '' && styles.filtroButtonTextActive,
                        ]}>
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
                            <Text style={[
                                styles.filtroButtonText,
                                filtroTipo === tipo && styles.filtroButtonTextActive,
                            ]}>
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
                            ordenacao === 'rating' && styles.botaoOrdenacaoActive,
                        ]}
                        onPress={() => setOrdenacao('rating')}
                    >
                        <Text style={styles.botaoOrdenacaoText}>⭐ Rating</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.botaoOrdenacao,
                            ordenacao === 'preco-asc' && styles.botaoOrdenacaoActive,
                        ]}
                        onPress={() => setOrdenacao('preco-asc')}
                    >
                        <Text style={styles.botaoOrdenacaoText}>💰 Menor</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.botaoOrdenacao,
                            ordenacao === 'preco-desc' && styles.botaoOrdenacaoActive,
                        ]}
                        onPress={() => setOrdenacao('preco-desc')}
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
                        <View style={{ width: '100%', paddingHorizontal: 8 }}>
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
                    <Text style={styles.emptyStateSubtext}>Tente ajustar seus filtros</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        backgroundColor: '#25292e',
        paddingVertical: 16,
        paddingHorizontal: 16,
        paddingTop: 24,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginHorizontal: 12,
        marginVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    searchInput: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 8,
        fontSize: 14,
        color: '#25292e',
    },
    filtrosContainer: {
        paddingVertical: 8,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    filtrosScroll: {
        paddingHorizontal: 12,
        gap: 8,
    },
    filtroButton: {
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    filtroButtonActive: {
        backgroundColor: '#4A90E2',
        borderColor: '#4A90E2',
    },
    filtroButtonText: {
        fontSize: 13,
        color: '#666',
        fontWeight: '500',
    },
    filtroButtonTextActive: {
        color: '#ffffff',
    },
    ordenacaoContainer: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    ordenacaoLabel: {
        fontSize: 12,
        color: '#888',
        marginBottom: 8,
        fontWeight: '600',
    },
    botoesOrdenacao: {
        flexDirection: 'row',
        gap: 8,
    },
    botaoOrdenacao: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 6,
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        alignItems: 'center',
    },
    botaoOrdenacaoActive: {
        backgroundColor: '#4A90E2',
        borderColor: '#4A90E2',
    },
    botaoOrdenacaoText: {
        fontSize: 12,
        color: '#666',
        fontWeight: '600',
    },
    listContent: {
        paddingVertical: 8,
    },
    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 32,
    },
    emptyStateText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#25292e',
        marginTop: 16,
    },
    emptyStateSubtext: {
        fontSize: 14,
        color: '#888',
        marginTop: 8,
    },
});
