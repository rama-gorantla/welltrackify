import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>  {/* Hide header for all screens */}
        {/* <Stack.Screen name="(tabs)" /> Your Tab Navigation */}
        {/* <Stack.Screen name="signIn" />  */}
        {/* Sign In Screen */}
        {/* <Stack.Screen name="signup" />  */}
        {/* Sign Up Screen */}
        {/* <Stack.Screen name="know-more" /> */}
         {/* Know More Page */}
        {/* <Stack.Screen name="+not-found" /> */}
         {/* Default Not Found Page */}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

