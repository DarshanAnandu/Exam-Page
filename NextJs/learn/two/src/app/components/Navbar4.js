import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 h-20 flex items-center justify-between px-6 text-white">
      {/* Logo 1 */}
      <div>Logo 1</div>

      {/* Divider */}
      <div className="mx-4">|</div>

      {/* "or" text */}
      <div>or</div>

      {/* Divider */}
      <div className="mx-4">|</div>

      {/* Logo 2 */}
      <div>Logo 2</div>

      {/* Navigation Buttons */}
      <div className="flex items-center space-x-4">
        <Link href="/class-12-neet">
          <div className="text-white">class 12+ | NEET</div>
        </Link>
        <Link href="/study-material">
          <div className="text-white">study material</div>
        </Link>
        <Link href="/result">
          <div className="text-white">result</div>
        </Link>
        <Link href="/more">
          <div className="text-white">more</div>
        </Link>
      </div>

      {/* Telephone Symbol */}
      <div className="text-xl">&#9742;</div>

      {/* Need Help and Phone Numbers */}
      <div className="space-y-1">
        <div>Need help? talk to experts</div>
        <div>1800-419-427</div>
      </div>

      {/* Sign In */}
      <button className="text-white">Sign In</button>
    </nav>
  );
};

export default Navbar;
