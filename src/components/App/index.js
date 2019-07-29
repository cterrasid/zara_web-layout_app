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
      hideLeft: 'hide-left',
    };

    this.handleMenuVisibility = this.handleMenuVisibility.bind(this);
    this.imagesAppearing = this.imagesAppearing.bind(this);
    this.handleHideLeft = this.handleHideLeft.bind(this);
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

  handleHideLeft() {
    if (document.documentElement.scrollTop > 100) {
      this.setState({ hideLeft: 'hide-left' });
    }
  }

  render() {
    const { menuStatus, logo, visibilityClass, hideLeft } = this.state;
    return (
      <div className="app__container">
        <Header
          menuStatus={menuStatus}
          logo={logo}
          handleMenuVisibility={this.handleMenuVisibility}
        />
        <Main visibilityClass={visibilityClass} hideLeft={hideLeft} />
        <Footer />
      </div>
    );
  }
}

export default App;
