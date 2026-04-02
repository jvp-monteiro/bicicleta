import { Pressable, StyleSheet } from 'react-native';

type Props = {
    label: string;
};

export default function Button({ label }: Props) {
    return (
        <view style={styles.buttonContainer}>
            <Pressable style={StyleSheet.button} onPress={() => alert('You pressed a button.')}>
                
            </Pressable>

        </view>
    )
}