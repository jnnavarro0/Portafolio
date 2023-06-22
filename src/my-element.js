import { LitElement, html, css } from '../node_modules/lit-element/lit-element.js';


class Navbar extends LitElement {
  static styles = css`

.container {
  margin-top: 30px;
  margin: 100px;
}

.section-title {
  text-align: center;
}

.section-title h2 {
  font-size: 28px;
  font-weight: bold;
}

.col-lg-4 {
  width: 33.3333%;
  float: left;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  display: block;
  width: 100%;
  height: 40px;
  padding: 6px 12px;
  font-size: 16px;
  line-height: 1.5;
  color: #555555;
  background-color: #ffffff;
  background-image: none;
  border: 1px solid #cccccc;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out,
              box-shadow 0.15s ease-in-out;
}

textarea.form-control {
  height: auto;
}

.text-center button[type="submit"] {
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
}

.col-lg-8 {
  width: 66.6667%;
  float: left;
}

.php-email-form {
  margin: 0 auto;
  max-width: 500px;
}

@media (max-width: 991.98px) {
  .col-lg-4 {
    width: 50%;
  }

  .col-md-6 {
    width: 100%;
  }

  .php-email-form {
    max-width: 100%;
  }
}

@media (max-width: 767.98px) {
  .col-lg-4 {
    width: 100%;
  }
}

  `;

  static properties = {
    nombre: { type: String },
    email: { type: String },
    asunto: { type: String },
    mensaje: { type: String }
  };

  constructor() {
    super();
    this.nombre = '';
    this.email = '';
    this.asunto = '';
    this.mensaje = '';
  }

  render() {
    return html`
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Contáctanos</h2>
        </div>
        <div class="row mt-1">
          <div class="col-lg-4">
            <div class="info">
              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>INFO@INTELBUSINESS.COM</p>
              </div>
              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Teléfono:</h4>
                <p>+593 983418032</p>
              </div>
            </div>
          </div>
          <div class="col-lg-8 mt-5 mt-lg-0">
            <form @submit="${this.enviarFormulario}"
              action="forms/contact.php" method="post" role="form"
              class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control"
                    id="name" placeholder="Nombre" .value="${this.nombre}"
                    @input="${this.actualizarNombre}" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email"
                    id="email" placeholder="Email" .value="${this.email}"
                    @input="${this.actualizarEmail}" required>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject"
                  id="subject" placeholder="Asunto" .value="${this.asunto}"
                  @input="${this.actualizarAsunto}" required>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5"
                  placeholder="Mensaje" .value="${this.mensaje}"
                  @input="${this.actualizarMensaje}" required></textarea>
              </div>
              <center>
                <div class="text-center">
                  <button type="submit">Enviar mensaje</button>
                </div>
              </center>
            </form>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('contact-component', Navbar);

