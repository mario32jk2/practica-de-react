import { Header } from "../heder/Header";
import "./form.css";

export const Login = () => {
  return (
    <>
    <Header/>
    <div className="contenedorPadre">
      <div className="container-login">
        <div className="container-inicio-sesion">
          <h2>Iniciar sesion</h2>
        </div>

        <form action="">
          <div className="nombre">
            <input type="text" id="texto" placeholder="Nombre" required></input>
          </div>

          <div className="contraseña">
            <input
              type="password"
              name="contraseña"
              id="password"
              placeholder="Contraseña"
              required
            ></input>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
    </>
  );
};
