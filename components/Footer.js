export default function Footer() {
  return (
    <section className="footer" id="footer">
      <div className="icons-container">
        <div className="icons">
          <h3>Açılış ve Kapanış</h3>
          <p>11:00-23:00</p>
        </div>
        <div className="icons">
          <h3>Telefon</h3>
          <p><a href="tel:02327126466">0232 712 6466</a></p>
        </div>
        <div className="icons">
          <h3>Email</h3>
          <p>contact@cesmebalik.com</p>
        </div>
        <div className="icons">
          <h3>Adres</h3>
          <p>Çeşme</p>
          <a
            href="https://www.google.com/maps/place/16+Eyl%C3%BCl,+Levent+Bal%C4%B1k+Evi+%C3%87e%C5%9Fme%2F%C4%B0zmir,+3011.+Sk.,+35930+%C3%87e%C5%9Fme%2F%C4%B0zmir/@38.3269797,26.307708,19z/data=!4m2!3m1!1s0x14bb7a313604ab6d:0x3ce6c738a9bdd98f?hl=en-tr"
          >
            Google Maps
          </a>
        </div>
      </div>
      <div className="share">
        <a href="https://www.instagram.com/leventbalikevi">
          INSTAGRAM
        </a>
      </div>
      <div className="credit">
        improved by{" "}
        <a href={"https://www.github.com/458cob"}>
          <span>458cob</span>
        </a>{" and "}
        <a href={"https://www.linkedin.com/in/nimausername/"}>
          <span>Nima</span>
        </a>{" "}
        | Her hakkı saklıdır.
      </div>
    </section>
  );
}
