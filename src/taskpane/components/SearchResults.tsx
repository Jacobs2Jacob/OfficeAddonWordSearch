import React from "react";
import { ErrorAlert } from "../../shared/UI/ErrorAlert";
import { LoadingIndicator } from "../../shared/UI/LoadingIndicator";
import { EmptyState } from "../../shared/UI/EmptyState";
import { ResultsList } from "./ResultsList";

interface Props {
  results: string[];
  isLoading: boolean;
  error?: string;
  hasSearched: boolean;
}

export const SearchResults = ({ results, isLoading, error, hasSearched }: Props) => {
  if (error) {
    return <ErrorAlert message={error} />;
  }

  if (isLoading) {
    return <LoadingIndicator message="Searching…" />;
  }

  if (!hasSearched) {
    return <EmptyState message="Run a search to see results." />;
  }

  if (results.length === 0) {
    return <EmptyState message="No results found." color="inherit" />;
  }

  return <ResultsList results={results} />;
};
