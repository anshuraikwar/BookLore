"use client";

import Image from 'next/image';
import { useEffect, useState } from "react";
import { BookType } from "@/types/bookType";

export default function BookshelfClient({ books }: { books: BookType[] }) {
  const [numberOfShelves, setNumberOfShelves] = useState<number>(0);

  const setShelves = () => {
    if (!books.length) return;

    const bookshelfContent = document.getElementById('bookshelf_content');
    if (!bookshelfContent) return;

    const shelfHeight = Math.min(window.innerHeight * 0.6, window.innerWidth * 0.6);
    const shelfGap = Math.min(window.innerHeight * 0.15, window.innerWidth * 0.15);
    console.log(
      '\n shelfHeight: ', shelfHeight,
      '\n shelfGap: ', shelfGap,
      '\n shelfHeight+shelfGap: ', shelfHeight + shelfGap,
    )
    const numOfShelves = Math.floor(bookshelfContent?.clientHeight / (shelfHeight + shelfGap));

    setNumberOfShelves(prev =>
      prev === numOfShelves ? prev : numOfShelves
    );
  }

  useEffect(() => {
    setShelves();

    let rafId: number | null = null;
    const handleResize = () => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        setShelves();
        rafId = null;
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }

      window.removeEventListener("resize", handleResize);
    };
  }, [books]);

  useEffect(() => {
    const container = document.getElementById("bookshelf_content");
    if (!container) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[id$='-book-container']");
      if (!target) return;

      // Ignore moves within the same book container
      if (
        target.contains(e.relatedTarget as Node)
      ) {
        return;
      }

      const bookId = target.id.replace("-book-container", "");
      const card = document.getElementById(`${bookId}-card`);

      if (card) {
        card.style.transform = "rotateX(-10deg) rotateY(90deg) translateY(12px)";
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[id$='-book-container']");
      if (!target) return;

      // Ignore moves within the same book container
      if (
        target.contains(e.relatedTarget as Node)
      ) {
        return;
      }

      const bookId = target.id.replace("-book-container", "");
      const card = document.getElementById(`${bookId}-card`);

      if (card) {
        card.style.transform = "rotateX(0deg) rotateY(90deg) translateY(0px)";
      }
    };

    container.addEventListener("mouseover", handleMouseOver);
    container.addEventListener("mouseout", handleMouseOut);

    return () => {
      container.removeEventListener("mouseover", handleMouseOver);
      container.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    Array.from({ length: numberOfShelves }).map((_, i) => (
      <div key={`shelf-${i}`} className="shelf-wrapper"><div className="shelf">
        <Image
          height={50}
          width={500}
          src={'/assets/img/bookshelf.webp'}
          alt={''}
          priority
          objectPosition='bottom'
          objectFit='cover'
          style={{ width: '100%', height: '100%' }}
        />
      </div></div>
    ))
  );
}
