export default function Menu({ data }) {

  let fish           = []
  let grill          = []
  let appetizer      = []
  let entree_starter = []
  let salad          = []
  let beer           = []
  let wine           = []
  let raki           = []
  let drinks         = []

  data.map((item) => {
    if      (item.category === 'fish') fish.push(item)
    else if (item.category === 'grill') grill.push(item)
    else if (item.category === 'appetizer') appetizer.push(item)
    else if (item.category === 'entree_starter') entree_starter.push(item)
    else if (item.category === 'salad') salad.push(item)
    else if (item.category === 'beer') beer.push(item)
    else if (item.category === 'wine') wine.push(item)
    else if (item.category === 'raki') raki.push(item)
    else if (item.category === 'drinks') drinks.push(item)
  })

  return (
    <section className="menu" id="menu">
      <div className="heading">
        <span>levent balık</span>
        <h3>menü</h3>
      </div>
      <div className="swiper menu-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide slide">
            <h3 className="title">Balık</h3>
            <div className="box-container">
              {fish.map((item) => {
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
            <h3 className="title">Izgara</h3>
            <div className="box-container">
              {grill.map((item) => {
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
            <h3 className="title">Salata</h3>
            <div className="box-container">
              {salad.map((item) => {
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
            <h3 className="title">Bira</h3>
            <div className="box-container">
              {beer.map((item) => {
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
            <h3 className="title">Şarap</h3>
            <div className="box-container">
              {wine.map((item) => {
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
            <h3 className="title">Rakı</h3>
            <div className="box-container">
              {raki.map((item) => {
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
            <h3 className="title">Meşrubat</h3>
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
