import AppNavigator from "./src/navigation/appNavigator";
import { useFonts, Inter_800ExtraBold, Inter_400Regular} from "@expo-google-fonts/inter"

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_800ExtraBold,
  });

  if (!fontsLoaded && fontError) {
      return null;
  }

  return (
    <AppNavigator />
  );
}