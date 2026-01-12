/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global Office */

Office.onReady(() => {
  // If needed, Office.js is ready to be called.
});

/**
 * Handles the add-in command execution.
 * @param event
 */
function action(event: Office.AddinCommands.Event) {
  // Note: Mailbox API is not available in Word add-ins.
  // If you need to show notifications, use Word-specific APIs or
  // handle it in the task pane UI.

  // Be sure to indicate when the add-in command function is complete.
  event.completed();
}

// Register the function with Office.
Office.actions.associate("action", action);
