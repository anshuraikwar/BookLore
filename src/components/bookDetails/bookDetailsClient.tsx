"use client";

import { useEffect } from "react";
import "./styles.css";
import { BookType } from "@/types/bookType"

type BookDetailsPropType = {
  book: BookType,
};

export default function BookDetailsClient({
  book,
}: BookDetailsPropType) {

  const { id: bookId, animate = true } = book;
  useEffect(() => {
    const container = document.getElementById(`${bookId}-book-container`);
    const card = document.getElementById(`${bookId}-card`);
    const bookDetails = document.getElementById(`book-details-${bookId}`);
    const bookFrontCover = document.getElementById(`${bookId}-cover-front`);

    const handleScroll = () => {
      if (bookDetails) {
        const bookDetailsBounding = bookDetails.getBoundingClientRect();
        const { top } = bookDetailsBounding;

        let OldValue = 0 - top;

        let OldMax = bookDetails.clientHeight - window.innerHeight;
        OldMax = 3 * OldMax / 4;
        var OldMin = 0;
        var OldRange = (OldMax - OldMin);

        if (OldValue < OldMin) OldValue = OldMin;
        if (OldValue > OldMax) OldValue = OldMax;

        var NewMin = 30; // 0;
        var NewMax = 45; // 15;
        var NewRange = (NewMax - NewMin);

        var NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin;

        if (container) {
          container.style.paddingLeft = `${NewValue}%`;
        }

        OldMin = 0;
        OldRange = (OldMax - OldMin);

        const NewRotateZ = -35

        NewMin = 0;
        NewMax = 100;
        NewRange = (NewMax - NewMin);

        NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin;
        const NewRotateX = Math.abs(NewValue - (NewMax / 2));

        NewMin = 0;
        NewMax = 360;
        NewRange = (NewMax - NewMin);

        var NewRotateY = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin;
        NewRotateY = 0 - NewRotateY;

        if (card) {
          card.style.transform = `rotateY(${NewRotateY}deg) rotateX(${NewRotateX}deg) rotateZ(${NewRotateZ}deg)`;
          card.style.transition = `none`;
        }

        if (animate) {
          NewMin = 0;
          NewMax = 170;
          NewRange = (NewMax - NewMin);

          NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin;

          if (bookFrontCover) {
            bookFrontCover.style.transform = `rotateY(-${NewValue}deg)`;
          }
        }
      }
    }

    window?.addEventListener("scroll", handleScroll, true)

    return (() => {
      window.removeEventListener("scroll", handleScroll);
    });
  }, [bookId, animate]);

  return (
    <></>
  )
}