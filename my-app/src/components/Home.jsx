/**
 * Home.jsx
 * This is for the homepage. 
 */
import React from 'react'; 
import "../styles/home.css";

function Home() {
    return (
        <>
        <div className="home-outer-wrapper">
            <div className="home-title-block">
                <p className="home-intro">Woof Woof Dog Sitters</p>
            </div>
            <div className="how-it-works-wrapper">
                <p className="how-it-works-text" id="find-dog">Are you looking for someone to take care of your dog?
                    <br/>Or are you looking for a dog to take care of for a while?
                    <br/>Whichever it is, you can find a dog sitter or become one yourself!</p>
                <p className="how-it-works-text" id="how-it-works">Features We Offer:</p>
                <div className="features-wrapper">
                    <div className="features">
                        <p>Job Listings</p>
                        <img src="https://sacredgrove.com/wp-content/uploads/2018/08/dog-waving-goodbye.jpg"
                            className="features-img"
                            alt="Dog waving goodbye"></img>
                        <p className="features-mini-text">Search through a list of available care-takers!
                            Your dog can find a temporary home in no time.</p>
                    </div>
                    <div className="features">
                        <p>Creating Posts</p>
                        <img src="https://image.petmd.com/files/styles/863x625/public/going-for-a-walk-picture-id917875026.jpg"
                            className="features-img"
                            alt="Going for a walk with a dog"></img>
                        <p className="features-mini-text">Willing to help someone take care of their dog?
                            Create a post to let people know you're open for hire!</p>
                    </div>
                    <div className="features">
                        <p>Connect!</p>
                        <img src="https://cdn.buttercms.com/TAVcHEKgTI2RKqvmap9f"
                            className="features-img"
                            alt="Team power!"></img>
                        <p className="features-mini-text">Found a perfect match for you and your dog? 
                            Get in touch, and get connected!</p>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Home;