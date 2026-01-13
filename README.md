**To Execute:**  
	•	Run npm install  
	•	Run the app with npm start  
   
**Assumptions & Design Decisions**  
• The search is triggered explicitly via a button to avoid running Word API calls on every keystroke and to keep behavior predictable.  
• The existing Microsoft Office Add-in template structure was largely preserved, with only small, localized improvements for clarity.  
• Word API interactions are kept separate from UI components to maintain a clear separation of concerns.  
• Formatting and linting follow the configuration provided by the template to ensure consistency.  
  
**Challenges & Solutions**  
• The Word JavaScript API requires execution within Word.run and explicit synchronization.  
This logic was isolated to keep it easy to reason about.  
• ESLint initially reported Word as undefined.  
This was resolved by declaring it as a global, reflecting how Office.js provides it at runtime.  
• The task pane loads a few seconds after Word in development mode, which is expected due to the local dev server and sideloading process.  
