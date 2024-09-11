import Header from "./components/Header";
import NewsFeed from "./components/NewsFeed";

const App = () => {
  return (
    <div className=" overflow-x-hidden">
      <Header />
      <NewsFeed />
    </div>
  );
};

export default App;
