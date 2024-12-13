import { BsFillMoonStarsFill } from "react-icons/bs";
function NavBar() {
  return (
    <>
      <section className="">
        <nav className="container py-10 w-11/12 mx-auto flex justify-between">
          <h1 className="text-xl sm:text-lg font-mono">developed by Tareq</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer" />
            </li>
            <li>
              <a
                className="bg-gradient-to-l from-slate-600 to-amber-900 text-white p-2 border-none rounded-md ml-5"
                href="#"
              >
                Resume
              </a>
            </li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default NavBar;
