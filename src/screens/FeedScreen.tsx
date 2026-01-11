import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Theme } from '../constants/Theme';
import { MOCK_POSTS, MOCK_USER } from '../constants/MockData';
import { ThumbsUp, MessageCircle, Trash2, Share2 } from 'lucide-react-native';

export const FeedScreen = () => {
    const renderComment = (comment: any) => (
        <View key={comment.id} style={styles.commentItem}>
            <Text style={styles.commentUser}>{comment.user}</Text>
            <Text style={styles.commentText}>{comment.text}</Text>
            {comment.authorId === MOCK_USER.id && (
                <TouchableOpacity style={styles.deleteAction}>
                    <Trash2 color={Theme.colors.notification} size={14} />
                </TouchableOpacity>
            )}
        </View>
    );

    const renderPost = ({ item }: any) => (
        <View style={styles.postCard}>
            <View style={styles.postHeader}>
                <Image source={{ uri: item.user.avatar }} style={styles.userAvatar} />
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>{item.user.name}</Text>
                    <Text style={styles.timestamp}>{item.timestamp}</Text>
                </View>
            </View>

            <Text style={styles.description}>{item.description}</Text>

            {item.image && (
                <Image
                    source={typeof item.image === 'number' ? item.image : { uri: item.image }}
                    style={styles.postImage}
                    resizeMode="cover"
                />
            )}

            <View style={styles.postActions}>
                <TouchableOpacity style={styles.actionButton}>
                    <ThumbsUp color={Theme.colors.textSecondary} size={20} />
                    <Text style={styles.actionText}>{item.likes.toString()}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <MessageCircle color={Theme.colors.textSecondary} size={20} />
                    <Text style={styles.actionText}>{item.comments.length.toString()}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <Share2 color={Theme.colors.textSecondary} size={20} />
                </TouchableOpacity>
            </View>

            {item.comments.length > 0 && (
                <View style={styles.commentsSection}>
                    {item.comments.map(renderComment)}
                </View>
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={MOCK_POSTS}
                renderItem={renderPost}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.feedList}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.background,
    },
    feedList: {
        padding: Theme.spacing.md,
        paddingBottom: 100,
    },
    postCard: {
        backgroundColor: Theme.colors.card,
        borderRadius: Theme.borderRadius.lg,
        padding: Theme.spacing.md,
        marginBottom: Theme.spacing.md,
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Theme.spacing.md,
    },
    userAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    userInfo: {
        marginLeft: Theme.spacing.sm,
    },
    userName: {
        color: Theme.colors.text,
        fontWeight: 'bold',
        fontSize: 16,
    },
    timestamp: {
        color: Theme.colors.textSecondary,
        fontSize: 12,
    },
    description: {
        color: Theme.colors.text,
        fontSize: 14,
        lineHeight: 20,
        marginBottom: Theme.spacing.md,
    },
    postImage: {
        width: '100%',
        height: 250,
        borderRadius: Theme.borderRadius.md,
        marginBottom: Theme.spacing.md,
    },
    postActions: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: Theme.colors.border,
        paddingTop: Theme.spacing.sm,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: Theme.spacing.xl,
    },
    actionText: {
        color: Theme.colors.textSecondary,
        marginLeft: 6,
        fontSize: 14,
    },
    commentsSection: {
        marginTop: Theme.spacing.md,
        paddingTop: Theme.spacing.sm,
        borderTopWidth: 0.5,
        borderTopColor: Theme.colors.border,
    },
    commentItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#252525',
        padding: Theme.spacing.sm,
        borderRadius: Theme.borderRadius.sm,
        marginBottom: 6,
        position: 'relative',
    },
    commentUser: {
        color: Theme.colors.primary,
        fontWeight: 'bold',
        fontSize: 13,
        marginRight: 8,
    },
    commentText: {
        color: Theme.colors.text,
        fontSize: 13,
        flex: 1,
    },
    deleteAction: {
        padding: 2,
        marginLeft: 4,
    },
});
