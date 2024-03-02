import "./blog.css";

function Blog({ imageSource, title, text, info }) {
  return (
    <div className="blog">
      <img src={imageSource} alt="card" />
      <h5>{title}</h5>
      <p id="blog_info">{info}</p>
      <p id="blog_text">{text}</p>
    </div>
  );
}

export default Blog;
