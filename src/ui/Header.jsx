import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      {/* <Link to="/" className="tracking-[.5rem]"> */}
      <Link to="/" className="tracking-widest">
        Fast React pizza Co.
      </Link>
      <SearchOrder />
      <p>Jhonas</p>
    </header>
  );
}

export default Header;
