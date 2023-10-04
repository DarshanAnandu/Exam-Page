// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="bg-#007BFF w-full h-[100vh]">
            <div className="flex items-center justify-between h-20 p-5">
                <div className="flex items-center space-x-2">
                    <img src="/logo1.png" alt="Logo 1" className="h-10" />
                    <span className="text-white">|</span>
                    <span className="text-white">or</span>
                    <span className="text-white">|</span>
                    <img src="/logo2.png" alt="Logo 2" className="h-10" />
                </div>
                <div className="space-x-4">
                    <div className="text-white">Need help? talk to experts</div>
                    <div className="text-white">1800-419-427</div>
                </div>
                <div className="space-x-4">
                    <Link href="/signin">
                        <div className="text-white">Sign In</div>
                    </Link>
                    <button className="text-white">
                        <img src="/burger-icon.png" alt="Burger Icon" className="h-6" />
                    </button>
                </div>
            </div>
            <div className="flex justify-center mt-20">
                {/* Your navigation buttons go here */}
            </div>
        </div>
    );
};

export default Navbar;
