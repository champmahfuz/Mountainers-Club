import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Profile.css';
import MessengerCustomerChat from 'react-messenger-customer-chat/lib/MessengerCustomerChat';

const Profile = (props) => {
    // console.log(props);
    const { name, image, age, salary, mountainVisited, nationality } = props.profile;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="profile">

            <div className="profile-img">
                <img src={image} alt="" />
            </div>
            <div className="profile-info">

                <h4>Name: {name}</h4>
                <br />
                <h5>Age: {age}</h5>
                <h5>Nationality:{nationality}</h5>
                <h5>Salary: <span>$</span>{salary}</h5>
                <h5>Total-Climbed: {mountainVisited}</h5>
                <br />
                <button
                    onClick={() => props.handleAddToHire(props.profile)}
                    className="btn-regular">{element} Add to cart</button>

            </div>
            <MessengerCustomerChat
                pageId="101722142602573"
                appId=" 71020473359128"
            />,
        </div>


    );
};

export default Profile;