import type { AppProps } from "next/app";
import { getLayout } from "@vercel/examples-ui";
import "@vercel/examples-ui/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = getLayout<any>(Component);

  return (
    <Layout
      title="Password Protected"
      path="edge-middleware/basic-auth-password"
    >
      <Component {...pageProps} />
    </Layout>
  );
}
