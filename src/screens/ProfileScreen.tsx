import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Alert,
} from 'react-native';
import { Theme } from '../constants/Theme';
import { MOCK_USER } from '../constants/MockData';
import { Edit2, LogOut, ChevronRight, Settings, ShieldCheck } from 'lucide-react-native';

export const ProfileScreen = ({ navigation }: any) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(MOCK_USER.name);

    const handleUpdate = () => {
        setIsEditing(false);
        Alert.alert("Success", "Profile updated successfully!");
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profileImageContainer}>
                    <Image source={{ uri: MOCK_USER.profilePicture }} style={styles.profileImage} />
                    <TouchableOpacity style={styles.editBadge}>
                        <Edit2 color="#000" size={12} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.name}>{MOCK_USER.name}</Text>
                <Text style={styles.email}>{MOCK_USER.email}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Account Settings</Text>

                <View style={styles.settingItem}>
                    <View style={styles.settingInfo}>
                        <Text style={styles.settingLabel}>Display Name</Text>
                        {isEditing ? (
                            <TextInput
                                style={styles.input}
                                value={name}
                                onChangeText={setName}
                                autoFocus
                            />
                        ) : (
                            <Text style={styles.settingValue}>{name}</Text>
                        )}
                    </View>
                    {isEditing ? (
                        <TouchableOpacity onPress={handleUpdate}>
                            <Text style={styles.updateText}>Save</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => setIsEditing(true)}>
                            <Edit2 color={Theme.colors.primary} size={18} />
                        </TouchableOpacity>
                    )}
                </View>

                <TouchableOpacity style={styles.settingItem}>
                    <View style={styles.settingInfo}>
                        <Text style={styles.settingLabel}>Email Notification</Text>
                        <Text style={styles.settingValue}>Enabled</Text>
                    </View>
                    <ChevronRight color={Theme.colors.textSecondary} size={20} />
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Privacy & Security</Text>
                <TouchableOpacity style={styles.menuItem}>
                    <ShieldCheck color={Theme.colors.primary} size={20} />
                    <Text style={styles.menuText}>Password Manager</Text>
                    <ChevronRight color={Theme.colors.textSecondary} size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Settings color={Theme.colors.primary} size={20} />
                    <Text style={styles.menuText}>App Settings</Text>
                    <ChevronRight color={Theme.colors.textSecondary} size={20} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.logoutButton} onPress={() => Alert.alert("Logout", "Are you sure?")}>
                <LogOut color={Theme.colors.notification} size={20} />
                <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>

            <View style={{ height: 100 }} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.background,
    },
    header: {
        alignItems: 'center',
        paddingVertical: Theme.spacing.xl,
        backgroundColor: Theme.colors.card,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    profileImageContainer: {
        position: 'relative',
        marginBottom: Theme.spacing.md,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: Theme.colors.primary,
    },
    editBadge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: Theme.colors.primary,
        width: 28,
        height: 28,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Theme.colors.card,
    },
    name: {
        ...Theme.typography.h1,
        color: Theme.colors.text,
    },
    email: {
        color: Theme.colors.textSecondary,
        fontSize: 14,
        marginTop: 4,
    },
    section: {
        marginTop: Theme.spacing.xl,
        paddingHorizontal: Theme.spacing.md,
    },
    sectionTitle: {
        color: Theme.colors.textSecondary,
        fontSize: 14,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: Theme.spacing.md,
        marginLeft: 4,
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Theme.colors.card,
        padding: Theme.spacing.md,
        borderRadius: Theme.borderRadius.md,
        marginBottom: Theme.spacing.sm,
        justifyContent: 'space-between',
    },
    settingInfo: {
        flex: 1,
    },
    settingLabel: {
        color: Theme.colors.textSecondary,
        fontSize: 12,
    },
    settingValue: {
        color: Theme.colors.text,
        fontSize: 16,
        marginTop: 2,
    },
    input: {
        color: Theme.colors.text,
        fontSize: 16,
        marginTop: 2,
        borderBottomWidth: 1,
        borderBottomColor: Theme.colors.primary,
        padding: 0,
    },
    updateText: {
        color: Theme.colors.primary,
        fontWeight: 'bold',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Theme.colors.card,
        padding: Theme.spacing.md,
        borderRadius: Theme.borderRadius.md,
        marginBottom: Theme.spacing.sm,
    },
    menuText: {
        color: Theme.colors.text,
        fontSize: 16,
        flex: 1,
        marginLeft: 12,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Theme.spacing.xl,
        padding: Theme.spacing.md,
    },
    logoutText: {
        color: Theme.colors.notification,
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 8,
    },
});
