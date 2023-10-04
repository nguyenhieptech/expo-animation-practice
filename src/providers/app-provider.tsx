import React, { PropsWithChildren } from 'react';
import { GestureHandlerProvider } from './gesture-handler-provider';
import { SafeAreaProvider } from './safe-area-provider';

/** Wrap all providers and React contexts inside this AppProvider. */
export function AppProvider({ children }: PropsWithChildren) {
  return (
    <GestureHandlerProvider>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </GestureHandlerProvider>
  );
}
