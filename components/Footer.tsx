export default function Footer() {
  return (
    <footer>
      <h3 className="footer-title">Travaillons enssemble !</h3>

      <section className="footer-informations">
        <section className="footer-left">
          <section className="footer-telephone">
            <h4 className="information-title">Telephone</h4>
            <h3 className="information">06.13.81.09.81</h3>
          </section>

          <section className="footer-mail">
            <h4 className="information-title">Mail</h4>
            <h3 className="information">
              sicaud.marine.pro
              <a
                href="mailto:sicaud.marine.pro@gmail.com"
                className="email-container"
              >
                <span>@gmail.com</span>
              </a>
            </h3>
          </section>
        </section>
        <section className="footer-right">
          <h3 className="information">On discute ?</h3>
        </section>
      </section>
    </footer>
  );
}
