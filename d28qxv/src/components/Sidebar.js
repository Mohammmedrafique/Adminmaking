// import React, { Component } from "react";
// import "./Sidebar.css"; // You should create a corresponding CSS file for styling

// class Sidebar extends Component {
//   render() {
//     return (
//       <div className="sidebar">
//         <h2>Admin Panel</h2>
//         <ul>
//           <li>
//             <a href="#">Dashboard</a>
//           </li>
//           <li>
//             <a href="#">Products</a>
//           </li>
//           <li>
//             <a href="#">Orders</a>
//           </li>
//           <li>
//             <a href="#">Customers</a>
//           </li>
//           <li>
//             <a href="#">Reports</a>
//           </li>
//           <li>
//             <a href="#">Settings</a>
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default Sidebar;

import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`h-screen ${
        isOpen ? "w-1/5" : "w-1/12"
      } bg-blue-600 text-white fixed top-0 left-0 transition-all duration-300 ease-in-out`}
    >
      <div
        className={`h-screen ${
          isOpen ? "w-64" : "w-16"
        } bg-blue-600 text-white fixed top-0 left-0 transition-all duration-300 ease-in-out`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-4">Admin Panel</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-300">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Customers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Reports
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Settings
              </a>
            </li>
          </ul>
        </div>
        <button
          className="fixed bottom-4 left-4 w-10 h-10 bg-blue-700 rounded-full text-white text-2xl flex items-center justify-center hover:bg-yellow-300"
          onClick={toggleSidebar}
        >
          {isOpen ? "←" : "→"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
