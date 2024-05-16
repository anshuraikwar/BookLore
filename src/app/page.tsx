"use client";

import { useEffect, useState } from "react";

import Book from "@/components/book/Book";
import { BookType } from "../types/bookType";
import styles from "./page.module.css";

import { books } from '../config/bookList';

import BookCoverFront from '../../public/assets/img/atlantis/cover_front.webp';
import BookCoverSpine from '../../public/assets/img/atlantis/cover_spine.webp';
import BookCoverBack from '../../public/assets/img/atlantis/cover_back.webp';
import BookPage1 from '../../public/assets/img/atlantis/page_1.webp';
import BookPage2 from '../../public/assets/img/atlantis/page_2.webp';
import BookPages from '../../public/assets/img/pages.webp';
import BookPagesVertical from '../../public/assets/img/pages_v.webp';
import Link from "../../node_modules/next/link";

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
            book={book}
          />
        </Link>
      ))}
    </div>
  );
}
