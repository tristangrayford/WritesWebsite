import { Link } from "react-router-dom";

export const NavButton = ({
  to,
  text,
  keyLink = false,
  isDirect,
  onClick,
}: {
  to: string;
  text: string;
  keyLink?: boolean;
  isDirect?: boolean;
  onClick?: () => void;
}) => {
  const classNames = `nav-button ${keyLink ? "is-cta" : ""}`;

  if (isDirect) {
    return (
      <button onClick={onClick} className={classNames}>
        {text}
      </button>
    );
  }
  return (
    <Link className={classNames} to={to}>
      {text}
    </Link>
  );
};
