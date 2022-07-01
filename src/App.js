import './App.css';
import ImageApp from './component/images/imageApp';
import { Provider } from "react-redux";
import store from './redux/store';

console.log(store);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ImageApp/>
      </div>
    </Provider>
  );
}

export default App;
