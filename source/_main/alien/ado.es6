'use strict';

class Ado {
  constructor() {
    this.config = {};
    this.data = {};
    this.callbacks = {};
  }

  on(name, cb) {
    if(!this.callbacks[name]) this.callbacks[name] = [];

    var push = this.callbacks[name].push(cb);
    console.log(push);
    return push;
  }

  off(name, cb) {
    this.callbacks[name].splice(this.callbacks.indexOf(cb), 1);
  }

  trigger(name, data){
    try {
      if(!this.callbacks[name]) throw 'no such event name';

      this.callbacks[name].forEach(fn => fn.call(null, data));
    } catch(e) {
      console.error(e);
    }
  }
}