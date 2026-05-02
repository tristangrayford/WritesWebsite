import arrow from "../../images/Arrow.png";

interface BlogPost {
  title: string;
  url: string;
}

const posts: BlogPost[] = [
  {
    title: "Why Was Harry Potter So Popular?",
    url: "https://ko-fi.com/post/Why-Was-Harry-Potter-So-Popular-D1D11WP3GH",
  },
  {
    title: "GameDev Rejects GenAI",
    url: "https://ko-fi.com/post/GameDev-Rejects-GenAI-R6R51TB7EH",
  },
  {
    title: "Bringing Call of the Black Wing to Audiobook",
    url: "https://ko-fi.com/post/Bringing-Call-of-the-Black-Wing-to-Audiobook-B0B51PV0L7",
  },
  {
    title: "The GenAI CEOs are Lying to Us",
    url: "https://ko-fi.com/post/The-GenAI-CEOs-are-Lying-to-Us-P5P51P5CBP",
  },
  {
    title: "GenAI is Coming for Your Brain",
    url: "https://ko-fi.com/post/GenAI-is-Coming-for-Your-Brain-A0A11FFDY2",
  },
  {
    title: "Being a Games Master Means Being the Rules",
    url: "https://ko-fi.com/post/Being-a-Games-Master-means-being-the-rules-R6R418D90T",
  },
  {
    title: "What is a Woman?",
    url: "https://ko-fi.com/post/What-is-a-woman-V7V51265SJ",
  },
];

export const BlogPage = () => {
  return (
    <div className="blog-page">
      <div className="half">
        <img className="arrow arrow-one" src={arrow} alt="Arrow" />
        <h1>
          <a href="https://ko-fi.com/tristangray/posts">Link to Blog</a>
        </h1>
        <img className="arrow arrow-two" src={arrow} alt="Arrow" />
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.url}>
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
