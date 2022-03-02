import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router';

// import { useEffect } from 'react/cjs/react.development';

const Comments = (props) => {
    const [comments, setComments] = useState([])
    const navigate = useNavigate();


    // const { item, comments } = props;
    const { postId } = useParams();


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then((response) => response.json())
            .then((json) => {
                setComments(json)

            });
    }, [])
    const backToPost = ()=>{
        navigate('/')
    }
    return (
        <div className='container-box'>
        <button className="btn btn-primary" onClick={backToPost}>Previous</button>

            <h1 align="center">Comments</h1>

            {
                comments && comments.map((elem, i) => (
                    <div key={i}>

                        {postId == elem.postId &&

                            <div className="profile-wrapper">
                                <h1><span>Subject of comment  : </span>{elem.name}</h1>
                                <h1><span>Comment body  : </span>{elem.body}</h1>
                                <h1><span>Email contact of commenter  :</span> {elem.email}</h1>
                            </div>

                        }
                    </div>
                ))
            }
          
        </div>
    )
}

export default Comments

