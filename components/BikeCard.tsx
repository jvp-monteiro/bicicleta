import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Bike } from '@/app/hooks/useBikes';
import Ionicons from '@expo/vector-icons/Ionicons';

interface BikeCardProps {
    bike: Bike;
    onPress?: () => void;
}

export function BikeCard({ bike, onPress }: BikeCardProps) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            {/* Imagem placeholder */}
            <View style={styles.imagePlaceholder}>
                <Ionicons name="bicycle" size={48} color="#ffffff" />
            </View>

            {/* Tipo badge */}
            <View style={styles.typeBadge}>
                <Text style={styles.typeBadgeText}>{bike.tipo}</Text>
            </View>

            {/* Conteúdo */}
            <View style={styles.content}>
                <Text style={styles.marca}>{bike.marca}</Text>
                <Text style={styles.nome}>{bike.nome}</Text>

                {/* Rating */}
                <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={14} color="#FFD700" />
                    <Text style={styles.rating}>{bike.rating}</Text>
                </View>

                {/* Especificações resumidas */}
                <View style={styles.especificacoes}>
                    <View style={styles.especItem}>
                        <Ionicons name="scale" size={12} color="#888" />
                        <Text style={styles.especText}>{bike.especificacoes.peso}</Text>
                    </View>
                    <View style={styles.especItem}>
                        <Ionicons name="settings" size={12} color="#888" />
                        <Text style={styles.especText}>{bike.especificacoes.velocidades}v</Text>
                    </View>
                </View>

                {/* Preço */}
                <View style={styles.precoContainer}>
                    <Text style={styles.preco}>R$ {bike.preco.toLocaleString('pt-BR')}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        marginHorizontal: 8,
        marginVertical: 8,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    imagePlaceholder: {
        backgroundColor: '#4A90E2',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    typeBadge: {
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    typeBadgeText: {
        color: '#fff',
        fontSize: 11,
        fontWeight: '600',
    },
    content: {
        padding: 12,
    },
    marca: {
        fontSize: 12,
        color: '#888',
        marginBottom: 4,
    },
    nome: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#25292e',
        marginBottom: 8,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    rating: {
        fontSize: 12,
        color: '#555',
        marginLeft: 4,
    },
    especificacoes: {
        flexDirection: 'row',
        marginBottom: 10,
        gap: 12,
    },
    especItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    especText: {
        fontSize: 11,
        color: '#666',
    },
    precoContainer: {
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        paddingTop: 10,
    },
    preco: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4A90E2',
    },
});
