"use client";

import { useEffect, useState } from "react";

import Book, {BookType} from "@/components/book/Book";
import styles from "./page.module.css";

import { books } from '../config/bookList';

import BookCoverFront from '../../public/assets/img/atlantis/cover_front.webp';
import BookCoverSpine from '../../public/assets/img/atlantis/cover_spine.webp';
import BookCoverBack from '../../public/assets/img/atlantis/cover_back.webp';
import BookPage1 from '../../public/assets/img/atlantis/page_1.webp';
import BookPage2 from '../../public/assets/img/atlantis/page_2.webp';
import BookPages from '../../public/assets/img/pages.webp';
import BookPagesVertical from '../../public/assets/img/pages_v.webp';

export default function Home() {
  const [shuffledBookList, setShuffledBookList] = useState<BookType[]>([]);

  useEffect(() => {
    const shuffledBooks: BookType[] = books.sort(() => Math.random() - 0.5);
    setShuffledBookList(shuffledBooks);
  }, []);

  useEffect(() => {
    console.log(shuffledBookList);
  }, [shuffledBookList])

  const bookHeight = 'min(60vw, 60vh)';

  return (
    <div className={styles.bookshelf} id="bookshelf">
      {shuffledBookList.map((book) => (
        <Book
          key={`book-${book.id}`}

          show3DPreview={false}

          book={book}
        />
      ))}
      {/* <Book
        bookId="static-atlantis"

        bookHeight={bookHeight}
        bookWidth={`calc(${bookHeight} * 0.5)`}
        bookCoverThickness='3px'
        bookThickness='min(10.8vw, 10.8vh)'
        pagesOffset='3px'
        insideCoverColor='#100F0D'

        bookCoverFront={BookCoverFront.src}
        bookCoverSpine={BookCoverSpine.src}
        bookCoverBack={BookCoverBack.src}
        bookPage1={BookPage1.src}
        bookPage2={BookPage2.src}
        bookPages={BookPages.src}
        bookPagesVertical={BookPagesVertical.src}
      /> */}
    </div>
  );
}
