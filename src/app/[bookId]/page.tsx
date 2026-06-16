import { redirect } from 'next/navigation'

import "./bookPageStyles.css";
import { BookType } from "@/types/bookType";
import { books } from '../../config/bookList';
import BookDetails from "@/components/bookDetails/bookDetails";

export async function generateStaticParams() {
  return books.map((book) => ({
    bookId: book.id.toString(),
  }));
}

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
  const foundBook = books.find((bk) => bk.id === bookId);

  if (!foundBook) {
    redirect('/') // Triggers an immediate server-side redirect
  }

  return (
    <div id='book-details-page' className="book-details-page">
      <div id='book-details' className="book-details-content">
        {foundBook && (
          <BookDetails book={foundBook as BookType} />
        )}
      </div>
    </div>
  )
}