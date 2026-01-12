import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface Props {
  message: string;
  color?: string;
}

export const EmptyState = ({ message, color = "gray.500" }: Props) => {
  return (
    <Box mt={4}>
      <Text color={color}>{message}</Text>
    </Box>
  );
};
