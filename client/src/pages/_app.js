import Layout from "@/components/layout";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Layout>
        <main className={poppins.className}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </NextUIProvider>
  );
}
