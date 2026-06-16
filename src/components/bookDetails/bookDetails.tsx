// import { useEffect } from "react";

import Image from 'next/image';
import "./styles.css";
import { BookType } from "@/types/bookType"
import Book from "../book/Book";
import BookDetailsClient from './bookDetailsClient';

type BookDetailsPropType = {
  book: BookType,
};

export default function BookDetails({
  book,
}: BookDetailsPropType) {
  const praises = [
    {
      quote: 'Lorem ipsum dolor sit amet, Aliquam erat volutpat. Proin accumsan pellentesque urna quis rutrum. Cras nec accumsan massa. Nunc pellentesque massa ut lacus tincidunt, non gravida velit pulvinar.',
      name: 'Lorem ipsum dolor',
      role: 'Lorem ipsum dolor sit amet',
    },
    {
      quote: 'Lorem ipsum dolor sit amet, Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      name: 'Lorem ipsum dolor',
      role: 'Lorem ipsum dolor sit amet',
    },
    {
      quote: 'Lorem ipsum dolor sit amet, Nam sollicitudin gravida lacus, quis tincidunt sapien. In ut sem quis nisl venenatis efficitur. Nulla facilisi. Aenean hendrerit sapien ac purus aliquam molestie.',
      name: 'Lorem ipsum dolor',
      role: 'Lorem ipsum dolor sit amet',
    },
    {
      quote: 'Lorem ipsum dolor sit amet, Vivamus ligula risus, suscipit sed ornare eget, sollicitudin sed erat. Phasellus ultrices augue lobortis nulla varius, at ultrices sapien maximus.',
      name: 'Lorem ipsum dolor',
      role: 'Lorem ipsum dolor sit amet',
    },
    {
      quote: 'Lorem ipsum dolor sit amet, Quisque tincidunt felis sed justo condimentum auctor volutpat in neque. Integer egestas lorem at dui luctus, sed facilisis metus pellentesque.',
      name: 'Lorem ipsum dolor',
      role: 'Lorem ipsum dolor sit amet',
    },
    {
      quote: 'Lorem ipsum dolor sit amet, Nunc ac augue at dolor pellentesque vestibulum pharetra sed purus. Vestibulum rutrum aliquet egestas. Integer sapien massa, fermentum et malesuada sit amet, blandit quis nibh.',
      name: 'Lorem ipsum dolor',
      role: 'Lorem ipsum dolor sit amet',
    },
  ];

  // const { animate = true } = book;
  // useEffect(() => {
  //   const container = document.getElementById(`${book.id}-book-container`);
  //   const card = document.getElementById(`${book.id}-card`);
  //   const bookDetails = document.getElementById(`book-details-${book.id}`);
  //   const bookFrontCover = document.getElementById(`${book.id}-cover-front`);

  //   const handleScroll = () => {
  //     if (bookDetails) {
  //       const bookDetailsBounding = bookDetails.getBoundingClientRect();
  //       const { top } = bookDetailsBounding;

  //       let OldValue = 0 - top;

  //       let OldMax = bookDetails.clientHeight - window.innerHeight;
  //       OldMax = 3 * OldMax / 4;
  //       var OldMin = 0;
  //       var OldRange = (OldMax - OldMin);

  //       if (OldValue < OldMin) OldValue = OldMin;
  //       if (OldValue > OldMax) OldValue = OldMax;

  //       var NewMin = 30; // 0;
  //       var NewMax = 45; // 15;
  //       var NewRange = (NewMax - NewMin);

  //       var NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin;

  //       if (container) {
  //         container.style.paddingLeft = `${NewValue}%`;
  //       }

  //       OldMin = 0;
  //       OldRange = (OldMax - OldMin);

  //       const NewRotateZ = -30

  //       NewMin = 0;
  //       NewMax = 90;
  //       NewRange = (NewMax - NewMin);

  //       NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin;
  //       const NewRotateX = Math.abs(NewValue - (NewMax / 2));

  //       NewMin = 0;
  //       NewMax = 360;
  //       NewRange = (NewMax - NewMin);

  //       var NewRotateY = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin;
  //       NewRotateY = 0 - NewRotateY;

  //       if (card) {
  //         card.style.transform = `rotateY(${NewRotateY}deg) rotateX(${NewRotateX}deg) rotateZ(${NewRotateZ}deg)`;
  //         card.style.transition = `none`;
  //       }

  //       if (animate) {
  //         NewMin = 0;
  //         NewMax = 170;
  //         NewRange = (NewMax - NewMin);

  //         NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin;

  //         if (bookFrontCover) {
  //           bookFrontCover.style.transform = `rotateY(-${NewValue}deg)`;
  //         }
  //       }
  //     }
  //   }

  //   window?.addEventListener("scroll", handleScroll, true)

  //   return (() => {
  //     window.removeEventListener("scroll", handleScroll);
  //   });
  // }, [animate]);

  return (
    <>
      <div id={`book-details-${book.id}`} className="book-details">
        <div className="back-button-wrapper">
          <a href="/" className="back-button" rel="noreferrer noopener">
            <Image
              src="/assets/svg/back.svg"
              alt="Barns & Nobles"
              width={16}
              height={16}
              unoptimized
            />
          </a>
        </div>
        <div id={`${book.id}-details`} className="details-section">
          <div id={`${book.id}-preview`} className="preview-section">
            <div id={`${book.id}-details`} className="details-section absolute-poistioned">
              <div id={`${book.id}-preview`} className="preview-section">
                <div className="book-preview">
                  <Book index={0} book={book} show3DPreview={true} />
                </div>
              </div>
            </div>
          </div>
          <div id={`${book.id}-description`} className="description-section">
            <div className="header" style={{
              display: 'flex',
              alignItems: 'center',
            }}>
              <div className="mobile-preview-section">
                <Book index={0} book={{ ...book, id: `${book.id}-static` }} show3DPreview={true} />
              </div>
              <div className="header-title-section">
                <div id={`${book.id}-book-title`} className="title">
                  {book.title}
                </div>
                <div id={`${book.id}-book-author`} className="author">
                  {book.author}
                </div>
              </div>
            </div>
            <div id={`${book.id}-book-summary`} className="summary">
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor
                rhoncus purus id lacinia. Etiam non accumsan elit. Aenean pretium augue vitae
                mollis fringilla. Cras ut interdum orci. Etiam at lacinia urna, quis
                condimentum metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse et tellus luctus, ullamcorper nisi vitae, porttitor ante.
                Aliquam feugiat vestibulum nisi. Nulla volutpat luctus sagittis.
                <br />
                <br />
                Aliquam vel enim et nisl aliquet convallis at sit amet justo. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Mauris in orci mollis, mollis nibh vitae, feugiat purus.
              </p>
            </div>

            <div id={`${book.id}-buy-options`} className="buy-options">
              <a>
                <div>
                  <p>Purchase on Stripe $30</p>
                </div>
                <div className="buy-icon">
                  <div>
                    <Image
                      src="/assets/svg/arrow-out.svg"
                      alt="Barns & Nobles"
                      width={16}
                      height={16}
                      unoptimized
                    />
                  </div>
                </div>
              </a>
              <a>
                <div>
                  <p>Purchase on Amazon $30</p>
                </div>
                <div className="buy-icon">
                  <div>
                    <Image
                      src="/assets/svg/arrow-out.svg"
                      alt="Barns & Nobles"
                      width={16}
                      height={16}
                      unoptimized
                    />
                  </div>
                </div>
              </a>
              <a>
                <div>
                  <p>Purchase on Barns & Noble $30</p>
                </div>
                <div className="buy-icon">
                  <div>
                    <Image
                      src="/assets/svg/arrow-out.svg"
                      alt="Barns & Nobles"
                      width={16}
                      height={16}
                      unoptimized
                    />
                  </div>
                </div>
              </a>
            </div>

            <div id={`${book.id}-author-details`} className="author-details">
              <div id={`${book.id}-author-label`} className="author-details-label">
                Author
              </div>
              <div id={`${book.id}-author-bio`} className="author-bio">
                <p>
                  Lorem ipsum dolor sit amet, Integer dictum et metus nec dignissim. Duis sed lectus
                  sollicitudin, euismod nisi et, bibendum lacus. Etiam lorem diam, malesuada non
                  consectetur a, viverra vitae neque. Sed quis ligula et felis viverra auctor.
                  Nullam sagittis rhoncus dolor id feugiat. Nullam urna sapien, posuere et
                  facilisis sed, fermentum eu nunc. Suspendisse nibh enim, pretium in nulla
                  sed, tincidunt tincidunt mi.
                  <br />
                  <br />
                  Quisque venenatis tincidunt mattis. Pellentesque eget porttitor leo. Ut lobortis,
                  nulla dignissim vehicula lobortis, ex eros dictum enim, sit amet sollicitudin
                  massa ante nec nunc. Aenean finibus mauris vitae diam tempor aliquet. Integer
                  porta arcu vitae nisl tincidunt, in facilisis arcu sollicitudin. Suspendisse
                  sit amet neque diam. Proin tortor erat, interdum et faucibus quis, aliquet
                  eget felis.
                </p>
              </div>
            </div>

            <div id={`${book.id}-author-website`} className="author-website">
              <a>
                Website
              </a>
            </div>


            <div id={`praise-details-${book.id}`} className="praise-section">
              <div className="praise-label">Praise</div>
              <div id="praise-carousel" className="praise-carousel">
                {praises.map((praise, praiseIndex) => (
                  <div className="praise-card" key={praiseIndex}>
                    <blockquote className="praise-quote">
                      <p>
                        {praise.quote}
                      </p>
                    </blockquote>
                    <div className="praise-name">
                      <p>
                        {praise.name}
                      </p>
                    </div>
                    <div className="praise-role">
                      <p>
                        {praise.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
        {/* praise */}
      </div>
      <BookDetailsClient book={book} />
    </>
  )
}