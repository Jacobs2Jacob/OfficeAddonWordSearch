import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ErrorBoundary from "./ErrorBoundary";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ChakraProvider>
      <ErrorBoundary>{children}</ErrorBoundary>
    </ChakraProvider>
  );
};
