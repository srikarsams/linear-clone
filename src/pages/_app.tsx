import '../../styles/globals.css';

import { Footer } from '../components/footer';
import { Header } from '../components/header';

import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <main className="bg-page-gradient pt-navigation-height">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
