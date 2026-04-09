import { useState, useMemo } from 'react';

export interface Bike {
    id: string;
    nome: string;
    marca: string;
    preco: number;
    tipo: 'Mountain' | 'Speedway' | 'Híbrida' | 'Elétrica';
    especificacoes: {
        peso: string;
        material: string;
        velocidades: number;
    };
    descricao: string;
    rating: number;
    imagem?: string;
}

const BIKES_INICIAIS: Bike[] = [
    {
        id: '1',
        nome: 'Mountain Extreme Pro',
        marca: 'TerraTrail',
        preco: 4500,
        tipo: 'Mountain',
        especificacoes: {
            peso: '13.5 kg',
            material: 'Alumínio',
            velocidades: 21,
        },
        descricao: 'Bike mountain robusta com suspensão de qualidade profissional',
        rating: 4.8,
    },
    {
        id: '2',
        nome: 'Speed Runner 3000',
        marca: 'VeloMax',
        preco: 3800,
        tipo: 'Speedway',
        especificacoes: {
            peso: '7.8 kg',
            material: 'Carbono',
            velocidades: 18,
        },
        descricao: 'Bike de estrada ultra leve para máximo desempenho',
        rating: 4.9,
    },
    {
        id: '3',
        nome: 'Hybrid Comfort',
        marca: 'CycleWay',
        preco: 2200,
        tipo: 'Híbrida',
        especificacoes: {
            peso: '11.2 kg',
            material: 'Aço High-Tensile',
            velocidades: 21,
        },
        descricao: 'Versátil e confortável para uso urbano e trilhas leves',
        rating: 4.5,
    },
    {
        id: '4',
        nome: 'E-Bike Urban',
        marca: 'PowerRide',
        preco: 8500,
        tipo: 'Elétrica',
        especificacoes: {
            peso: '24 kg',
            material: 'Alumínio',
            velocidades: 9,
        },
        descricao: 'Bike elétrica perfeita para deslocamentos urbanos',
        rating: 4.7,
    },
    {
        id: '5',
        nome: 'Trail Master XL',
        marca: 'TerraTrail',
        preco: 5200,
        tipo: 'Mountain',
        especificacoes: {
            peso: '14.2 kg',
            material: 'Alumínio 6061',
            velocidades: 21,
        },
        descricao: 'Especializada para trilhas técnicas e descidas agressivas',
        rating: 4.6,
    },
    {
        id: '6',
        nome: 'City Cruiser',
        marca: 'UrbanCycle',
        preco: 1500,
        tipo: 'Híbrida',
        especificacoes: {
            peso: '12.5 kg',
            material: 'Aço',
            velocidades: 7,
        },
        descricao: 'Ideal para passeios tranquilos pela cidade',
        rating: 4.3,
    },
];

export function useBikes() {
    const [bikes] = useState<Bike[]>(BIKES_INICIAIS);
    const [filtroTipo, setFiltroTipo] = useState<string>('');
    const [busca, setBusca] = useState<string>('');

    const bikesFiltradas = useMemo(() => {
        return bikes.filter((bike) => {
            const atendeFiltro = filtroTipo === '' || bike.tipo === filtroTipo;
            const atendeBusca = 
                busca === '' || 
                bike.nome.toLowerCase().includes(busca.toLowerCase()) ||
                bike.marca.toLowerCase().includes(busca.toLowerCase());
            
            return atendeFiltro && atendeBusca;
        });
    }, [bikes, filtroTipo, busca]);

    return {
        bikes,
        bikesFiltradas,
        filtroTipo,
        setFiltroTipo,
        busca,
        setBusca,
    };
}
