import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Image,
} from 'react-native';
import { Theme } from '../constants/Theme';
import { Mail, Lock } from 'lucide-react-native';

export const LoginScreen = ({ onLogin }: { onLogin: () => void }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.content}>
                <Image
                    source={require('../assets/images/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.title}>CineTalk LK</Text>
                <Text style={styles.subtitle}>Sri Lanka's Movie Community</Text>

                <View style={styles.inputContainer}>
                    <Mail color={Theme.colors.textSecondary} size={20} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Email Address"
                        placeholderTextColor={Theme.colors.textSecondary}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Lock color={Theme.colors.textSecondary} size={20} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor={Theme.colors.textSecondary}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
                    <Text style={styles.loginButtonText}>Log In</Text>
                </TouchableOpacity>

                <View style={styles.divider}>
                    <View style={styles.line} />
                    <Text style={styles.dividerText}>OR</Text>
                    <View style={styles.line} />
                </View>

                <TouchableOpacity style={[styles.loginButton, styles.googleButton]} onPress={onLogin}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' }}
                        style={styles.googleIcon}
                    />
                    <Text style={styles.googleButtonText}>Continue with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.forgotPassword}>
                    <Text style={styles.forgotPasswordText}>Don't have an account? Sign Up</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.background,
    },
    content: {
        flex: 1,
        padding: Theme.spacing.lg,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: Theme.spacing.md,
    },
    title: {
        ...Theme.typography.h1,
        color: Theme.colors.primary,
        marginBottom: 4,
    },
    subtitle: {
        ...Theme.typography.body,
        color: Theme.colors.textSecondary,
        marginBottom: Theme.spacing.xl,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Theme.colors.card,
        borderRadius: Theme.borderRadius.md,
        paddingHorizontal: Theme.spacing.md,
        marginBottom: Theme.spacing.md,
        width: '100%',
        height: 55,
        borderWidth: 1,
        borderColor: Theme.colors.border,
    },
    icon: {
        marginRight: Theme.spacing.sm,
    },
    input: {
        flex: 1,
        color: Theme.colors.text,
        fontSize: 16,
    },
    loginButton: {
        backgroundColor: Theme.colors.primary,
        borderRadius: Theme.borderRadius.md,
        width: '100%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Theme.spacing.md,
    },
    loginButtonText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
    },
    forgotPassword: {
        marginTop: Theme.spacing.lg,
    },
    forgotPasswordText: {
        color: Theme.colors.textSecondary,
        fontSize: 14,
    },
    googleButton: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
    },
    googleButtonText: {
        color: '#000',
        fontWeight: '600',
        fontSize: 16,
    },
    googleIcon: {
        width: 20,
        height: 20,
        marginRight: 12,
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: Theme.spacing.lg,
        width: '100%',
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: Theme.colors.border,
    },
    dividerText: {
        color: Theme.colors.textSecondary,
        paddingHorizontal: 10,
        fontSize: 12,
    },
});
