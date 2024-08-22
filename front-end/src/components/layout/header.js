import "./header.css";
import Link from "./link";

function Header() {
  return (
    <>
      <header className="header">
        <h1 className="header-title">RoutleTech</h1>
        <nav className="header-nav">
          <ul>
            <Link href="/" title="Home" />
            <Link href="/movie-list" title="Movies" />
            <Link href="/add-movie" title="Add Movie" />
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
