interface Review {
  name: string;
  stars: number;
  date: string;
  text: string;
  url: string;
}

const reviews: Review[] = [
  {
    name: "A.",
    stars: 5,
    date: "September 11, 2024",
    text: "A beautifully written fantasy that pulls you right into its world building from the get go.",
    url: "https://www.goodreads.com/review/show/6712612041",
  },
  {
    name: "G.",
    stars: 4,
    date: "August 29, 2024",
    text: "Thoroughly enjoyable - a complex and enthralling tale, with a complex and fascinating lexicon.",
    url: "https://www.goodreads.com/review/show/6754487159",
  },
  {
    name: "T.",
    stars: 5,
    date: "November 19, 2024",
    text: "A thrilling collection of six tales which will pull you in and keep you there until you finish the last story.",
    url: "https://www.goodreads.com/review/show/7017379176",
  },
  {
    name: "J.",
    stars: 5,
    date: "January 24, 2025",
    text: "Each tale is compelling. The atmospheric descriptions are well done and take the reader on a wonderful journey.",
    url: "https://www.goodreads.com/review/show/7251990737",
  },
  {
    name: "L.",
    stars: 5,
    date: "January 28, 2025",
    text: "I found myself riveted to the story. It's a beautiful read that captured my heart and I will remember this one for a long time.",
    url: "https://www.goodreads.com/review/show/7156037591",
  },
  {
    name: "K.",
    stars: 5,
    date: "November 30, 2025",
    text: "A brilliant weaving of original story with Scottish folklore.",
    url: "https://www.goodreads.com/review/show/6745809385",
  },
  {
    name: "B.",
    stars: 5,
    date: "August 4, 2024",
    text: "This book is complete. Everything is covered. Nothing left unanswered.",
    url: "https://www.goodreads.com/review/show/6717993841",
  },
  {
    name: "M.",
    stars: 5,
    date: "September 6, 2024",
    text: "What a fantastic world Gray has built. It's rich with Scots and Gaelic language and folklore.",
    url: "https://www.goodreads.com/review/show/6797732548",
  },
  {
    name: "D.",
    stars: 5,
    date: "August 12, 2024",
    text: "Grey has an amazing talent for storytelling, for world building, and for characters and situations that pull at your heart.",
    url: "https://www.goodreads.com/review/show/6751928756",
  },
  {
    name: "B.",
    stars: 4,
    date: "August 16, 2024",
    text: 'Tristan Gray has created an enthralling world with a unique mythology in "Call of the Black Wing."',
    url: "https://www.goodreads.com/review/show/6718171109",
  },
  {
    name: "M.",
    stars: 5,
    date: "July 23, 2024",
    text: "These characters are really great; you get a wonderful sense of them in their world and they feel real. This is the kind of fantasy I really enjoy most.",
    url: "https://www.goodreads.com/review/show/6695683236",
  },
  {
    name: "J.",
    stars: 5,
    date: "July 26, 2024",
    text: "Call of the Black Wing is an epic tale steeped in Celtic and Norse mythology.",
    url: "https://www.goodreads.com/review/show/6704368303",
  },
];

export const GoodreadsWidget = () => {
  return (
    <div className="goodreads">
      <a
        className="gr_title"
        href="https://www.goodreads.com/author/show/20606471.Tristan_Gray?utm_medium=api&utm_source=author_widget"
      >
        Goodreads Reviews
      </a>
      <div id="gr_author_widget_1699907161">
        <div className="gr_container">
          <div className="gr_book_container">
            <a
              title="Whispers to a Crow (Tales of the Seann Àite #1)"
              className="gr_book_image"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/55061225-whispers-to-a-crow?utm_medium=api&utm_source=author_widget"
            >
              <img
                alt="Whispers to a Crow"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598076066l/55061225._SY75_.jpg"
              />
            </a>
            <a
              className="gr_book_title"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/55061225-whispers-to-a-crow?utm_medium=api&utm_source=author_widget"
            >
              Whispers to a Crow (#1)
            </a>
            <br />
            <div className="gr_review_stats">
              ratings: 141 <br />
              (avg rating 3.85)
            </div>
          </div>
          <div className="gr_book_container">
            <a
              title="Call of the Black Wing"
              className="gr_book_image"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/216300112-call-of-the-black-wing? utm_medium=api&utm_source=author_widget"
            >
              <img
                alt="Call of the Black Wing"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1720560974i/216300112._SY75_.jpg"
              />
            </a>
            <a
              className="gr_book_title"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/216300112-call-of-the-black-wing?utm_medium=api&utm_source=author_widget"
            >
              Call of the Black Wing
            </a>
            <br />
            <div className="gr_review_stats">
              ratings: 43 <br />
              (avg rating 3.98)
            </div>
          </div>
        </div>
      </div>
      <div id="goodreads-widget">
        <div id="gr_header">
          <h1>
            <a
              rel="nofollow"
              target="_blank"
              href="https://www.goodreads.com/book/show/216300112-call-of-the-black-wing"
            >
              Goodreads reviews for Call of the Black Wing
            </a>
          </h1>
        </div>
        <div className="gr_reviews">
          {reviews.map((r) => (
            <a
              key={r.url}
              className="gr_review"
              href={r.url}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <div className="gr_review_head">
                <span className="gr_reviewer">{r.name}</span>
                <span
                  className="gr_stars"
                  aria-label={`Rating ${r.stars} out of 5`}
                >
                  {"★".repeat(r.stars)}
                  {"☆".repeat(5 - r.stars)}
                </span>
                <span className="gr_date">{r.date}</span>
              </div>
              <p className="gr_review_text">{r.text}</p>
            </a>
          ))}
        </div>
        <div id="gr_footer">
          <a
            className="gr_branding"
            target="_blank"
            rel="nofollow noopener noreferrer"
            href="https://www.goodreads.com/book/show/216300112-call-of-the-black-wing"
          >
            Reviews from Goodreads.com
          </a>
        </div>
      </div>
    </div>
  );
};
