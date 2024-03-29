"use client";

import styles from "./page.module.css";
import { Suspense } from "react";
import {Container , Loading} from "./components";

function SearchBarFallback() {
  return <Loading />;
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Suspense fallback={<SearchBarFallback />}>
        <Container />
      </Suspense>
    </main>
  );
}
