import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'; 
// Extends expect with DOM-specific matchers

// tear down
afterEach(() => {
  cleanup(); // Cleans up the DOM after each test
});