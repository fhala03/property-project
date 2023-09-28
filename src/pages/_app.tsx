import type { AppProps } from "next/app";
import { api } from "@/utils/api";
import Head from "next/head";
import "@/styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

export type NextPageWithLayout<P = NonNullable<unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const layoutForPage = Component.getLayout
    ? Component.getLayout
    : (page: JSX.Element) => page;

  return (
    <>
      <Head>
        <title>Discover Your Dream Properties| Property Site</title>
        <meta
          name="description"
          content="Explore a curated collection of exquisite properties. Find your perfect home or investment opportunity."
        />
        <meta
          property="og:title"
          content="Discover Your Dream Properties | Property Site"
        />
        <meta
          property="og:description"
          content="Explore a curated collection of exquisite properties. Find your perfect home or investment opportunity."
        />
        <meta
          property="og:image"
          content="https://convert-text-app.vercel.app/background.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {layoutForPage(<Component {...pageProps} />)}
    </>
  );
}

export default api.withTRPC(App);
