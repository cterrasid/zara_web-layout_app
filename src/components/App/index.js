import React, { PureComponent } from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import './styles.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      menuStatus: 'close' || 'open',
      logo: 'right',
    };

    this.handleMenuVisibility = this.handleMenuVisibility.bind(this);
  }

  handleMenuVisibility() {
    const { menuStatus } = this.state;

    menuStatus === 'open'
      ? this.setState({ menuStatus: 'close', logo: 'right' })
      : this.setState({ menuStatus: 'open', logo: 'left' });
  }

  render() {
    const { menuStatus, logo } = this.state;
    return (
      <div className="app__container">
        <Header
          menuStatus={menuStatus}
          logo={logo}
          handleMenuVisibility={this.handleMenuVisibility}
        />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
