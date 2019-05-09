import React from 'react';
import Profile from './Profile';

const profiles = [
    {name: "Isabella Fry", photo: "https://res.cloudinary.com/dl2ribpco/image/upload/v1557245379/ChaseTheSpace/linkedin_ekkfus.jpg", description: "Passionate Web Developer ", linkedin: "https://www.linkedin.com/in/isabella-fry-5a1618182/", github: "https://github.com/dragonslayer77"},
    {name: "Sofia Rocha", photo: "https://res.cloudinary.com/dl2ribpco/image/upload/v1557245473/ChaseTheSpace/IMG_2582_iuu1vw.jpg", description: "Passionate Web Developer ", linkedin: "https://www.linkedin.com/in/sofia-ce-rocha/", github: "https://github.com/sofiarocha"},
    {name: "Maria Ferreira", photo: "https://res.cloudinary.com/dl2ribpco/image/upload/v1557246146/ChaseTheSpace/63844_135532176494742_6608009_n_zlblr0.jpg", description: "Passionate Web Developer ", linkedin: "https://www.linkedin.com/in/cristina-ferreira-4bb0a4184?trk=public_profile_settings_edit_profile_content&originalSubdomain=pt", github: "https://github.com/cristinaferreira"}
];

const AboutUs = () => {
    return (
        <div className="container aboutUsComponent">
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
    );
};

export default AboutUs;

