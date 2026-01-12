import React, { Component, ErrorInfo, ReactNode } from "react";
import { Alert, AlertIcon, Box, Button, Heading, VStack } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console for debugging
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Box p={4}>
          <VStack align="stretch" spacing={4}>
            <Alert status="error">
              <AlertIcon />
              <Box>
                <Heading size="sm" mb={2}>
                  Something went wrong
                </Heading>
                <Box fontSize="sm" mb={2}>
                  {this.state.error?.message || "An unexpected error occurred"}
                </Box>
                <Button size="sm" onClick={this.handleReset}>
                  Try again
                </Button>
              </Box>
            </Alert>
          </VStack>
        </Box>
      );
    }

    return this.props.children;
  }
}
