interface NavLink {
  label: string;
  href: string;
}

const NavlLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Our Chef", href: "#chef" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between p-4 bg-white shadow-md">
        <h1 className="text-amber-950 text-2xl font-bold">Bakery</h1>

        <ul className="flex items-center space-x-4 text-amber-950 font-semibold">
          {NavlLinks.map((link) => (
            <li
              key={link.href}
              className="hover:text-amber-700 cursor-pointer"
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button className="bg-blue-500 text-white px-2 py-2 rounded hover:bg-blue-600 cursor-pointer">
          menu
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
