class Maybe {
    static of (value) { 
        return new Maybe(value)
    }
    constructor(value) {
      this._value = value
    }
    map(fn) {
      return this._value ?  Maybe.of(fn(this._value))  : Maybe.of(null); 
   }
}
class Container {
  static of (value) { 
      return new Maybe(value)
  }
  constructor(value) {
    this._value = value
  }
  map(fn) {
    return this._value ?  Maybe.of(fn(this._value))  : Maybe.of(null); 
  }
}

module.exports = { Maybe, Container }