"use client"
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faHeart } from '@fortawesome/free-solid-svg-icons';
import "./cards.css"
import TimeAgo from 'javascript-time-ago';
import HoverVideoPlayer from 'react-hover-video-player';
import en from 'javascript-time-ago/locale/en'
import { useRouter } from 'next/navigation';
import axios from 'axios';
const cards = () => {
    const [refreshLikes, setRefreshLikes] = useState(false)
    const [data, setData] = useState(null)
    const router = useRouter()
    const [likedBlogs, setLikedBlogs] = useState([]);
    const [timeAgo, setTimeAgo] = useState(null)
    useEffect(() => {
        const storedLikedBlogs =
            JSON.parse(localStorage.getItem("likedProjects")) || [];
        setLikedBlogs(storedLikedBlogs);
        TimeAgo.addDefaultLocale(en)
        const timeAgo = new TimeAgo('en-US')
        setTimeAgo(timeAgo)
        axios.get("http://localhost:3001/projects/getAll")
            .then((res) => setData(res.data))
    }, [refreshLikes])
    const handleVue = (id) => {
        axios
            .put(`http://localhost:3001/projects/updateVue/${id}`)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    };
    const handleLikes = (id) => {
        if (!likedBlogs.includes(id)) {
            axios
                .put(`http://localhost:3001/projects/updateLikes/${id}`, { like: "+ 1" })
                .then((res) => {

                    setLikedBlogs((prevLikedBlogs) => [...prevLikedBlogs, id]);

                    // Now, after the state is updated, set local storage
                    const updatedLikedBlogs = [...likedBlogs, id];
                    localStorage.setItem("likedProjects", JSON.stringify(updatedLikedBlogs));
                })
                .catch((err) => console.log(err));
        } else {
            axios
                .put(`http://localhost:3001/projects/updateLikes/${id}`, { like: "- 1" })
                .then((res) => {

                    setLikedBlogs((prevLikedBlogs) => {
                        return prevLikedBlogs.filter(like => like !== id)
                    });

                    // Now, after the state is updated, set local storage
                    const updatedLikedBlogs = likedBlogs.filter(like => like !== id)
                    localStorage.setItem("likedProjects", JSON.stringify(updatedLikedBlogs));
                })
                .catch((err) => console.log(err));
        }
    };



    return (<div className='cs-container'>
        <div className='cards-section-inner-container'>
            {data?.map((video, i) => {
                let newC = new Date(video.createdAt)
                return (<div className='one-video' key={i} >
                    <HoverVideoPlayer onClick={() => { router.push(`/Recent-Projects/${video.id}`, { scroll: true }); handleVue(video.id) }} className='projects-video-player'
                        videoSrc={video.demo}
                        overlayTransitionDuration={100}
                        videoStyle={{ cursor: "pointer", borderRadius: 20 }}
                        muted={false}
                    />
                    <span className='video-info'>
                        <span className='project-name'>{video.title}</span>

                        <span className='project-timeAgo'>{timeAgo && timeAgo.format(newC.getTime())}</span>
                    </span>
                    <span className='more-details'> <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#ffffff", }} />Plus de détails</span>
                    <p className='desc-demo'>{video.description}</p>
                    {likedBlogs.includes(video.id) ? (<div className='like-button' onClick={() => { handleLikes(video.id); setRefreshLikes(!refreshLikes) }
                    } ><FontAwesomeIcon className="heart" beat icon={faHeart} style={{
                        color: "red", cursor: "pointer"
                    }} /></div>) : (<div className='like-button' onClick={() => { handleLikes(video.id); setRefreshLikes(!refreshLikes) }} ><FontAwesomeIcon className="heart" icon={faHeart} /></div>)}
                    {console.log(video.likes)}
                    <div className="like-rp-container">{video.likes} <span className="like-rp">j'aimes</span></div>
                </div>
                )
            }
            )}

        </div>
    </div>
    )
}

export default cards