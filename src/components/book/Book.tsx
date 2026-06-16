// "use client";

import React from 'react';
import Image from 'next/image';
import './styles.css';
import { BookType } from "../../types/bookType";

export type BookPropType = {
  index: number,
  show3DPreview: boolean,
  book: BookType,
};

export default function Book({
  index,
  show3DPreview,
  book,
}: BookPropType) {
  const {
    id: bookId,

    height: bookHeight,
    widthRatio,
    coverThickness: bookCoverThickness,
    thicknessRatio,
    pagesOffset,
    insideCoverColor,

    coverFront: bookCoverFront,
    coverSpine: bookCoverSpine,
    coverBack: bookCoverBack,
    page1: bookPage1,
    page2: bookPage2,
    pages: bookPages,
    pagesVertical: bookPagesVertical,
  } = book;

  const bookWidth = `calc(${bookHeight} * ${widthRatio})`;
  const bookThickness = `calc(${bookHeight} * ${thicknessRatio})`;

  return (
    <React.Fragment key={`book-${bookId}`}>
      <div
        id={`${bookId}-book-container`}
        className="container"
        style={{
          width: bookThickness,
          height: bookHeight,
        }}
      >
        <div id={`${bookId}-card`} className="book-base" style={{
          height: bookHeight,
          width: bookWidth,

          transform: show3DPreview
            ? 'rotateX(50deg) rotateZ(-35deg)'
            : 'rotateX(0deg) rotateY(90deg) translateY(0px)'
        }}>
          <div className="book-cover back bottom" style={{
            width: bookWidth,
            height: bookHeight,
          }}>
            <div className="position-relative">
              {show3DPreview && (
                <div className="cover-display" style={{
                  backgroundImage: `url(${bookCoverBack})`,
                }} />
              )}
              <div className="sides vertical top" style={{
                height: bookCoverThickness,
              }}>
                <div className="image-display" style={{
                  background: insideCoverColor,
                }} />
              </div>
              {show3DPreview && (
                <>
                  <div className="sides vertical bottom" style={{
                    height: bookCoverThickness,
                  }}>
                    <div className="image-display" style={{
                      backgroundImage: `url(${bookCoverBack})`,
                    }} />
                  </div>
                  <div className="sides horizontal right" style={{
                    width: bookCoverThickness,
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
                </>
              )}
            </div>
          </div>

          <div className="spine inside" style={{
            left: bookCoverThickness,

            width: `calc(${bookThickness} - ${bookCoverThickness})`,
            height: bookHeight,
          }}>
            <div className="position-relative">
              {show3DPreview && (
                <div className="inside image-display" style={{
                  background: insideCoverColor,
                }} />
              )}
              <div className="sides vertical top" style={{
                height: bookCoverThickness,

                background: insideCoverColor,
              }}>
              </div>
              {show3DPreview && (
                <>
                  <div className="sides vertical bottom" style={{
                    height: bookCoverThickness,

                    backgroundImage: `url(${bookCoverSpine})`,
                  }} />
                  <div className="sides horizontal right" style={{
                    width: bookCoverThickness,

                    backgroundImage: `url(${bookCoverSpine})`,
                  }} />
                </>
              )}
              <div className="pane top" style={{
                transform: `translateZ(${bookCoverThickness})`,
                overflow: show3DPreview ? 'hidden' : 'visible',
              }}>
                <Image
                  height={500}
                  width={500 * (book?.thicknessRatio ?? 1)}
                  src={bookCoverSpine}
                  alt={book?.title ?? `book-${index}`}
                  className="cover-display"
                />
              </div>
            </div>
          </div>

          <div className="book-cover front bottom" style={{
            transform: `translateZ(calc(${bookThickness} - ${bookCoverThickness}))`,

            width: bookWidth,
            height: bookHeight,
          }}>
            <div id={`${bookId}-cover-front`} className="position-relative">
              {show3DPreview && (
                <div className="inside image-display" style={{
                  backgroundImage: `url(${bookPage1})`,
                }} />
              )}
              <div className="sides vertical top" style={{
                height: bookCoverThickness,
              }}>
                <div className="image-display" style={{
                  background: insideCoverColor,
                }} />
              </div>
              {show3DPreview && (
                <>
                  <div className="sides vertical bottom" style={{
                    height: bookCoverThickness,
                  }}>
                    <div className="image-display" style={{
                      backgroundImage: `url(${bookCoverFront})`,
                    }} />
                  </div>
                  <div className="sides horizontal left" style={{
                    width: bookCoverThickness,
                  }}>
                    <div className="image-display" style={{
                      backgroundImage: `url(${bookCoverSpine})`,
                    }} />
                  </div>
                  <div className="sides horizontal right" style={{
                    width: bookCoverThickness,
                  }}>
                    <div className="image-display" style={{
                      backgroundImage: `url(${bookCoverFront})`,
                    }} />
                  </div>
                  <div className="pane top" style={{
                    transform: `translateZ(${bookCoverThickness})`,
                  }}>
                    <div className="cover-display" style={{
                      backgroundImage: `url(${bookCoverFront})`,
                    }} />
                  </div>
                </>
              )}
            </div>
          </div>

          {show3DPreview && (
            <>
              <div className="first-page" style={{
                top: pagesOffset,
                bottom: pagesOffset,
                right: pagesOffset,

                backgroundImage: `url(${bookPage2})`,

                transform: `translateZ(calc(${bookThickness} - ${bookCoverThickness} + 1px))`,
              }} />
              <div className="second-page" style={{
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
            </>
          )}
          <div className="pages top" style={{
            top: pagesOffset,
            right: pagesOffset,

            width: `calc(${bookWidth} - ${pagesOffset} - ${bookCoverThickness})`,
            height: `calc(${bookThickness} - (2 * ${bookCoverThickness}))`,

            backgroundImage: `url(${bookPages})`,

            transform: `rotateX(90deg) translateY(calc(1 * ${bookCoverThickness}))`,
          }} />
          {show3DPreview && (
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
          )}
        </div>
      </div >
    </React.Fragment>
  )
}