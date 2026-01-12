import React from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";
import { SearchForm } from "../taskpane/components/SearchForm";
import { SearchResults } from "../taskpane/components/SearchResults";
import { useWordSearch } from "../taskpane/hooks/useWordSearch";

const App = () => {
  const { query, setQuery, caseSensitive, setCaseSensitive, isLoading, results, error, hasSearched, onSearch } =
    useWordSearch();

  return (
    <Box p={4}>
      <VStack align="stretch" spacing={4}>
        <Heading size="md">Word Search</Heading>

        <SearchForm
          query={query}
          onQueryChange={setQuery}
          caseSensitive={caseSensitive}
          onCaseSensitiveChange={setCaseSensitive}
          onSearch={onSearch}
          isLoading={isLoading}
        />

        <SearchResults results={results} isLoading={isLoading} error={error} hasSearched={hasSearched} />
      </VStack>
    </Box>
  );
};

export default App;
