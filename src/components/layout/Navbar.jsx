import { useState } from "react";
import { Link } from "react-router-dom";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import Logo from "../common/Logo";
import Button from "../ui/Button";
import Container from "../ui/Container";

import { NAV_LINKS } from "../../constants/navigation";

const Navbar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
            <Container>
                <div className="flex h-20 items-center justify-between">

                    <Logo />
                    <nav className="hidden lg:flex items-center gap-10">
                        {NAV_LINKS.map((link) => (
                            <Link
                            key={link.id}
                            to={link.href}
                            className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-black"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="hidden lg:flex items-center gap-4">
                        
                        <Button>
                            <Link
                                to="/book-inspection"
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-black
                                    text-sm
                                    font-semibold
                                    text-white
                                    transition
                                    hover:bg-gray-800
                                "
                                >
                                Book an Inspection
                            </Link>                            
                        </Button>
                        <Button variant="secondary">Call Now</Button>
                        </div>
                    </nav>
                    
                        <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-3xl lg:hidden">
                            {
                                isMenuOpen
                                    ? <IoClose />
                                    : <HiOutlineMenuAlt3 />
                            }
                        </button>
                </div>
            </Container>


            {
                isMenuOpen && (
                    <div className="border-t border-gray-200 bg-white lg:hidden">

                        <Container>
                            <nav className="flex flex-col py-6">

                            {NAV_LINKS.map((link) => (

                                <Link
                                key={link.id}
                                to={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="border-b border-gray-100 py-4 text-gray-700 transition-colors hover:text-black"
                                >
                                {link.label}
                                </Link>

                            ))}

                            <div className="grid mt-6 gap-8">
                                <Button>
                                    <Link
                                        to="/book-inspection"
                                        className="
                                            inline-flex
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-black
                                            text-sm
                                            font-semibold
                                            text-white
                                            transition
                                            hover:bg-gray-800
                                        "
                                        >
                                        Book an Inspection
                                    </Link>
                                </Button>
                                <Button variant="secondary">Call Now</Button>

                            </div>

                            </nav>
                        </Container>

                    </div>
                )
            }
        </header>
    );
};

export default Navbar;