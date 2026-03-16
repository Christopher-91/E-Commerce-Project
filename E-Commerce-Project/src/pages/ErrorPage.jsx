import { Header } from '../components/Header';
import { Link } from 'react-router';
import './errorpage.css';

export function ErrorPage() {
  return(
    <>
    <title>Page Not Found</title>

    <Header />
     
     <div className="error-page-wrapper">
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <h2 className="error-subtitle">Oops! Page Not Found</h2>
        <p className="error-text">
          The page you are looking for might have been removed or moved to another location.
        </p>
        {/* Using a Link instead of an <a> tag keeps the routing fast and seamless */}
        <Link to="/" className="error-home-button">
          Return to Store
        </Link>
      </div>
    </div>

    </>
  );
}