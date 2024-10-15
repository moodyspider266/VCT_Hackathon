import Header from "./Header";
import Footer from "./Footer";
import "./App.css"

export default function App() {
  return (
    <div className="page">
      <Header />
      <div className="main">
        <div className="chat-box">
          <div className="response-box">

          </div>
          <div className="query-box">
            <input type="text" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}