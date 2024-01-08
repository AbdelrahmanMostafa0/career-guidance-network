import Layout from "@/components/layout";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Poppins } from "next/font/google";
import { Provider } from "react-redux";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
TimeAgo.addDefaultLocale(en);
export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Provider store={store}>
        <Layout>
          <main className={poppins.className}>
            <Component {...pageProps} />
          </main>
        </Layout>
      </Provider>
    </NextUIProvider>
  );
}
