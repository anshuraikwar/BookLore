"use client";

import { useEffect, useState } from "react";
import "./bookPageStyles.css";

import { books } from '../../config/bookList';
import BookDetails from "@/components/bookDetails/page";

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
  const [finalBookId, setFinalBookId] = useState<string>("");

  useEffect(() => {
    setFinalBookId(bookId);
  }, []);

  return (
    <div id='book-details-page' className="book-details-page">
      {books.map((book, bookIndex) => (
        <BookDetails key={book.id} book={book} bookIndex={bookIndex} />
      ))}
    </div>
  )
}