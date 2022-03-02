import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Comments from './Comments';

const Posts = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState([])
    const [user, setUser] = useState([])
    const [selectedUser, setSelectedUser] = useState("")

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {
                setUser(json)
            });
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                setPost(json)
            });

    }, [])
    const userProfile = (userID) => {
        navigate(`/profile/${userID}`);
    }
    const userComments = (postId) => {
        navigate(`/comments/${postId}`);
    }
    return (
        <>

            {
                user && user.map((value, index) => (
                    <div key={index} className="container-box"> 
                        <div className="post-wrapper">
                            <h1 onClick={() => userProfile(value.id)} className="name-title">{`Name : ${value.username}`}</h1>
                            {
                                post && post.map((item, i) => (
                                    <div key ={i} className="titles">
                                        {value.id === item.userId && <h3 onClick={() => userComments(item.id)}><span>Title  :</span> {item.title}</h3>}
                                    </div>
                                )
                                )
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Posts

