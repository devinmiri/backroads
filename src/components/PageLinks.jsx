import { pageLinks } from "../data";

const PageLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        const { id, href, text } = link;
        return (
          <li key={id}>
            <a href={href} className={childClass}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};


export default PageLinks;
