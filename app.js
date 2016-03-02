(function(){
  "use strict";

  var PassGen = function(){
    // SINGLETON PATTERN (4 rida)
    if(PassGen.instance){
      return PassGen.instance;
    }
    PassGen.instance = this;

    this.passwords = []; //Tühi massiiv paroolide jaoks


    //panen rakenduse tööe
    this.init();
  };

  //Teeme muutuja avalikuks
  window.PassGen = PassGen;

  //kĆµik  funktsioonid tulevad siia sisse
  PassGen.prototype = {
    init: function(){
      console.log('rakendus käivitus');

      //Kuulan nuppu
      document.querySelector('#generate').addEventListener('click', this.generatePasswords.bind(this));

    },
    generatePasswords: function(){
      	console.log('genereeri');

    }

  };

  window.onload = function(){
    var app = new PassGen();
  };

})();
