import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Alert,
} from 'react-native';
import { Theme } from '../constants/Theme';
import { Image as ImageIcon, Camera, Send } from 'lucide-react-native';

export const CreatePostScreen = ({ navigation }: any) => {
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        const today = new Date().toLocaleDateString();
        Alert.alert(
            "Review Submitted",
            `Your review for ${today} has been posted to the community!`,
            [{ text: "Awesome", onPress: () => navigation.navigate('Feed') }]
        );
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.inputArea}>
                    <TextInput
                        style={styles.input}
                        placeholder="Share your thoughts on a movie..."
                        placeholderTextColor={Theme.colors.textSecondary}
                        multiline
                        value={description}
                        onChangeText={setDescription}
                    />
                </View>

                <View style={styles.mediaPlaceholder}>
                    <TouchableOpacity style={styles.mediaButton}>
                        <ImageIcon color={Theme.colors.primary} size={32} />
                        <Text style={styles.mediaText}>Add Images</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mediaButton}>
                        <Camera color={Theme.colors.primary} size={32} />
                        <Text style={styles.mediaText}>Camera</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={[styles.submitButton, !description && styles.disabledButton]}
                    onPress={handleSubmit}
                    disabled={!description}
                >
                    <Text style={styles.submitText}>Submit Review</Text>
                    <Send color="#121212" size={20} style={{ marginLeft: 8 }} />
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.background,
    },
    content: {
        padding: Theme.spacing.md,
    },
    inputArea: {
        backgroundColor: Theme.colors.card,
        borderRadius: Theme.borderRadius.lg,
        padding: Theme.spacing.md,
        minHeight: 200,
        marginBottom: Theme.spacing.lg,
    },
    input: {
        color: Theme.colors.text,
        fontSize: 16,
        textAlignVertical: 'top',
    },
    mediaPlaceholder: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: Theme.spacing.xl,
    },
    mediaButton: {
        backgroundColor: Theme.colors.card,
        width: '45%',
        height: 100,
        borderRadius: Theme.borderRadius.lg,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Theme.colors.border,
        borderStyle: 'dashed',
    },
    mediaText: {
        color: Theme.colors.textSecondary,
        fontSize: 12,
        marginTop: 8,
    },
    submitButton: {
        backgroundColor: Theme.colors.primary,
        flexDirection: 'row',
        height: 55,
        borderRadius: Theme.borderRadius.md,
        justifyContent: 'center',
        alignItems: 'center',
    },
    disabledButton: {
        opacity: 0.5,
    },
    submitText: {
        color: '#121212',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
