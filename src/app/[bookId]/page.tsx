"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./bookPageStyles.css";

import { books } from '../../config/bookList';
import BookDetails from "@/components/bookDetails/bookDetails";
import { BookType } from "@/types/bookType";

type BookPagePropType = {
  params: {
    bookId: string,
  }
};

export default function BookPage({
  params: {
    bookId,
  },
}: BookPagePropType) {
  const router = useRouter();

  const [book, setBook] = useState<BookType | null>(null);

  useEffect(() => {
    const foundBook = books.find((bk) => bk.id === bookId);
    if (foundBook) {
      setBook(foundBook);
    } else {
      router.replace("/");
    }
  }, []);

  return (
    <div id='book-details-page' className="book-details-page">
      <div id='book-details' className="book-details-content">
        {book && (
          <BookDetails book={book as BookType} />
        )}
      </div>
    </div>
  )
}