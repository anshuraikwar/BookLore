import Book from "@/components/book/Book";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Book />
    </main>
  );
}
