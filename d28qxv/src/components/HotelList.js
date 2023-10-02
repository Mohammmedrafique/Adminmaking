// // src/components/HotelList.js
// import React from "react";

// function HotelList({ hotels, editHotel, deleteHotel }) {
//   return (
//     <div className="hotel-list">
//       {hotels.map((hotel) => (
//         <div key={hotel.id} className="hotel-item">
//           <img src={hotel.image} alt={hotel.name} />
//           <div className="hotel-details">
//             <h3>{hotel.name}</h3>
//             <p>{hotel.description}</p>
//             <p>Price: ${hotel.price}</p>
//             <p>Rating: {hotel.rating}</p>
//             <div className="hotel-actions">
//               <button onClick={() => editHotel(hotel.id)}>Edit</button>
//               <button onClick={() => deleteHotel(hotel.id)}>Delete</button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default HotelList;
// src/components/HotelList.js

import React from "react";

function HotelList({
  hotels,
  editHotel,
  deleteHotel,
  search,
  categoryFilter,
  priceSort,
}) {
  // Filter hotels based on search and category filter
  const filteredHotels = hotels.filter((hotel) => {
    const nameMatches = hotel.name.toLowerCase().includes(search.toLowerCase());
    const categoryMatches =
      categoryFilter === "All" || hotel.category === categoryFilter;
    return nameMatches && categoryMatches;
  });

  // Sort hotels based on price
  const sortedHotels = [...filteredHotels].sort((a, b) => {
    if (priceSort === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <div className="hotel-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4">
      {sortedHotels.map((hotel) => (
        <div
          key={hotel.id}
          className="hotel-item p-4 border rounded-lg shadow-md flex flex-col"
        >
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <div className="flex-grow">
            <h3 className="text-lg font-semibold">{hotel.name}</h3>
            <p className="text-sm text-gray-700 line-clamp-2 mb-2">
              {hotel.description}
            </p>
            <p className="text-green-500 font-semibold text-lg">
              Price: ${hotel.price}
            </p>
            <p className="text-blue-500 font-semibold mb-4">
              Rating: {hotel.rating}
            </p>
          </div>
          <div className="hotel-actions">
            <button
              onClick={() => editHotel(hotel.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => deleteHotel(hotel.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HotelList;
