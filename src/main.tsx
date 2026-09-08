import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme.ts';
import { GlobalStyle } from './style/GlobalStyle.ts';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<App />
			<GlobalStyle />
		</ThemeProvider>
	</StrictMode>
);
