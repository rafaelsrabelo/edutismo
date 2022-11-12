import logo from './../../assets/img/logo.svg';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link class="navbar-brand" to="/">
            <img src={logo} class="img-logo" alt="..." />
          </Link>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">HOME</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="jogo.html">MEMORIZAÇÃO</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="jogo2.html">JOGO DO CONTRA</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contato.html">CONTATO</a>
              </li>
            </ul>
            <form class="d-flex">
              <button id="btn-entrar" class="btn btn-warning btn-lg" href="Login.html">Entrar</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}