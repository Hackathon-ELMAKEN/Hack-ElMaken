"use client";
import React, { useEffect, useState } from "react";
import "./BlogCard.css";
import { RiTimer2Fill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import moment from "moment";
import axios from "axios";

const BlogCard = ({ likedBlogs, blog, handleLikes, handleVuee }) => {
  const [storedLikes, setStoredLikes] = useState([]);

  const [comments, setComments] = useState([]);
  useEffect(() => {
    setStoredLikes(JSON.parse(localStorage.getItem("likedBlogs")));

    axios
      .get(`http://localhost:3001/comments/getAll/${blog.id}`)
      .then((res) => {
        if (res.data.length) {
          setComments(res.data);
          console.log("comment got itt")
        }
      }).catch(err=>console.log(err))
  }, []);

  if (!blog) {
    return null;
  }
  const router = useRouter();
  const formattedDate = moment(blog.createdAt).format("MMMM D, YYYY");
  const handleVue = (id) => {
    axios
      .put(`http://localhost:3001/blogs/updateVue/${id}`)
      .then((res) => handleVuee())
      .catch((err) => console.log(err));
  };

  console.log("card", likedBlogs);

  return (
    <div className="blog-card-cotainer ">
      <img
        onClick={() => {
          router.push(`/Blogs/${blog.id}`, { scroll: true });
          handleVue(blog.id);
        }}
        className="blog-image"
        src={blog.image}
        alt=""
      />
      <div className="blog">
        <p className="blog-date">
          <RiTimer2Fill /> 2 min read // {formattedDate}
        </p>
        <div className="user-details">
          <img src="/profil.png" alt="avatar" />
          <div className="details">
            <p>{blog.author}</p>
            <p>Admin</p>
          </div>
        </div>
        <h1>{blog.title}</h1>
        <p className="content truncate">{blog.description}</p>
        <div className="interaction">
          <div className="comments">
            <p
              onClick={() => handleLikes(blog.id)}
              className={`jaime`}
              style={{
                color: likedBlogs.includes(blog.id) ? "red" : "inherit",
              }}
            >
              {blog.likes} j'aime
            </p>
            <p className="vues">{blog.vues} vues</p>
            <p className="comments">{comments.length} commentaire</p>
            <div className="likes">
              {blog.likes}
              <AiFillHeart style={{ fill: "red" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
