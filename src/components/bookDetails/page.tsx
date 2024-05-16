import { useEffect } from "react";

import { BookType } from "@/types/bookType"
import Book from "../book/Book";

import "./bookDetailsStyles.css";

type BookDetailsPropType = {
  book: BookType,
  bookIndex: number,
};

export default function BookDetails({
  book,
  bookIndex,
}: BookDetailsPropType) {
  useEffect(() => {
    const container = document.getElementById(`${book.id}-book-container`);
    const card = document.getElementById(`${book.id}-card`);
    const bookDetails = document.getElementById(`book-details-${book.id}`);
    const bookFrontCover = document.getElementById(`${book.id}-cover-front`);

    window?.addEventListener("scroll", () => {
      if (bookDetails) {
        const bookDetailsBounding = bookDetails.getBoundingClientRect();
        const { top } = bookDetailsBounding;

        let OldValue = 0 - top;
        if (bookIndex > 0) {
          OldValue = OldValue + (window.innerHeight / 3);
        }

        const OldMax = bookDetails.clientHeight / 2;
        var OldMin = 0;
        var OldRange = (OldMax - OldMin);

        if (OldValue < OldMin) OldValue = OldMin;
        if (OldValue > OldMax) OldValue = OldMax;

        var NewMin = 0;
        var NewMax = 10;
        var NewRange = (NewMax - NewMin);

        var NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin;

        // if (container) {
        //   container.style.paddingLeft = `${NewValue}%`;
        // }

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
    }, true)

    // return(() => {
    //   page?.removeEventListener()
    // })
  }, []);

  return (
    <div id={`book-details-${book.id}`} className="book-details">
      <div id={`${book.id}-details`} className="details-section absolute-poistioned">
        <div id={`${book.id}-preview`} className="preview-section">
          <div className="book-preview">
            <Book book={book} show3DPreview={true} />
          </div>
        </div>
      </div>

      <div id={`${book.id}-details`} className="details-section">
        <div id={`${book.id}-preview`} className="preview-section" />
        <div id={`${book.id}-description`} className="description-section">
          <div id={`${book.id}-book-title`} className="title">
            Poor Charlie’s Almanack: The Essential Wit and Wisdom of Charles T. Munger
          </div>
          <div id={`${book.id}-book-author`} className="author">
            Edited by Peter D. Kaufman
          </div>
          <div id={`${book.id}-book-summary`} className="summary">
            <p>
              “Spend each day trying to be a little wiser than you were when you woke up,” Charlie Munger advises in Poor Charlie’s Almanack. Originally published in 2005, this compilation of 11 talks by the legendary Berkshire Hathaway vice-chairman has become a touchstone for a generation of investors and entrepreneurs. Delivered with Munger’s characteristic rhetorical flair, Poor Charlie’s Almanack draws on his encyclopedic knowledge of business, finance, history, philosophy, physics, and ethics to introduce the latticework of mental models that underpin his rational and rigorous approach to life, learning, and decision-making. It is an essential volume for any reader seeking to go to bed a little wiser than when they woke up. This abridged edition features a new foreword by Stripe cofounder and president John Collison.
            </p>
          </div>

          <div id={`${book.id}-buy-options`} className="buy-options">
            <a>
              <div>
                <p>Purchase on Stripe $30</p>
              </div>
              <div className="buy-icon">
                <div>
                  icon
                </div>
              </div>
            </a>
            <a>
              <div>
                <p>Purchase on Stripe $30</p>
              </div>
              <div className="buy-icon">
                <div>
                  icon
                </div>
              </div>
            </a>
            <a>
              <div>
                <p>Purchase on Stripe $30</p>
              </div>
              <div className="buy-icon">
                <div>
                  icon
                </div>
              </div>
            </a>
          </div>

          <div id={`${book.id}-author-details`} className="author-details">
            <div id={`${book.id}-author-label`} className="author-details-label">
              Authors
            </div>
            <div id={`${book.id}-author-bio`} className="author-bio">
              <p>
                Charles T. Munger (1924–2023) was an investor, businessman, and former real estate attorney. He was the vice-chairman of Berkshire Hathaway, the multinational conglomerate controlled by Warren Buffett. He was chairman of Wesco Financial Corporation from 1984 to 2011. He was also chairman of the Daily Journal Corporation and a director of Costco Wholesale Corporation.

                Peter D. Kaufman is the chairman and CEO of Glenair, Inc. He was a longtime director of Wesco Financial Corporation and is a former director of Daily Journal Corporation. In 2005, he edited and published Poor Charlie’s Almanack, a compilation of talks given by his longtime friend Charlie Munger.
              </p>
            </div>
          </div>

          <div id={`${book.id}-author-website`} className="author-website">
            <a>
              Website
            </a>
          </div>

        </div>
      </div>
      <div id={`praise-details-${book.id}`} className="praise-section">
      </div>
    </div>
  )
}