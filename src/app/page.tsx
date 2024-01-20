"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import SearchBar from "./components/SearchBox";
import ResultCard from "./components/ResultCard";
import Container from "./components/Container";

export default function Home() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string | undefined>();

  const query = searchParams.get("user");
  useEffect(() => {
    if (query) {
      setSearchTerm(query);
    }
  }, [query]);

  return (
    <main className={styles.main}>
      <Container>
      <SearchBar />
      <ResultCard searchTerm={searchTerm} />
      </Container>
    </main>
  );
}
