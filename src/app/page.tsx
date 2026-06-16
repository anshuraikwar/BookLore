import Image from 'next/image';
import Link from "next/link";
import { books } from '../config/bookList';
import Book from "@/components/book/Book";
import BookshelfClient from "./bookshelfClient";

export default function Home() {
  return (
    <div
      id="bookshelf"
      className={"bookshelf"}
    >
      <div className="bookshelf_shell_wrapper">
        <div className="bookshelf_shell_container">
          <div className="bookshelf_shell">
            <div className="top">
              <Image
                height={50}
                width={500}
                src={'/BookLore/assets/img/bookshelf.webp'}
                alt={''}
                priority
                objectPosition='top'
                objectFit='cover'
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="bottom">
              <Image
                height={50}
                width={200}
                src={'/BookLore/assets/img/bookshelf.webp'}
                alt={''}
                objectPosition='bottom'
                objectFit='cover'
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="left">
              <Image
                height={500}
                width={50}
                src={'/BookLore/assets/img/bookshelf.webp'}
                alt={''}
                priority
                objectPosition='left'
                objectFit='cover'
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="right">
              <Image
                height={500}
                width={50}
                src={'/BookLore/assets/img/bookshelf.webp'}
                alt={''}
                priority
                objectPosition='right'
                objectFit='cover'
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className=""></div>
            <BookshelfClient books={books} />
          </div>
        </div>
      </div>
      <div id="bookshelf_content" className="bookshelf_content">
        {books.map((book, i) => (
          <Link key={book.id} href={`/${book.id}`}>
            <Book
              index={i}
              show3DPreview={false}
              book={{ ...book, height: 'min(60vw, 60vh)' }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
