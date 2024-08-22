import "./link.css";

function Link({ title, href }) {
  return (
    <li>
      <a href={href}>{title}</a>
    </li>
  );
}

export default Link;
