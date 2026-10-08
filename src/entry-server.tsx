import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

// Used at build time only: bakes the page into dist/index.html so search engines see real content.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
