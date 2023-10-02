// import React, { Children } from "react";
// import { FaTh, FaBox, FaClipboardList, FaBars } from "react-icons/fa"; // Import the icons
// import { NavLink } from "react-router-dom";

// const Sidebar = ({ Children }) => {
//   const menuItems = [
//     { path: "/", name: "Dashboard", icon: <FaTh /> },
//     { path: "/product", name: "Products", icon: <FaBox /> }, // Use the FaBox icon for Products
//     { path: "/order", name: "Orders", icon: <FaClipboardList /> }, // Use the FaClipboardList icon for Orders
//   ];

//   return (
//     <div className="container">
//       <div className="sidebar">
//         <div className="top_section">
//           <h1 className="logo">Logo</h1>
//           <div className="bars">
//             <FaBars />
//           </div>
//         </div>
//         {menuItems.map((item, index) => {
//           <NavLink to={item.path} key={index} className="link" activeclassName>
//             <div className="icon">{item.icon}</div>
//             <div className="link_text">{item.name}</div>
//           </NavLink>;
//         })}
//       </div>
//       <main>{children}</main>
//     </div>
//   );
// };

// export default Sidebar;
// import React from "react";
// import { FaTh, FaBox, FaClipboardList, FaBars } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// const Sidebar = ({ children }) => {
//   const menuItems = [
//     { path: "/", name: "Dashboard", icon: <FaTh /> },
//     { path: "/product", name: "Products", icon: <FaBox /> },
//     { path: "/order", name: "Orders", icon: <FaClipboardList /> },
//   ];

//   return (
//     <div className="container">
//       <div className="sidebar">
//         <div className="top_section">
//           <h1 className="logo">Logo</h1>
//           <div className="bars">
//             <FaBars />
//           </div>
//         </div>
//         {menuItems.map((item, index) => (
//           <NavLink
//             to={item.path}
//             key={index}
//             className="link"
//             activeClassName="active"
//           >
//             <div className="icon">{item.icon}</div>
//             <div className="link_text">{item.name}</div>
//           </NavLink>
//         ))}
//       </div>
//       <main>{children}</main>
//     </div>
//   );
// };

// export default Sidebar;
import React from "react";
import { FaTh, FaBox, FaClipboardList, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const menuItems = [
    { path: "/", name: "Dashboard", icon: <FaTh /> },
    { path: "/product", name: "Products", icon: <FaBox /> },
    { path: "/order", name: "Orders", icon: <FaClipboardList /> },
    { path: "/home", name: "Add Product", icon: <FaClipboardList /> },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white flex-shrink-0 overflow-y-auto">
      {/* Sidebar */}
      <div className="bg-gray-900 text-white w-64 flex-shrink-0">
        <div className="p-4">
          <h1 className="text-2xl font-semibold">Logo</h1>
          <div className="mt-4">
            {menuItems.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="flex items-center text-gray-300 py-2 hover:bg-blue-600 hover:text-white"
                activeClassName="bg-blue-600"
              >
                <div className="mr-3 text-xl">{item.icon}</div>
                <div className="link_text">{item.name}</div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default Sidebar;
