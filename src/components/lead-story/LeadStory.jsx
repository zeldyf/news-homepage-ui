import "./LeadStory.css"

function LeadStory() {
    return (
        <div className="lead-story-container">
            <img className="lead-story-image desktop-image" src={require("./images/image-web-3-desktop.jpg")} alt="" />
            <img className="lead-story-image mobile-image" src={require("./images/image-web-3-mobile.jpg")} alt="" />
            <div className="lead-story-title-container">
                <h1 id="lead-story-header">The Bright Future of Web 3.0?</h1>
                <div className="lead-story-subtitle-container">
                    <h3 className="lead-story-subtitle">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</h3>
                    <button>READ MORE</button>
                </div>
            </div>
        </div>
    )
};

export default LeadStory;