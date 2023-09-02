import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';
import { ChakraProvider, ColorModeScript, ThemeConfig, extendTheme } from '@chakra-ui/react';

const THIRDWEB_CLIENTID = import.meta.env["THIRDWEB_CLIENTID"];

const themeConfig: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({ themeConfig });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <ChakraProvider theme={theme}>
      <ThirdwebProvider activeChain={ChainId.Goerli} clientId={THIRDWEB_CLIENTID}>
        <ColorModeScript initialColorMode={theme.themeConfig.initialColorMode} />
        <App />
      </ThirdwebProvider>
    </ChakraProvider>
  </Router>
)
