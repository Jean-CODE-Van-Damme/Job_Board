import "./App.css";
import Header from "./component/Header";
import Jobs from "./component/Jobs";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <Header name={"The Job Board"} />

      <div className="body">
        <Jobs />
      </div>

      <div class="footer">
        <Footer
          dedicace={"Made with React at Le reacteur By Olivier Reverseau"}
        />
      </div>
    </>
  );
};

export default App;
