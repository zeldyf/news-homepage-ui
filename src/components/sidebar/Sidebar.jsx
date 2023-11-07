import "./Sidebar.css"

import NewStory from "./NewStory";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <h1 id="new-story-header">New</h1>
            <NewStory />
        </aside>)
} 