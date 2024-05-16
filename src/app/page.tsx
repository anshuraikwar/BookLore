"use client";

import { useEffect, useState } from "react";
import Link from "../../node_modules/next/link";

import styles from "./page.module.css";
import { BookType } from "../types/bookType";
import { books } from '../config/bookList';
import Book from "@/components/book/Book";


export default function Home() {
  const [shuffledBookList, setShuffledBookList] = useState<BookType[]>([]);

  useEffect(() => {
    const shuffledBooks: BookType[] = books.sort(() => Math.random() - 0.5);
    setShuffledBookList(shuffledBooks);
  }, []);

  return (
    <div className={styles.bookshelf} id="bookshelf">
      {shuffledBookList.map((book) => (
        <Link href={`/${book.id}`}>
          <Book
            key={`book-${book.id}`}

            show3DPreview={false}
            book={{ ...book, height: 'min(60vw, 60vh)' }}
          />
        </Link>
      ))}
    </div>
  );
}
