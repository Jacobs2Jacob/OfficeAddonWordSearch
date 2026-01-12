import React from "react";
import { Box, Text } from "@chakra-ui/react";

type Props = {
  message?: string;
};

export const LoadingIndicator = ({ message = "Loading…" }: Props) => {
  return (
    <Box mt={4}>
      <Text>{message}</Text>
    </Box>
  );
};
