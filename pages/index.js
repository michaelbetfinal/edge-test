import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import Header from "../components/header";
export const runtime = "experimental-edge";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();
  // Pass data to the page via props
  return { props: { repo } };
}

export default function Page({ repo }) {
  /* const { t } = useTranslation("home");
  const description = t("description");
  const linkName = t("more-examples"); */

  return (
    <main>
      {/* <Header /> */}
      <p>Test</p>
      <p>{repo.stargazers_count}</p>
      <Link href="/more-examples">more-examples</Link>
    </main>
  );
}
