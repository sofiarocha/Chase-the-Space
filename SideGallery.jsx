import React from 'react';

const SideGallery = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-9 align-self-end">
                {/* <figure>
                    <img src='image.jpg' alt='missing' />
                    <figcaption>Caption goes here</figcaption>
                </figure> */}
                {/* eventually do a map over these pictures */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Anne_C._McClain_portrait.jpg/220px-Anne_C._McClain_portrait.jpg" alt="lol"></img>
                <figcaption>Anne C. McClain</figcaption>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/David_Saint-Jacques_official_portrait.jpg/220px-David_Saint-Jacques_official_portrait.jpg" alt="lol"></img>
                <figcaption>David Saint-Jacques</figcaption>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/%27A_Beautiful_Planet%27_World_Premiere_%28NHQ201604160010%29.jpg/220px-%27A_Beautiful_Planet%27_World_Premiere_%28NHQ201604160010%29.jpg" alt="lol"></img>
                <figcaption>Oleg Kononenko</figcaption>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Christina_M._Hammock_portrait.jpg/220px-Christina_M._Hammock_portrait.jpg" alt="lol"></img>
                <figcaption>Christina M. Hammock</figcaption>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tyler_N._Hague_official_portrait.jpg/220px-Tyler_N._Hague_official_portrait.jpg" alt="lol"></img>
                <figcaption>Tyler N. Hague</figcaption>
                <img src="http://en.roscosmos.ru/media/img/foto/ovchinin_alexey.jpg" alt="lol"></img>
                <figcaption>Ovchinin Alexey</figcaption>
                </div>
            </div>
        </div>
    );
};

export default SideGallery;
