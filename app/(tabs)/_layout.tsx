import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#39FF14',
                headerStyle: {
                    backgroundColor: '#25292e',
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                backgroundColor: '#25292e',
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="game-controller-outline" color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name='about'
                options={{
                    title: 'Sobre',
                    tabBarIcon: ({ color, focused}) => (
                        <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                    ),
                }}
            />

            <Tabs.Screen
                name='toDoList'
                options={{
                    title: 'Lista de Tarefas',
                    tabBarIcon: ({ color, focused}) => (
                        <Ionicons name={focused ? 'list' : 'list-outline'} color={color} size={24} />
                    ),
                }}
            />

        </Tabs>
    );
}