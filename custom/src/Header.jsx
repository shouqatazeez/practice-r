import reactlogo from "./assets/react.svg";

function Header() {
  return (
    <header className="head">
      <img src={reactlogo} alt="react logo" width="50px" height="50px" />
      {/* <nav>
        <ul className="nav-list">
          <li className="list">Pricing</li>
          <li className="list">About</li>
          <li className="list">Contact</li>
        </ul>
      </nav> */}
      <h1 className="heading">React Facts</h1>
    </header>
  );
}

export default Header;
