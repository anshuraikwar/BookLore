"use client";

import { useEffect } from 'react';
import './BookStyles.css';

type BookPropType = {
  bookId: string,

  bookWidth: string,
  bookHeight: string,
  bookCoverThickness: string,
  bookThickness: string,
  pagesOffset: string,
  insideCoverColor: string,

  bookCoverFront: string,
  bookCoverSpine: string,
  bookCoverBack: string,
  bookPage1: string,
  bookPage2: string,
  bookPages: string,
  bookPagesVertical: string,
};

export default function Book({
  bookId,

  bookWidth,
  bookHeight,
  bookCoverThickness,
  bookThickness,
  pagesOffset,
  insideCoverColor,

  bookCoverFront,
  bookCoverSpine,
  bookCoverBack,
  bookPage1,
  bookPage2,
  bookPages,
  bookPagesVertical,
}: BookPropType) {
  useEffect(() => {
    const bookshelf = document.getElementById("bookshelf");
    const container = document.getElementById("container");
    const card = document.getElementById("card");
    const scrollContent = document.getElementById("scroll-content");
    const bookFrontCover = document.getElementById("book-cover-front");

    bookshelf?.addEventListener("scroll", () => {

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
          console.log('containe: ', NewValue);
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

  const handleMouseEnter = () => {
    const card = document.getElementById(`${bookId}-card`);
    if (card) {
      console.log(`${bookId}-card`);
      card.style.transform = `rotateX(-18deg) rotateY(90deg) translateY(12px)`;
    }
  }
  const handleMouseLeave = () => {
    const card = document.getElementById(`${bookId}-card`);
    if (card) {
      console.log(`${bookId}-card`);
      card.style.transform = `rotateX(0deg) rotateY(90deg) translateY(0px)`;
    }
  }
  

  return (
    <>
      <div
        id="container"
        className="container"
        style={{
          width: bookThickness,
          height: bookHeight,

          // height: '100vh',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => console.log(`${bookId}-card`)}
      >
        <div id={`${bookId}-card`} className="book-base" style={{
          width: bookWidth,
          height: bookHeight,
        }}>
          <div className="book-cover back bottom" style={{
            width: bookWidth,
            height: bookHeight,
          }}>
            <div className="position-relative">
              <div className="cover-display" style={{
                backgroundImage: `url(${bookCoverBack})`,
              }} />
              <div className="sides horizontal right" style={{
                width: bookCoverThickness,
              }}>
                <div className="image-display" style={{
                  backgroundImage: `url(${bookCoverBack})`,
                }} />
              </div>
              <div className="sides vertical top" style={{
                height: bookCoverThickness,
              }}>
                <div className="image-display" style={{
                  backgroundImage: `url(${bookCoverBack})`,
                }} />
              </div>
              <div className="sides vertical bottom" style={{
                height: bookCoverThickness,
              }}>
                <div className="image-display" style={{
                  backgroundImage: `url(${bookCoverBack})`,
                }} />
              </div>
              <div className="pane top" style={{
                transform: `translateZ(v${bookCoverThickness})`,
              }}>
                <div className="inside image-display" style={{
                  background: insideCoverColor,
                }} />
              </div>
            </div>
          </div>

          <div className="spine inside" style={{
            left: bookCoverThickness,

            width: `calc(${bookThickness} - ${bookCoverThickness})`,
            height: bookHeight,
          }}>
            <div className="position-relative">
              <div className="inside image-display" style={{
                background: insideCoverColor,
              }} />
              <div className="sides horizontal right" style={{
                width: bookCoverThickness,

                backgroundImage: `url(${bookCoverSpine})`,
              }} />
              <div className="sides vertical top" style={{
                height: bookCoverThickness,

                backgroundImage: `url(${bookCoverSpine})`,
              }} />
              <div className="sides vertical bottom" style={{
                height: bookCoverThickness,

                backgroundImage: `url(${bookCoverSpine})`,
              }} />
              <div className="pane top" style={{
                transform: `translateZ(${bookCoverThickness})`,
              }}>
                <div className="cover-display" style={{
                  backgroundImage: `url(${bookCoverSpine})`,
                }} />
              </div>
            </div>
          </div>

          <div className="book-cover front bottom" style={{
            left: bookCoverThickness,

            transform: `translateZ(calc(${bookThickness} - ${bookCoverThickness}))`,

            width: bookWidth,
            height: bookHeight,
          }}>
            <div id="book-cover-front" className="position-relative">
              <div className="inside image-display" style={{
                backgroundImage: `url(${bookPage1})`,
              }}></div>
              <div className="sides horizontal left" style={{
                width: bookCoverThickness,
              }}>
                <div className="image-display" style={{
                  backgroundImage: `url(${bookCoverFront})`,
                }} />
              </div>
              <div className="sides horizontal right" style={{
                width: bookCoverThickness,
              }}>
                <div className="image-display" style={{
                  backgroundImage: `url(${bookCoverFront})`,
                }} />
              </div>
              <div className="sides vertical top" style={{
                height: bookCoverThickness,
              }}>
                <div className="image-display" style={{
                  backgroundImage: `url(${bookCoverFront})`,
                }} />
              </div>
              <div className="sides vertical bottom" style={{
                height: bookCoverThickness,
              }}>
                <div className="image-display" style={{
                  backgroundImage: `url(${bookCoverFront})`,
                }} />
              </div>
              <div className="pane top" style={{
                transform: `translateZ(v${bookCoverThickness})`,
              }}>
                <div className="cover-display" style={{
                  backgroundImage: `url(${bookCoverFront})`,
                }} />
              </div>
            </div>
          </div>

          <div className="first-page" style={{
            top: pagesOffset,
            bottom: pagesOffset,
            right: pagesOffset,

            backgroundImage: `url(${bookPage2})`,

            transform: `translateZ(calc(${bookThickness} - ${bookCoverThickness}))`,
          }} />

          <div className="pages bottom" style={{
            bottom: pagesOffset,
            right: pagesOffset,

            width: `calc(${bookWidth} - ${pagesOffset} - ${bookCoverThickness})`,
            height: `calc(${bookThickness} - (2 * ${bookCoverThickness}))`,

            backgroundImage: `url(${bookPages})`,

            transform: `rotateX(-90deg) translateY(calc(-1 * ${bookCoverThickness}))`,
          }} />
          <div className="pages top" style={{
            top: pagesOffset,
            right: pagesOffset,

            width: `calc(${bookWidth} - ${pagesOffset} - ${bookCoverThickness})`,
            height: `calc(${bookThickness} - (2 * ${bookCoverThickness}))`,

            backgroundImage: `url(${bookPages})`,

            transform: `rotateX(90deg) translateY(calc(1 * ${bookCoverThickness}))`,
          }} />
          <div className="pages right" style={{
            top: pagesOffset,
            bottom: pagesOffset,
            right: pagesOffset,

            width: `calc(${bookThickness} - (2 * ${bookCoverThickness}))`,
            // height: `calc(${bookWidth} - ${pagesOffset} - ${bookCoverThickness})`,

            backgroundImage: `url(${bookPagesVertical})`,

            transform: `rotateY(90deg) translateX(calc(-1 * ${bookCoverThickness}))`,
          }}>
            <div className="image-display" style={{
              height: `calc(${bookThickness} - (2 * ${bookCoverThickness}))`,
              width: `calc(${bookHeight} - (2 * ${pagesOffset}))`,

              transform: `rotate(90deg) translateY(-50%) translateX(calc(-0.5 * ${bookThickness} + ${pagesOffset}))`,
            }} />
          </div>
        </div>
      </div >
      {/* <div id='scroll-content' className='scroll-content' /> */}
    </>
  )
}