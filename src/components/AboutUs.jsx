import React from 'react';
import Profile from './Profile';

const profiles = [
    {name: "Isabella Fry", photo: "https://via.placeholder.com/150", description: "Passionate Web Developer ", linkedin: "", github: ""},
    {name: "Sofia Rocha", photo: "https://via.placeholder.com/150", description: "Passionate Web Developer ", linkedin: "", github: ""},
    {name: "Maria Ferreira", photo: "https://via.placeholder.com/150", description: "Passionate Web Developer ", linkedin: "", github: "https://github.com/cristinaferreira"}
];

const AboutUs = () => {
    return (
        <div className="container aboutUsComponent">
            <div className="row aboutUsComponent">
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
    );
};

export default AboutUs;

