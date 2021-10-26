const Navbar = () => (
    <nav className="inline-flex justify-between list-none w-max">
        <li className="cursor-pointer w-36 py-4 font-bold text-2xl text-center text-white bg-hci-lila">
            Home
        </li>
        <li className="cursor-pointer w-36 py-4 font-normal text-2xl text-center text-hci-lila hover:text-white hover:bg-hci-lila">
            About Us
        </li>
        <li className="cursor-pointer w-36 py-4 font-normal text-2xl text-center text-hci-lila hover:text-white hover:bg-hci-lila">
            Showcase
        </li>
        <li className="cursor-pointer w-36 py-4 font-normal text-2xl text-center text-hci-lila hover:text-white hover:bg-hci-lila">
            Blog
        </li>
        <li className="cursor-pointer w-36 py-4 font-normal text-2xl text-center text-hci-lila hover:text-white hover:bg-hci-lila">
            Contact
        </li>
        <li className="cursor-pointer w-36 py-4 font-normal text-2xl text-center text-hci-lila hover:text-white hover:bg-hci-lila">
            Sign In
        </li>
    </nav>
);

export default Navbar;
