import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <div className="font-roboto">
        <Navbar />
        <Body />
      </div>
    </Provider>
  );
};

export default App;
