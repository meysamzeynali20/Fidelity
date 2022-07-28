import { useState } from 'react';
import {
  Navbar,
  ResponsiveNav,
  ScrollUp,
  Footer,
  SubFooter
} from 'root'
import DataContext from 'Base/DataContext';
import "../styles/globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {

  const [responsiveNav, setResponsiveNav] = useState(false);
  pageProps = { ...pageProps, responsiveNav, setResponsiveNav }

  return <DataContext.Provider
    value={
      pageProps
    }
  >
    <ScrollUp />
    <Navbar />
    <ResponsiveNav />
    <main>
      <Component />
    </main>
    <Footer />
    <SubFooter />
  </DataContext.Provider>
}

export default MyApp;
