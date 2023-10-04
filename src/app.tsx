import { StatusBar } from 'expo-status-bar';
import { GestureHandlerIntroduction } from 'src/animations';
import { AppProvider } from 'src/providers';

export function App() {
  return (
    <AppProvider>
      {/* <LayoutAnimation /> */}
      {/* <GestureDetectorQuickStart /> */}
      <GestureHandlerIntroduction />
      <StatusBar style="auto" />
    </AppProvider>
  );
}
