import { PureComponent } from 'react';
import Cookie from 'js-cookie';

import * as constants from '../../utils/constants/constant';

const Events = [
  'load',
  'mousemove',
  'mousedown',
  'click',
  'scroll',
  'keypress',
];

export default class SessionTimeOut extends PureComponent {
  constructor(props) {
    super(props);
    Cookie.set(constants.EXPIRED, new Date().toISOString());
    // this.setTimeOut();
  }

  setTimeout = () => {
    const last = new Date(
      Cookie.get(constants.EXPIRED) || new Date()
    ).getTime();
    const now = Date.now();
    if (now - last >= constants.EXPIRED_TIME) {
      window.location = '#/logout';
    }

    Cookie.set(constants.JWT, Cookie.get(constants.JWT), {
      expires: new Date(now + constants.EXPIRED_TIME + 3000),
    });
    Cookie.set(constants.EXPIRED, new Date().toISOString());

    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }

    this.timeOut = setTimeout(() => {
      const last = new Date(Cookie.get(constants.EXPIRED)).getTime();
      const now = Date.now();
      if (now - last >= constants.EXPIRED_TIME) {
        window.location = '#/logout';
      }
    }, constants.EXPIRED_TIME);
  };

  componentDidMount() {
    Events.forEach((event) => {
      window.addEventListener(event, this.setTimeout);
    });
  }

  componentWillUnmount() {
    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
    Events.forEach((event) => {
      window.removeEventListener(event, this.setTimeout);
    });
  }
  render() {
    return null;
  }
}
