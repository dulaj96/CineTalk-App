export const Theme = {
  colors: {
    background: '#121212',
    card: '#1E1E1E',
    primary: '#FFD700', // Premium Gold
    text: '#FFFFFF',
    textSecondary: '#AAAAAA',
    border: '#333333',
    notification: '#FF3B30',
    tabBar: '#1A1A1A',
    plusButton: '#FFD700',
    shadow: '#000000',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 20,
    round: 50,
  },
  typography: {
    fontFamily: 'System', // Using system font for Roboto/Inter feel
    h1: {
      fontSize: 24,
      fontWeight: 'bold' as const,
    },
    h2: {
      fontSize: 20,
      fontWeight: 'bold' as const,
    },
    body: {
      fontSize: 16,
      fontWeight: 'normal' as const,
    },
    caption: {
      fontSize: 12,
      fontWeight: 'normal' as const,
    },
  },
};
