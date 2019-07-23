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
      visibilityClass: 'hidden',
    };

    this.handleMenuVisibility = this.handleMenuVisibility.bind(this);
    this.imagesAppearing = this.imagesAppearing.bind(this);
  }

  componentDidMount() {
    window.onscroll = () => this.imagesAppearing();
  }

  handleMenuVisibility() {
    const { menuStatus } = this.state;

    if (menuStatus === 'open') {
      this.setState({ menuStatus: 'close', logo: 'right' });
    } else {
      this.setState({ menuStatus: 'open', logo: 'left' });
    }
  }

  imagesAppearing() {
    if (document.documentElement.scrollTop > 50) {
      this.setState({ visibilityClass: 'visible' });
    } else if (document.documentElement.scrollTop < 50) {
      this.setState({ visibilityClass: 'disappear' });
    }
  }

  render() {
    const { menuStatus, logo, visibilityClass } = this.state;
    return (
      <div className="app__container">
        <Header
          menuStatus={menuStatus}
          logo={logo}
          handleMenuVisibility={this.handleMenuVisibility}
        />
        <Main visibilityClass={visibilityClass} />
        <Footer />
      </div>
    );
  }
}

export default App;
