import LeadStory from "../lead-story/LeadStory";
import Navbar from "../nav/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./App.css";
import Stories from "./stories/Stories";

function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
        <section className="flex-container">
          <LeadStory />
          <Sidebar />
          <Stories />
        </section>
      </div>
    </div>
  );
}

export default App;
