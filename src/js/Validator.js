/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';
export default class Validator {
  constructor(username) {
    this.username = username;
  }

  // eslint-disable-next-line consistent-return
  validateUsername() {
    return /^[a-z][-\w]+[a-z]$/i.test(this.username) && !/\d{4,}/.test(this.username);
  }
}
