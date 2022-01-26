// COMPONENTS...
import { GlobalStyle } from '../components/GlobalStyle';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}