import './styles.css';

export default function Footer() {
  return (
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><a href="index.html" className="nav-link px-2 text-muted">Home</a></li>
        <li className="nav-item"><a href="cadastro.html" className="nav-link px-2 text-muted"> Cadastro </a></li>
        <li className="nav-item"><a href="Login.html" className="nav-link px-2 text-muted"> Login</a></li>
        <li className="nav-item"><a href="contato.html" className="nav-link px-2 text-muted">Contato</a></li>
      </ul>
      <p className="text-center text-muted">© 2022 EduTismo, Inc</p>
    </footer>
  )
}