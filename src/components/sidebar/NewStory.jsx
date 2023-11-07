import { Link } from "react-router-dom";

export default function NewStory() {
    return (
        <section className="new-stories">
            <Link className="new-story" to="#" >
                <h3 className="new-story-title">Hydrogen VS Electric Cars</h3>
                <h4 className="new-story-subtitle">Will hydrogen-fueled cars ever catch up to EVs?</h4>
            </Link>
            <hr />
            <Link className="new-story" to="#">
                <h3 className="new-story-title">The Downsides of AI Artistry</h3>
                <h4 className="new-story-subtitle">What are the possible adverse effects of on-demand AI image generation?</h4>
            </Link>
            <hr />
            <Link className="new-story" to="#">
                <h3 className="new-story-title">Is VC Funding Drying Up?</h3>
                <h4 className="new-story-subtitle">Private funding by VC firms is down 50% YOY. We take a look at what that means.</h4>
            </Link>
        </section>

    )
}