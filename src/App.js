import React, { Component } from 'react';
import './App.css';
import { getAttendeePhotoAlbum } from "./api";

class App extends Component {

    state = {
        response: 'start',
        images: [
            {
                src: 'https://peopledotcom.files.wordpress.com/2017/11/harry-meghan-15.jpg',
            },
            {
                src: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2018%2F07%2Fthomas-rhett1.jpg',
            },
            {
                src: 'https://as.ftcdn.net/r/v1/pics/ea2e0032c156b2d3b52fa9a05fe30dedcb0c47e3/landing/images_photos.jpg',
            },
            {
                src: 'https://pixel.nymag.com/imgs/fashion/daily/2018/08/17/magazine/tessa-thompson-1.w570.h712.jpg',
            },
            {
                src: 'http://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg',
            },
            {
                src: 'https://www.cdc.gov/stroke/images/family_history.jpg',
            },
            {
                src: 'https://i1.wp.com/thefreshimages.com/wp-content/uploads/2017/08/krishna-images-10.jpg?ssl=1',
            },
            {
                src: 'https://thenypost.files.wordpress.com/2018/06/180608-donald-trump.jpg',
            }
        ]
    };

    async componentDidMount() {
        const eventId = new URL(window.location.href).searchParams.get('event');
        const userId = new URL(window.location.href).searchParams.get('user');
        const response = await getAttendeePhotoAlbum(eventId, userId);
        this.setState({response: JSON.stringify(response, null, 2)});
    }

    render() {
        const { name, profileImageSrc, eventName, images } = this.state;
        return (
          <div className="App">
            <header className="purple-section">
                <img src={profileImageSrc || "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg"} alt="Barak Mazal Tov!" />
                <h1>
                    HI {name || 'YOU'},
                </h1>
                <h3>
                    It was great seeing you at {eventName || 'the thing'}
                </h3>
            </header>
            <section className="gallery">
                <h2>YOU LOOK AMAZING!</h2>
                {images.map((image, i) => <img className="attendee-image" src={image.src} key={i} /> )}
            </section>

            <section className="sponsors">
                <h2>THANKS TO OUR SPONSORS</h2>
                <div className="sponsors-container">
                    <div className="sponsors-row">
                        <img className="sponsor-image" src="https://welcome.bizzabo.com/hs-fs/hub/318095/file-2435692466-png/images/bizzabo-logo.png?t=1537307148049&width=325&name=bizzabo-logo.png" />
                        <img className="sponsor-image" src="http://pngimg.com/uploads/google/google_PNG19644.png" />
                    </div>
                    <div className="sponsors-row">
                        <img className="sponsor-image" src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_1525720131/hubspot.png" />
                        <img className="sponsor-image" src="https://sfi.mechatronics.no/wp-content/uploads/2017/05/github.png" />
                    </div>
                </div>
            </section>

            <section className="next-event">
                <h2>USE PHOTOEVENT FREE FOR YOUR NEXT EVENT</h2>
                <button>TRY NOW</button>
            </section>

          </div>
        );
    }
}

export default App;
