"use client";
import React, { useState, useEffect } from "react";
import "./one.css";
import { RiTimer2Fill } from "react-icons/ri";
import { LuMoreVertical } from "react-icons/lu";
import { EditorState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import moment from "moment";
import Header from "../../../components/blogsHeader/Header.jsx";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
import {useRouter } from "next/navigation";

const getBlog = (id) => {
  return fetch(`http://localhost:3001/blogs/getOne/${id}`).then((res) =>
    res.json()
  );
};
const getComments = (blogId) => {
  return fetch(`http://localhost:3001/comments/getAll/${blogId}`).then((res) =>
    res.json()
  );
};

const addComment = (blogId, content, userId) => {
  return fetch(`http://localhost:3001/comments/${blogId}/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  }).then((res) => res.json());
};

const page = ({ params }) => {
  const [blog, setBlog] = useState(null);
  const [Comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [location,setlocation]=useState(null)
  const cookie = new Cookies();

  const router = useRouter();
  
  useEffect(() => {
    sessionStorage.setItem("navbar","nested")
    if (params.idd) {
      getBlog(params.idd).then((fetchedBlog) => {
        setBlog(fetchedBlog);
      });
      getComments(params.idd)
        .then((fetchedComments) => {
          setComments(fetchedComments);
        })
        .catch((err) => console.log(err));
    }
    const token = cookie.get("userInfo");

    if (token) {
      const decoded = jwt_decode(token);
      setCurrentUser(decoded);
    }
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("navbar");
    };
  
    window.addEventListener("beforeunload", handleBeforeUnload);
  
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [params.idd, refresh]);
  if (comments.length) {
    console.log("rafik", comments);
  }
  if (!blog) {
    console.log("yess");
    return null;
  }
  const contentState = convertFromRaw(JSON.parse(blog.content));
  const editorState = EditorState.createWithContent(contentState);
  const formattedDate = moment(blog.createdAt).format("MMMM D, YYYY");
  const handleCommentSubmit = async () => {
    if (Comment.trim() !== "") {
      const newComment = await addComment(blog.id, Comment, currentUser.id);

      setComment("");
      setRefresh(!refresh);
    }
    
  };

  const handleLogin = () => {
    const location=window.location.href
    sessionStorage.setItem("previousLocation", location);

    router.push(`/Login`)
  };

  return (
    <div className="one-post">
      <div className="one-post-container">
        <div className="admin-details">
          <div className="user-info">
            <img src="/profil.png" alt="avatar" />
            <div className="details">
              <p>{blog.author}</p>
              <p>Admin</p>
              <div className="blog-date">
                <RiTimer2Fill /> 2 min read // {formattedDate}
              </div>
            </div>
          </div>
          <LuMoreVertical />
        </div>
        <h1 className="blog-title">{blog.title}</h1>
        <img className="blog-imagee" src={blog.image} alt="" />
        <div className="content">
          {blog.description}
          <Editor editorState={editorState} toolbarHidden readOnly />
        </div>
      </div>
      <div className="comment-section">
        <input
          type="text"
          placeholder="Laissez un commentaire..."
          value={Comment}
          onChange={(e) => setComment(e.target.value)}
        />
        {currentUser ? (
          <button onClick={handleCommentSubmit}>Commenter</button>
        ) : (
          <button
            onClick={handleLogin
              
            }
          >
            Se connecter
          </button>
        )}
      </div>
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={comment.id} className="comment">
            <img src="../profil.png" alt="Avatar" className="avatar" />
            <div className="comment-content">
              <div className="comment-header">
                <div>
                  <p className="comment-name">
                    {comment["User"]["firstName"]} {comment["User"].lastName}
                  </p>
                  <p>{comment.content}</p>
                </div>
              </div>
            </div>
            <p className="comment-name">
              {moment(comment.createdAt).fromNow()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
