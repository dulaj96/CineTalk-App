import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Dimensions,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { Theme } from '../constants/Theme';
import { MOCK_ANNOUNCEMENTS, MOCK_NEW_RELEASES } from '../constants/MockData';
import { Star } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export const HomeScreen = () => {
    const renderAnnouncement = ({ item }: any) => (
        <View style={styles.announcementCard}>
            <Image
                source={{ uri: item.image }}
                style={styles.announcementImage}
                resizeMode="cover"
            />
            <View style={styles.announcementOverlay}>
                <Text style={styles.announcementTitle}>{item.title}</Text>
                <Text style={styles.announcementDesc}>{item.description}</Text>
            </View>
        </View>
    );

    const renderMovieItem = (item: any) => (
        <TouchableOpacity key={item.id} style={styles.movieItem} activeOpacity={0.7}>
            <Image
                source={typeof item.poster === 'number' ? item.poster : { uri: item.poster }}
                style={styles.moviePoster}
            />
            <View style={styles.ratingBadge}>
                <Star color={Theme.colors.primary} size={12} fill={Theme.colors.primary} />
                <Text style={styles.ratingText}>{item.rating.toString()}</Text>
            </View>
            <Text style={styles.movieTitle} numberOfLines={1}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 24 }}>CineTalk Home</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.background,
    },
    section: {
        paddingTop: 20,
        paddingHorizontal: 16,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 15,
    },
    announcementCard: {
        width: width - 60,
        height: 180,
        marginRight: 15,
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: '#1E1E1E',
    },
    announcementImage: {
        width: '100%',
        height: '100%',
    },
    announcementOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 15,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    announcementTitle: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    announcementDesc: {
        color: '#BBBBBB',
        fontSize: 12,
        marginTop: 4,
    },
    movieGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    movieItem: {
        width: (width - 48) / 2,
        backgroundColor: '#1E1E1E',
        borderRadius: 12,
        padding: 8,
        marginBottom: 15,
    },
    moviePoster: {
        width: '100%',
        height: 220,
        borderRadius: 8,
    },
    movieTitle: {
        color: '#FFFFFF',
        marginTop: 8,
        fontSize: 14,
        fontWeight: '600',
    },
    ratingBadge: {
        position: 'absolute',
        top: 15,
        right: 15,
        backgroundColor: 'rgba(0,0,0,0.8)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderRadius: 6,
    },
    ratingText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: 4,
    },
});