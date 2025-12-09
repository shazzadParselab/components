/*
Taxt - color
Box - padding
box - shadow
and other CSS
*/

export default function Statics() {
  return (
    <section className="pd_statics pd_container">
      <div className="pd_statics_container">
        <div className="pd_statics_heading">
            <h3>Personalization Products, Scalable Growth</h3>
        </div>

        <div className="pb_statics_cards">
          <div className="pd_statics_card">
            <h2>50K+</h2>
            <p>Products Customized Daily</p>
          </div>
          <div className="pd_statics_card">
            <h2>3X</h2>
            <p>Higher Conversion</p>
          </div>
          <div className="pd_statics_card">
            <h2>10K+</h2>
            <p>Global Merchants</p>
          </div>
          <div className="pd_statics_card">
            <h2>40%</h2>
            <p>Higher AOV</p>
          </div>
        </div>
      </div>
    </section>
  );
}
