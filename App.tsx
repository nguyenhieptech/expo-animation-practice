import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { LayoutAnimation } from 'src/animations';

export default function App() {
  return (
    <View className="flex-1 bg-zinc-900">
      <Text className="text-zinc-200 font-bold text-4xl">Hello Expo</Text>
      <LayoutAnimation />
      <StatusBar style="auto" />
    </View>
  );
}
