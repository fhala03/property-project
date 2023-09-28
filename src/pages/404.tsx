import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | LinkTab</title>
        <meta
          name="description"
          content="LinkTab is a simple web app that allows you to save and organize web links. App is built with the T3 stack."
        />
        <link rel="icon" href="/link.svg" />
      </Head>

      <div className="flex h-screen flex-col items-center justify-center">
        <Image alt="Error Image" src={"/error.svg"} width={450} height={450} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-6xl font-extrabold">404</h1>
          <span className="text-foreground/50">
            Oops! Looks like you&apos;ve ventured into uncharted territory.
          </span>
          <Link href={"/"}>
            <h1 className="text-muted-foreground transition-all duration-500 ease-linear hover:underline">
              Back to home
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
