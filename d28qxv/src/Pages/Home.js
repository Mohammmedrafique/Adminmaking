// // src/App.js
// import React, { useState, useEffect } from "react";
// import HotelList from "../components/HotelList";
// import HotelForm from "../components/HotelForm";
// import "./Home.css";
// function Home() {
//   const [hotels, setHotels] = useState([]);
//   const [editHotelId, setEditHotelId] = useState(null);

//   useEffect(() => {
//     fetchHotels();
//   }, []);

//   const fetchHotels = async () => {
//     try {
//       const response = await fetch("https://hotels-tn92.onrender.com/hotels");
//       const data = await response.json();
//       setHotels(data);
//     } catch (error) {
//       console.error("Error fetching hotels:", error);
//     }
//   };

//   const addNewHotel = async (newHotelData) => {
//     try {
//       const response = await fetch("https://hotels-tn92.onrender.com/hotels", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newHotelData),
//       });
//       const data = await response.json();
//       fetchHotels();
//     } catch (error) {
//       console.error("Error adding hotel:", error);
//     }
//   };

//   const editHotel = (hotelId) => {
//     setEditHotelId(hotelId);
//   };

//   const updateHotel = async (hotelId, updatedHotelData) => {
//     try {
//       const response = await fetch(
//         `https://hotels-tn92.onrender.com/hotels/${hotelId}`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(updatedHotelData),
//         }
//       );
//       const data = await response.json();
//       fetchHotels();
//       setEditHotelId(null);
//     } catch (error) {
//       console.error("Error updating hotel:", error);
//     }
//   };

//   const deleteHotel = async (hotelId) => {
//     try {
//       const response = await fetch(
//         `https://hotels-tn92.onrender.com/hotels/${hotelId}`,
//         {
//           method: "DELETE",
//         }
//       );
//       const data = await response.json();
//       fetchHotels();
//     } catch (error) {
//       console.error("Error deleting hotel:", error);
//     }
//   };

//   return (
//     <div className="container">
//       <HotelForm
//         addNewHotel={addNewHotel}
//         updateHotel={updateHotel}
//         editHotelId={editHotelId}
//         hotels={hotels}
//       />
//       <HotelList
//         hotels={hotels}
//         editHotel={editHotel}
//         deleteHotel={deleteHotel}
//       />
//     </div>
//   );
// }

// export default Home;
// import React, { useState, useEffect } from "react";
// import HotelList from "../components/HotelList";
// import HotelForm from "../components/HotelForm";
// import "./Home.css";

// function Home() {
//   const [hotels, setHotels] = useState([]);
//   const [editHotelId, setEditHotelId] = useState(null);
//   const [search, setSearch] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("All");
//   const [priceSort, setPriceSort] = useState("asc");

//   useEffect(() => {
//     fetchHotels();
//   }, []);

//   const fetchHotels = async () => {
//     try {
//       const response = await fetch("https://hotels-tn92.onrender.com/hotels");
//       const data = await response.json();
//       setHotels(data);
//     } catch (error) {
//       console.error("Error fetching hotels:", error);
//     }
//   };

//   const addNewHotel = async (newHotelData) => {
//     try {
//       const response = await fetch("https://hotels-tn92.onrender.com/hotels", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newHotelData),
//       });
//       const data = await response.json();
//       fetchHotels();
//     } catch (error) {
//       console.error("Error adding hotel:", error);
//     }
//   };

//   const editHotel = (hotelId) => {
//     setEditHotelId(hotelId);
//   };

//   const updateHotel = async (hotelId, updatedHotelData) => {
//     try {
//       const response = await fetch(
//         `https://hotels-tn92.onrender.com/hotels/${hotelId}`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(updatedHotelData),
//         }
//       );
//       const data = await response.json();
//       fetchHotels();
//       setEditHotelId(null);
//     } catch (error) {
//       console.error("Error updating hotel:", error);
//     }
//   };

//   const deleteHotel = async (hotelId) => {
//     try {
//       const response = await fetch(
//         `https://hotels-tn92.onrender.com/hotels/${hotelId}`,
//         {
//           method: "DELETE",
//         }
//       );
//       const data = await response.json();
//       fetchHotels();
//     } catch (error) {
//       console.error("Error deleting hotel:", error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search by name..."
//           className="p-2 rounded border border-gray-300"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <select
//           className="ml-2 p-2 rounded border border-gray-300"
//           value={categoryFilter}
//           onChange={(e) => setCategoryFilter(e.target.value)}
//         >
//           <option value="All">All Categories</option>
//           <option value="Category1">Category 1</option>
//           <option value="Category2">Category 2</option>
//           {/* Add more categories as needed */}
//         </select>
//         <select
//           className="ml-2 p-2 rounded border border-gray-300"
//           value={priceSort}
//           onChange={(e) => setPriceSort(e.target.value)}
//         >
//           <option value="asc">Price Low to High</option>
//           <option value="desc">Price High to Low</option>
//         </select>
//       </div>

//       <HotelForm
//         addNewHotel={addNewHotel}
//         updateHotel={updateHotel}
//         editHotelId={editHotelId}
//         hotels={hotels}
//       />
//       <HotelList
//         hotels={hotels}
//         editHotel={editHotel}
//         deleteHotel={deleteHotel}
//         search={search}
//         categoryFilter={categoryFilter}
//         priceSort={priceSort}
//       />
//     </div>
//   );
// }

// export default Home;
import React, { useState, useEffect } from "react";
import HotelList from "../components/HotelList";
import HotelForm from "../components/HotelForm";
import "./Home.css";

function Home() {
  const [hotels, setHotels] = useState([]);
  const [editHotelId, setEditHotelId] = useState(null);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priceSort, setPriceSort] = useState("asc");

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await fetch("https://hotels-tn92.onrender.com/hotels");
      const data = await response.json();
      setHotels(data);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };

  const addNewHotel = async (newHotelData) => {
    try {
      const response = await fetch("https://hotels-tn92.onrender.com/hotels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newHotelData),
      });
      const data = await response.json();
      fetchHotels();
    } catch (error) {
      console.error("Error adding hotel:", error);
    }
  };

  const editHotel = (hotelId) => {
    setEditHotelId(hotelId);
  };

  const updateHotel = async (hotelId, updatedHotelData) => {
    try {
      const response = await fetch(
        `https://hotels-tn92.onrender.com/hotels/${hotelId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedHotelData),
        }
      );
      const data = await response.json();
      fetchHotels();
      setEditHotelId(null);
    } catch (error) {
      console.error("Error updating hotel:", error);
    }
  };

  const deleteHotel = async (hotelId) => {
    try {
      const response = await fetch(
        `https://hotels-tn92.onrender.com/hotels/${hotelId}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      fetchHotels();
    } catch (error) {
      console.error("Error deleting hotel:", error);
    }
  };

  return (
    <div className="container">
      <HotelForm
        addNewHotel={addNewHotel}
        updateHotel={updateHotel}
        editHotelId={editHotelId}
        hotels={hotels}
      />

      <div className="m-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        <input
          type="text"
          placeholder="Search by name..."
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Category1">Category 1</option>
          <option value="Category2">Category 2</option>
          {/* Add more categories as needed */}
        </select>
        <select
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
          value={priceSort}
          onChange={(e) => setPriceSort(e.target.value)}
        >
          <option value="asc">Price Low to High</option>
          <option value="desc">Price High to Low</option>
        </select>
      </div>

      <HotelList
        hotels={hotels}
        editHotel={editHotel}
        deleteHotel={deleteHotel}
        search={search}
        categoryFilter={categoryFilter}
        priceSort={priceSort}
      />
    </div>
  );
}

export default Home;
