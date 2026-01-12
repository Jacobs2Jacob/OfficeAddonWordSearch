import React from "react";
import { Box, Button, Checkbox, HStack, Input, VStack } from "@chakra-ui/react";

type Props = {
  query: string;
  onQueryChange: (v: string) => void;
  caseSensitive: boolean;
  onCaseSensitiveChange: (v: boolean) => void;
  onSearch: () => void;
  isLoading: boolean;
};

export const SearchForm = ({
  query,
  onQueryChange,
  caseSensitive,
  onCaseSensitiveChange,
  onSearch,
  isLoading,
}: Props) => {
  const isDisabled = isLoading || query.trim().length === 0;

  return (
    <VStack align="stretch" spacing={3}>
      <Input
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Enter text to search..."
        aria-label="Search query"
      />

      <HStack justify="space-between">
        <Checkbox isChecked={caseSensitive} onChange={(e) => onCaseSensitiveChange(e.target.checked)}>
          Case sensitive
        </Checkbox>

        <Box>
          <Button onClick={onSearch} isLoading={isLoading} isDisabled={isDisabled}>
            Search
          </Button>
        </Box>
      </HStack>
    </VStack>
  );
};
