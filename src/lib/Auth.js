import jwt from 'jsonwebtoken'

class Auth {
  // set token to local storage
  static setToken(token) {
    localStorage.setItem('token', token)
  }
  // get token from local storage
  static getToken() {
    return localStorage.getItem('token')
  }
  //remove a token when log router
  static removeToken() {
    localStorage.removeItem('token')
  }

  static getPayload() {
    return jwt.decode(this.getToken())
  }

  //for authenticating a log in
  static isAuthenticated() {
    return !!this.getToken()
  }

}

export default Auth
