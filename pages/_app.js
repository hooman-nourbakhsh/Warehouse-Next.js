import QueryProvider from "providers/QueryProvider";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <QueryProvider>
      <Component {...pageProps} />
      <Toaster/>
    </QueryProvider>
  );
}

export default MyApp;
