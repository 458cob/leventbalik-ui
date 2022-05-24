export default function Menu({ data }) {

  let dinners        = []
  let entree_starter = []
  let appetizer      = []
  let drinks         = []

  data.map((item) => {
    if (item.category === 'dinners') dinners.push(item)
    if (item.category === 'entree_starter') entree_starter.push(item)
    if (item.category === 'appetizer') appetizer.push(item)
    if (item.category === 'drinks') drinks.push(item)
  })

  return (
    <section className="menu" id="menu">
      <div className="heading">
        <span>levent balik</span>
        <h3>menü</h3>
      </div>
      <div className="swiper menu-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide slide">
            <h3 className="title">Yemek</h3>
            <div className="box-container">
              {dinners.map((item) => {
                return (
                  <div className="box" key={item._id}>
                    <div className="info">
                      <h3>{item.name}</h3>
                    </div>
                    <div className="price">₺{item.price}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="swiper-slide slide">
            <h3 className="title">Ara Sıcak</h3>
            <div className="box-container">
              {entree_starter.map((item) => {
                return (
                  <div className="box" key={item._id}>
                    <div className="info">
                      <h3>{item.name}</h3>
                    </div>
                    <div className="price">₺{item.price}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="swiper-slide slide">
            <h3 className="title">Meze</h3>
            <div className="box-container">
              {appetizer.map((item) => {
                return (
                  <div className="box" key={item._id}>
                    <div className="info">
                      <h3>{item.name}</h3>
                    </div>
                    <div className="price">₺{item.price}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="swiper-slide slide">
            <h3 className="title">içecek</h3>
            <div className="box-container">
              {drinks.map((item) => {
                return (
                  <div className="box" key={item._id}>
                    <div className="info">
                      <h3>{item.name}</h3>
                    </div>
                    <div className="price">₺{item.price}</div>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
