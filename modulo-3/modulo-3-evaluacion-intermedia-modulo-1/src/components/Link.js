const LinkMenu = (props) => {
  const target = props.openInNewTab ? "_blank" : "";
  console.log(props);
  return (
    <li className="menu__item1">
      <a className="link-menu" href="https://adalab.es/" target={target}>
        {props.text}
      </a>
    </li>
  );
};

export default LinkMenu;
