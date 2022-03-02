import { useState, useEffect } from "react";
import { useParams } from 'react-router';


const Profile = () => {
    const [userList, setUserList] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((json) => {
                setUserList(json)
            });
    }, [id])

    return (
        <div className="container-box">
            <h1 align="center">Profile</h1>
            {
                userList &&
                <div className="profile-wrapper">
                    <h1> <span>Name : </span> {userList.name}</h1>
                    <h1><span> Email : </span>{userList.email}</h1>
                    <h1><span>Website :</span>  {userList.website}</h1>
                    <div className="detail-box">
                        <div>
                            <h1>Company Details :</h1>
                        </div>
                        <div>
                            <h3>Name :  {userList.company.name}</h3>
                            <h3>CatchPhrase:  {userList.company.catchPhrase}</h3>
                            <h3>Bs  :  {userList.company.bs}</h3>
                        </div>
                    </div>

                </div>
            }

        </div>
    )

}
export default Profile
