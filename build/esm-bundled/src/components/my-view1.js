import{html,PageViewElement,SharedStyles}from"./my-app.js";class MyView1 extends PageViewElement{render(){return html`
      ${SharedStyles}
      <section>
        <h2>U moeder</h2>
        <p>nee, ù moeder</p>
        <p>It doesn't do anything other than display some static text, maar dat is al meer dan Axel.  </p>
      </section>
    `}}window.customElements.define("my-view1",MyView1);