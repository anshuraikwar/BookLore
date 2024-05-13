"use client";

import './BookStyles.css';
import { useEffect } from 'react';

import BookCoverFront from '../../../public/assets/img/atlantic/cover_front.webp';
import BookPage1 from '../../../public/assets/img/atlantic/page_1.webp';
import BookCoverSpine from '../../../public/assets/img/atlantic/cover_spine.webp';
import BookCoverBack from '../../../public/assets/img/atlantic/cover_back.webp';
import BookPage2 from '../../../public/assets/img/atlantic/page_2.webp';
import BookPages from '../../../public/assets/img/pages.webp';
import BookPagesVertical from '../../../public/assets/img/pages_v.webp';

export default function Book() {
  const bookWidth = `min(40vw, 40vh)`;
  const bookHeight= `calc(${bookWidth} * 1.5)`;
  const bookCoverThickness= '3px';
  const bookThickness = 'min(10vw, 10vh)';
  const pagesOffset = '3px';
  const insideCoverColor = '#100F0D';

  useEffect(() => {
    const page = document.getElementById("page");
    const container = document.getElementById("container");
    const card = document.getElementById("card");
    const scrollContent = document.getElementById("scroll-content");
    const bookFrontCover = document.getElementById("book-cover-front");

    page?.addEventListener("scroll", () => {
      if (scrollContent) {
        const scrollContentBounding = scrollContent.getBoundingClientRect();
        const { top } = scrollContentBounding;

        const OldValue = Math.abs(top);

        const OldMax = scrollContent.clientHeight - window.innerHeight;
        var OldMin = OldMax / 2;
        var OldRange = (OldMax - OldMin);

        var NewMin = 0;
        var NewMax = 10;
        var NewRange = (NewMax - NewMin);

        var NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin;

        if (container) {
          container.style.paddingLeft = `${NewValue}%`;
        }

        OldMin = 0;
        OldRange = (OldMax - OldMin);

        // NewMin = 10;
        // NewMax = 35;
        // NewRange = (NewMax - NewMin);

        // NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin;
        // NewRotateZ = NewValue/2 - NewMax;
        const NewRotateZ = -30

        NewMin = 0;
        NewMax = 90;
        NewRange = (NewMax - NewMin);

        NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin;
        const NewRotateX = Math.abs(NewValue - (NewMax / 2));

        NewMin = 0;
        NewMax = 360;
        NewRange = (NewMax - NewMin);

        var NewRotateY = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin;
        NewRotateY = 0 - NewRotateY;

        if (card) {
          // card.style.transform = `rotateX(${NewRotateX}deg) rotateZ(${NewRotateZ}deg)`;
          card.style.transform = `rotateY(${NewRotateY}deg) rotateX(${NewRotateX}deg) rotateZ(${NewRotateZ}deg)`;

        }

        NewMin = 0;
        NewMax = 170;
        NewRange = (NewMax - NewMin);

        NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin;

        if (bookFrontCover) {
          bookFrontCover.style.transform = `rotateY(-${NewValue}deg)`;
        }
      }
    })
  }, []);

  return (
    <div id="container" className="container">
      <div id="card" className="card" style={{
        width: bookWidth,
        height: bookHeight,
      }}>
        <div className="book-cover back bottom" style={{
        width: bookWidth,
        height: bookHeight,
        }}>
          <div className="position-relative">
            <div className="cover-display" style={{
              backgroundImage: `url(${BookCoverBack.src})`,
            }} />
            <div className="sides horizontal right">
              <div className="image-display" style={{
                backgroundImage: `url(${BookCoverBack.src})`,
              }} />
            </div>
            <div className="sides vertical top">
              <div className="image-display" style={{
                backgroundImage: `url(${BookCoverBack.src})`,
              }} />
            </div>
            <div className="sides vertical bottom">
              <div className="image-display" style={{
                backgroundImage: `url(${BookCoverBack.src})`,
              }} />
            </div>
            <div className="pane top">
              <div className="inside image-display" style={{
                background: insideCoverColor,
              }} />
            </div>
          </div>
        </div>

        <div className="spine inside">
          <div className="position-relative">
            <div className="inside image-display" style={{
              background: insideCoverColor,
            }} />
            <div className="sides horizontal right" style={{
              backgroundImage: `url(${BookCoverSpine.src})`,
            }} />
            <div className="sides vertical top" style={{
              backgroundImage: `url(${BookCoverSpine.src})`,
            }} />
            <div className="sides vertical bottom" style={{
              backgroundImage: `url(${BookCoverSpine.src})`,
            }} />
            <div className="pane top">
              <div className="cover-display" style={{
                backgroundImage: `url(${BookCoverSpine.src})`,
              }} />
            </div>
          </div>
        </div>

        <div className="book-cover front bottom" style={{
        width: bookWidth,
        height: bookHeight,
        }}>
          <div id="book-cover-front" className="position-relative">
            <div className="inside image-display" style={{
              backgroundImage: `url(${BookPage1.src})`,
            }}></div>
            <div className="sides horizontal left">
              <div className="image-display" style={{
                backgroundImage: `url(${BookCoverFront.src})`,
              }} />
            </div>
            <div className="sides horizontal right">
              <div className="image-display" style={{
                backgroundImage: `url(${BookCoverFront.src})`,
              }} />
            </div>
            <div className="sides vertical top">
              <div className="image-display" style={{
                backgroundImage: `url(${BookCoverFront.src})`,
              }} />
            </div>
            <div className="sides vertical bottom">
              <div className="image-display" style={{
                backgroundImage: `url(${BookCoverFront.src})`,
              }} />
            </div>
            <div className="pane top">
              <div className="cover-display" style={{
                backgroundImage: `url(${BookCoverFront.src})`,
              }} />
            </div>
          </div>
        </div>

        <div className="first-page" style={{
          backgroundImage: `url(${BookPage2.src})`,
        }} />

        <div className="pages bottom" style={{
          width: `calc(${bookWidth} - ${pagesOffset} - ${bookCoverThickness})`,
          height: `calc(${bookThickness} - (2 * ${bookCoverThickness}))`,

          backgroundImage: `url(${BookPages.src})`,
        }} />
        <div className="pages top" style={{
          width: `calc(${bookWidth} - ${pagesOffset} - ${bookCoverThickness})`,
          height: `calc(${bookThickness} - (2 * ${bookCoverThickness}))`,

          backgroundImage: `url(${BookPages.src})`,
        }} />
        <div className="pages right" style={{
          width: `calc(${bookThickness} - (2 * ${bookCoverThickness}))`,
          height: `calc(${bookWidth} - ${pagesOffset} - ${bookCoverThickness})`,

          backgroundImage: `url(${BookPagesVertical.src})`,
        }}>
          <div className="image-display" />
        </div>
      </div>
    </div>
  )
}