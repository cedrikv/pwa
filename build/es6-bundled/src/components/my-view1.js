define(["./my-app.js"],function(_myApp){"use strict";class MyView1 extends _myApp.PageViewElement{render(){return _myApp.html`
      ${_myApp.SharedStyles}
      <section>
        <h2>U moeder</h2>
        <p>nee, ù moeder</p>
        <p>It doesn't do anything other than display some static text, maar dat is al meer dan Axel.  </p>
      </section>
    `}}window.customElements.define("my-view1",MyView1)});