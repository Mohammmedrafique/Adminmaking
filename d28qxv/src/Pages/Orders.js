import React, { useState, useEffect } from "react";
import "./Home.css";

function Orders() {
  const [hotels, setHotels] = useState([]);
  const [editHotelId, setEditHotelId] = useState(null);
  const [search, setSearch] = useState("");

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

  const editHotel = (hotelId) => {
    setEditHotelId(hotelId);
  };

  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-10 p-4">
      <input
        type="text"
        placeholder="Search by name..."
        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="border p-4">Serial Number</th>
              <th className="border p-4">Name</th>
              <th className="border p-4">Category</th>
              <th className="border p-4">Price</th>
              <th className="border p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredHotels.map((hotel, index) => (
              <tr key={hotel.id}>
                <td className="border p-4">{index + 1}</td>
                <td className="border p-4">{hotel.name}</td>
                <td className="border p-4">{hotel.category}</td>
                <td className="border p-4">${hotel.price}</td>
                <td className="border p-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => editHotel(hotel.id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
