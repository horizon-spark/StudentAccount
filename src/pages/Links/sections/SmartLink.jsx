import { Link } from 'react-router-dom';

export default function SmartLink({ href, external, className, children, ...rest }) {
  const isExternal = external || /^https?:\/\//i.test(href);

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className} {...rest}>
      {children}
    </Link>
  );
}
