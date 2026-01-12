import React from "react";
import { Box, List, ListItem, Text } from "@chakra-ui/react";

type Props = {
  results: string[];
  title?: string;
};

export const ResultsList = ({ results, title = "Top results" }: Props) => {
  return (
    <Box mt={4}>
      <Text fontWeight="semibold" mb={2}>
        {title}
      </Text>
      <List spacing={2}>
        {results.map((r, idx) => (
          <ListItem key={`${idx}-${r}`} p={2} borderWidth="1px" borderRadius="md">
            {r}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
