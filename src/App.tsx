import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './containers/ListaVagas/Hero'
import ListaVagas from './containers/ListaVagas'

import EstiloGlobal, { Container, Tema } from './global'

import './global.css'

function App() {
  return (
    <>
      <ThemeProvider theme={Tema}>
        <EstiloGlobal />
        <Header />
        <Hero />
        <Container>
          <ListaVagas />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
