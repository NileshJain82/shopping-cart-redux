import { Link, NavLink } from "react-router-dom";
import {connect} from 'react-redux'

function Header({noOfItems}) {
  return (
    <header className="shadow sticky z-50 top-0 ">
      <nav className="bg-green-200 border-gray-200 px-4 lg:px-6 py-2.5 flex ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="">
            <img src="./cart.svg" className="mr-16 h-12 " alt="Logo" />
          </Link>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-2"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row gap-10 lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to='cart' className="duration-200 border-b text-gray-600 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"> 🛒({noOfItems}) </NavLink>
                 
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

const mapStateToProp = (state)=>{
  return {
    noOfItems: state.noOfItems
  }
}

export default connect (mapStateToProp)(Header)