import { Link } from "react-router-dom"
import "./stories.css"

export default function Story({ num, img, title, subtitle }) {
    return (
        <Link to="#" className="story" id={`story-${num}`}>
            <div className="story-image-container">
                <img className="story-image" src={img} alt="" />
            </div>
            <div className="story-text-container">
                <h4 className="story-number">{num}</h4>
                <h5 className="story-title">{title}</h5>
                <p className="story-subtitle">{subtitle}</p>
            </div>
        </Link>
    )
}