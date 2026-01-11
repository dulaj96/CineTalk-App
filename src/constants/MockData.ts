export const MOCK_USER = {
    id: 'user1',
    name: 'Dulaj Mithun',
    email: 'dulaj@cinetalk.lk',
    profilePicture: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
};

export const MOCK_ANNOUNCEMENTS = [
    {
        id: '1',
        title: 'CineTalk Film Fest 2026',
        description: 'Join us for the biggest film festival in Sri Lanka!',
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
    },
    {
        id: '2',
        title: 'Exclusive Interview with Vijay Suriya',
        description: 'Going behind the scenes of "Night Guard".',
        image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
    },
];

export const MOCK_NEW_RELEASES = [
    {
        id: 'm1',
        title: 'Night Guard',
        poster: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=600&fit=crop',
        rating: 4.8,
    },
    {
        id: 'm2',
        title: 'Love in Colombo',
        poster: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=600&fit=crop',
        rating: 4.5,
    },
    {
        id: 'm3',
        title: 'The Ritual',
        poster: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400&h=600&fit=crop',
        rating: 4.2,
    },
    {
        id: 'm4',
        title: 'Street Soul',
        poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop',
        rating: 4.0,
    },
];

export const MOCK_POSTS = [
    {
        id: 'p1',
        user: {
            name: 'Amila Perera',
            avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
        },
        timestamp: '2 hours ago',
        description: 'Just watched "Night Guard". The cinematography is insane! Sri Lankan cinema is reaching new heights. #CineTalk LK #NightGuard',
        image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=600&fit=crop',
        likes: 124,
        comments: [
            { id: 'c1', user: 'Kasun', text: 'Totally agree, the action scenes were top-notch!', authorId: 'user2' },
            { id: 'c2', user: 'Dulaj Mithun', text: 'I need to see this tonight!', authorId: 'user1' },
        ],
    },
    {
        id: 'p2',
        user: {
            name: 'Sanduni Silva',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        },
        timestamp: '5 hours ago',
        description: 'Love in Colombo is such a breath of fresh air. Highly recommended for a weekend watch!',
        image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=600&fit=crop',
        likes: 89,
        comments: [],
    },
];
