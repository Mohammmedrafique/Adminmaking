// // // import React from "react";
// // // import Home from "./Pages/Home";
// // // import Sidebar from "./components/Sidebar";
// // // import "./App.css";

// // // const App = () => (
// // //   <div className="app">
// // //     <div className="sidebar">
// // //       <Sidebar />
// // //     </div>
// // //     <div className="home">
// // //       <Home />
// // //     </div>
// // //   </div>
// // // );

// // // export default App;

// import React from "react";
// import Home from "./Pages/Home";
// // import Sidebar from "./components/Sidebar";
// import "./App.css";
// // import Navbar from "./Pages/Navbar";
// import Sidebar from "./Pages/Sidebar";
// import MainRoutes from "./Pages/MainRoutes";
// import "./App.css";
// const App = () => (
//   <>
//     <Sidebar />
//     <MainRoutes />
//     {/* <div className="app grid grid-cols-5">
//       <div className="sidebar col-span-1">

//       </div>
//       <div className="home col-span-4">
//         <Home />
//       </div>
//     </div> */}
//   </>
// );

// export default App;
import React from "react";
import Home from "./Pages/Home";
import Sidebar from "./Pages/Sidebar";
import MainRoutes from "./Pages/MainRoutes";
import "./App.css"; // You can remove this line if not needed

const App = () => (
  <>
    <div className="bg-gray-100 min-h-screen flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        {" "}
        {/* Add ml-64 to create a margin for the main content */}
        <MainRoutes />
      </div>
    </div>
  </>
);

export default App;
