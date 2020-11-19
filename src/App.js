import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyFooter from "./components/MyFooter";
import LatestRelease from "./components/LatestRelease";
import SingleBook from "./components/SingleBook";
import CommentsForm from "./components/CommentsForm";

function App() {
  return (
    <div className="App">
      {/* <MyNav /> */}
      <CommentsForm />
      <LatestRelease />
      <MyFooter />
    </div>
  );
}

export default App;
