import React, { Component } from 'react';
import { Provider} from 'react-redux'
import { Globalstyle } from './style'
import Header from './common/header'
import store from './store'
class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <Header />
      </Provider>
      // <div>
      //   <Globalstyle/>
      //   hello
      // </div>
    );
  }
}

export default App;
