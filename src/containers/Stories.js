import React, { Component } from 'react';

import HeadingSecondary from '../components/HeadingSecondary';
import StoryCard from '../components/StoryCard';
import Button from '../components/Button';

import photo1 from '../img/nat-8.jpg';
import photo2 from '../img/nat-9.jpg';
import video from '../img/video.mp4';

class Stories extends Component {
    render() {
        return (
            <section class="section-stories" id="stories">
                <div class="bg-video">
                    <video class="bg-video__content" autoPlay muted loop>
                        <source src={video} type="video/mp4"/>
                        {/* <source src="img/video.webm" type="video/webm"/> */}
                            Video not suported!
                    </video>
                </div>
                <div class="u-center-text u-margin-bottom-big">
                    <HeadingSecondary title='you feedback is important' />
                </div>
                <StoryCard  name='Marion Schmitt'
                            img={photo1}
                            title='I had the best week ever with my family'
                            text="AMAZING AND FUN DAY TRIP!!!!! Richard was our guide and he was perfect! He picked four great mountain paths for our group. The tour was so well organized from beginning to finish. I would highly recommend Skytours if you are looking to taste great adventure and have fun! We didn't want the day to end!"/>
                <StoryCard  name='Marco Smith'
                            img={photo2}
                            title='I loved every minute of it'
                            text="This is not a difficult hike when started from a new location accessible only by tour buses and private cars - it is gradual and in the worst case you can always hire a horse. The very last 1/4 of a mile is more difficult - much steeper and less oxygen. But his hike is worth all the effort - amazing!"/>
                <div class="u-center-text u-margin-top-huge">
                    <Button href='#' class='btn-text' text='Read all stories &rarr;' />
                </div>
            </section>
        )
    }
}

export default Stories