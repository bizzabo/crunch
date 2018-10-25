import React, { Component } from 'react';
import './App.css';
import { getAttendeePhotoAlbum } from "./api";

class App extends Component {

    state = {};

    async componentDidMount() {
        const eventId = new URL(window.location.href).searchParams.get('event');
        const userId = new URL(window.location.href).searchParams.get('user');
        const response = await getAttendeePhotoAlbum(eventId, userId);
        this.setState({
            images: response.attendeePhotos,
            eventName: response.event.name,
            attendeeName: `${response.attendee.firstName} ${response.attendee.lastName}`,
            profileImageSrc: response.attendee.thumbnailUrl
        });
    }

    render() {
        const { attendeeName='YOU',
                profileImageSrc="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg",
                eventName='the thing',
                images=[]
        } = this.state;
        return (
          <div className="App">
            <header className="purple-section">
                <img src={profileImageSrc} alt="Barak Mazal Tov!" />
                <h1>
                    HI {attendeeName},
                </h1>
                <h3>
                    It was great seeing you at {eventName}
                </h3>
            </header>
            <section className="gallery">
                <h2>YOU LOOK AMAZING!</h2>
                {images && images.map((image, i) => <img className="attendee-image" src={image} key={i} alt="Your Photos" /> )}
            </section>

            <section className="sponsors">
                <h2>THANKS TO OUR SPONSORS</h2>
                <div className="sponsors-container">
                    <div className="sponsors-row">
                        <img className="sponsor-image" src="https://welcome.bizzabo.com/hs-fs/hub/318095/file-2435692466-png/images/bizzabo-logo.png?t=1537307148049&width=325&name=bizzabo-logo.png" alt="Bizzabo" />
                        <img className="sponsor-image" src="http://pngimg.com/uploads/google/google_PNG19644.png" alt="Google" />
                    </div>
                    <div className="sponsors-row">
                        <img className="sponsor-image" src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_1525720131/hubspot.png" alt="Hubspot" />
                        <img className="sponsor-image" src="https://sfi.mechatronics.no/wp-content/uploads/2017/05/github.png" alt="Github" />
                    </div>
                </div>
            </section>

            <section className="next-event">
                <h2>USE PHOTOVENT FREE FOR YOUR NEXT EVENT</h2>
                <button>TRY NOW</button>
            </section>

          </div>
        );
    }
}

export default App;
