import { BiHomeALt, BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText } from "react-icons/bs"
import { Link } from "react-scroll"
export default function Navbar() {
    return (
        <>
            <div className="fixed bottom-2 lg-bottom-8 w-full overflow-hidden z-50">
                <div className="container mx-auto">

                    <div className="w-full bg-black/20 text-white/50 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl  ]" >
                        <Link to="home"
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            className="cursor-pointer w-[60px] h-[60px] flex items-center "
offset={-200}
                        >
                            <BiHomeAlt className="cursor-pointer flex items-center justify-center " />
                        </Link>
                        <Link to="about"
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            className="cursor-pointer w-[60px] h-[60px] flex items-center "
                        >
                            <BiUser className="cursor-pointer flex items-center " />
                        </Link>
                        <Link to="services"
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            className="cursor-pointer w-[60px] h-[60px] flex items-center "
                        >
                            <BsClipboardData className="cursor-pointer flex items-center " />
                        </Link>
                        <Link to="work"
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            className="cursor-pointer w-[60px] h-[60px] flex items-center "
                        >
                            <BsBriefcase className="cursor-pointer flex items-center " />
                        </Link>
                        <Link to="contact"
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            className="cursor-pointer w-[60px] h-[60px] flex items-center "
                        >
                            <BsChatSquareText className="cursor-pointer flex items-center " />

                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}