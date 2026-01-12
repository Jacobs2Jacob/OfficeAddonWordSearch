export type WordSearchOptions = {
  /** If true, search is case-sensitive */
  matchCase: boolean;
};

/**
 * Searches the Word document body using the Word JavaScript API and returns the
 * top 3 matches as plain text.
 */
export async function searchWordBody(query: string, options: WordSearchOptions): Promise<string[]> {
  const trimmed = query.trim();
  if (!trimmed) return [];

  // Office.js exposes Word as a global in the task pane. This helps during local
  // debugging (e.g. running outside Word) with a clear error.
  if (typeof Word === "undefined") {
    throw new Error("Word JavaScript API is not available. Run the add-in inside Microsoft Word.");
  }

  try {
    return await Word.run(async (context) => {
      const results = context.document.body.search(trimmed, {
        matchCase: options.matchCase,
      });

      // Load the results. Range.text is available on loaded items.
      context.load(results, "items");
      await context.sync();

      const texts = results.items.map((r) => (r.text ?? "").trim()).filter(Boolean);

      return texts.slice(0, 3);
    });
  } catch (error) {
    // Provide more specific error messages based on the error type
    if (error instanceof Error) {
      // Check for common Office.js errors
      if (error.message.includes("InvalidRequest")) {
        throw new Error("Invalid search request. Please check your search query and try again.");
      }
      if (error.message.includes("ItemNotFound")) {
        throw new Error("Document not found. Please ensure a document is open.");
      }
      if (error.message.includes("GeneralException")) {
        throw new Error("An error occurred while searching the document. Please try again.");
      }
      // Re-throw with original message if it's already descriptive
      throw error;
    }
    // Fallback for unknown error types
    throw new Error("An unexpected error occurred during the search operation.");
  }
}
