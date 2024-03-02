import "./blogssection.css";

import Blog from "../blog/blog";
import Blog1 from "../../assets/blog1.png";
import Blog2 from "../../assets/blog2.png";
import Blog3 from "../../assets/blog3.png";

const BlogsSection = () => {
  let title = "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.";
  let text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget sodales ut ac diam, turpis rutrum sit pulvinar. Est, aliquam quis sed nam.";
  const info = "By PrashDesign on March 12, 2022";
  return (
    <div id="blog_section">
      <h4>News and Updates</h4>
      <p id="blog_caption">Blog Posts</p>
      <div id="blogs_grid">
        <Blog
          imageSource={Blog1}
          title={title}
          text={text}
          info={info}
          key="1"
        ></Blog>
        <Blog
          imageSource={Blog2}
          title={title}
          text={text}
          info={info}
          key="2"
        ></Blog>
        <Blog
          imageSource={Blog3}
          title={title}
          text={text}
          info={info}
          key="3"
        ></Blog>
      </div>
    </div>
  );
};

export default BlogsSection;
