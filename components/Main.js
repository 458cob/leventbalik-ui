import Image from 'next/image'

export default function Main() {

  return (
    <section className="home" id="home">
      <div
        className="swiper-slide slide"
        style={{ background: "url(images/mainBg.png) no-repeat" }}
      >
        <div className="content">
          <span>seafood restaurant</span>
          <h3>LEVENT BALIK</h3>
          <a href="#menu" className="btn">
            menu
          </a>
        </div>
      </div>
    </section>
  );
}
