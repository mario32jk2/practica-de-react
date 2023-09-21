import { Header } from "../heder/Header";
import "./form.css";

export const Register = () => {
  return (
    <>
    <Header/>
    <div className="contenedorPadre">
      <div className="container-registro">
        <div>
          <h2>Registro</h2>
        </div>
        <form>
          <div className="container-nombre-registro">
            <input
              type="text"
              placeholder="Nombre"
              name="nombre"
              id="nombre"
              required
            ></input>
          </div>

          <div className="container-apellido-registro">
            <input
              type="text"
              placeholder="Apellido"
              name="apellido"
              id="apellido"
              required
            ></input>
          </div>

          <div className="container-gmail-registro">
            <input
              type="email"
              placeholder="Correo"
              name="correo"
              id="correo"
              required
            ></input>
          </div>

          <div className="container-contraseña-registro">
            <input
              type="password"
              placeholder="Contraseña"
              name="contraseña"
              id="contraseña"
              required
            ></input>
          </div>
          <button type="submit">Registrarme</button>
        </form>
      </div>
    </div>
    </>
  );
};
