import { useCallback, useState } from "react";
import { searchWordBody } from "../services/wordSearchService";

export const useWordSearch = () => {
  const [query, setQuery] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [hasSearched, setHasSearched] = useState(false);

  const onSearch = useCallback(async () => {
    setError(undefined);
    setIsLoading(true);
    setHasSearched(true);

    try {
      const res = await searchWordBody(query, { matchCase: caseSensitive });
      setResults(res);
    } catch (e: unknown) {
      setResults([]);
      const errorMessage = e instanceof Error ? e.message : "Search failed.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [query, caseSensitive]);

  return {
    query,
    setQuery,
    caseSensitive,
    setCaseSensitive,
    isLoading,
    results,
    error,
    hasSearched,
    onSearch,
  };
};
