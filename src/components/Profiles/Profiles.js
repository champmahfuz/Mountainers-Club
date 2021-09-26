import React, { useEffect } from 'react';
import { useState } from 'react';
import Hire from '../Hire/Hire';
import Profile from '../Profile/Profile';
import './Profiles.css';

const Profiles = () => {
    const [profiles, SetProfiles] = useState([]);
    const [hire, setHire] = useState([]);

    useEffect(() => {
        fetch('./profiles.JSON')
            .then(res => res.json())
            .then(data => SetProfiles(data));

    }, []);

    const handleAddToHire = (profile) => {
        const newHire = [...hire, profile];
        setHire(newHire);
    }
    return (
        <div>
            <div className="profile-container">
                <div className="person-container">

                    {
                        profiles.map(profile => <Profile
                            key={profile.key}
                            profile={profile}
                            handleAddToHire={handleAddToHire}
                        >

                        </Profile>)
                    }
                </div>
                <div className="hire-container">
                    <section className="hire">
                        <Hire hire={hire}></Hire>
                    </section>


                </div>
            </div>
        </div>
    );
};

export default Profiles;