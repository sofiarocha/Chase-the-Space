import React, { Component } from 'react';
import Lightbox from 'react-images';

const images = [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Anne_C._McClain_portrait.jpg/220px-Anne_C._McClain_portrait.jpg',
        title: 'Anne C. McClain',
        description: 'image description'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/David_Saint-Jacques_official_portrait.jpg/220px-David_Saint-Jacques_official_portrait.jpg',
        title: 'David Saint-Jacques',
        description: 'image description'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/%27A_Beautiful_Planet%27_World_Premiere_%28NHQ201604160010%29.jpg/220px-%27A_Beautiful_Planet%27_World_Premiere_%28NHQ201604160010%29.jpg',
        title: 'Oleg Kononenko',
        description: 'image description'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Christina_M._Hammock_portrait.jpg/220px-Christina_M._Hammock_portrait.jpg',
        title: 'Christina M. Hammock',
        description: 'image description'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tyler_N._Hague_official_portrait.jpg/220px-Tyler_N._Hague_official_portrait.jpg',
        title: 'Tyler N. Hague',
        description: 'image description'
      },
      {
        src: 'http://en.roscosmos.ru/media/img/foto/ovchinin_alexey.jpg',
        title: 'Alexey Ovchinin',
        description: 'image description'
      }
      
    ];

class SideGallery extends Component {
    state = {
        lightboxIsOpen: false
    }
    render(){
        return (
            <div className="container asside">
                <div className="row">
                    <div className="col-12">
                    {images.map(image =>
                        <div>
                            <img src={image.src} alt='missing' />
                            <figcaption>{image.description}</figcaption>
                        </div>
                        )}
                    </div>
                </div>
                <Lightbox
                    images={[
                        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Anne_C._McClain_portrait.jpg/220px-Anne_C._McClain_portrait.jpg' },
                        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Anne_C._McClain_portrait.jpg/220px-Anne_C._McClain_portrait.jpg' }
                    ]}
                    isOpen={this.state.lightboxIsOpen}
                    onClickPrev={this.gotoPrevLightboxImage}
                    onClickNext={this.gotoNextLightboxImage}
                    onClose={this.closeLightbox}
                />
            </div>
        );
    }
};

export default SideGallery;
