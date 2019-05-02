import React from 'react';
import Profile from './Profile';

const profiles = [
    {name: "Isabella Fry", photo: "", description: "Passionate Web Developer ", linkedin: "", github: ""},
    {name: "Sofia Rocha", photo: "", description: "Passionate Web Developer ", linkedin: "", github: ""},
    {name: "Maria Ferreira", photo: "", description: "Passionate Web Developer ", linkedin: "", github: ""}
];

const AboutUs = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {profiles.map(profile => (
                        <Profile 
                            key={profile.name} 
                            name={profile.name} 
                            photo={profile.photo}
                            description={profile.description}
                            linkedin={profile.linkedin}
                            github={profile.github}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

