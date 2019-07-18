import React, { PureComponent } from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import './styles.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      menu: [],
    };
  }

  render() {
    const { menu } = this.state;
    return (
      <div className="app__container">
        <Header />
        <Main menu={menu} />
        <Footer />
      </div>
    );
  }
}

export default App;
