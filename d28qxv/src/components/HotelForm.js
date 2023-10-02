// // src/components/HotelForm.js
// import React, { useState, useEffect } from "react";

// function HotelForm({ addNewHotel, updateHotel, editHotelId, hotels }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     image: "",
//     price: "",
//     rating: ""
//   });

//   useEffect(() => {
//     if (editHotelId !== null) {
//       const hotelToEdit = hotels.find((hotel) => hotel.id === editHotelId);
//       if (hotelToEdit) {
//         setFormData(hotelToEdit);
//       }
//     } else {
//       setFormData({
//         name: "",
//         description: "",
//         image: "",
//         price: "",
//         rating: ""
//       });
//     }
//   }, [editHotelId, hotels]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editHotelId !== null) {
//       updateHotel(editHotelId, formData);
//     } else {
//       addNewHotel(formData);
//     }
//     setFormData({
//       name: "",
//       description: "",
//       image: "",
//       price: "",
//       rating: ""
//     });
//   };

//   return (
//     <div className="form">
//       <h2>{editHotelId !== null ? "Edit Hotel" : "Add a New Hotel"}</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             required
//           ></textarea>
//         </div>

//         <div className="form-group">
//           <label htmlFor="image">Image URL:</label>
//           <input
//             type="text"
//             id="image"
//             name="image"
//             value={formData.image}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="price">Price:</label>
//           <input
//             type="number"
//             id="price"
//             name="price"
//             value={formData.price}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="rating">Rating:</label>
//           <input
//             type="number"
//             id="rating"
//             name="rating"
//             value={formData.rating}
//             onChange={handleInputChange}
//             required
//             min="1"
//             max="5"
//           />
//         </div>

//         <input
//           type="submit"
//           value={editHotelId !== null ? "Update Hotel" : "Add Hotel"}
//         />
//       </form>
//     </div>
//   );
// }

// export default HotelForm;
// import React, { useState, useEffect } from "react";

// function HotelForm({ addNewHotel, updateHotel, editHotelId, hotels }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     image: "",
//     price: "",
//     rating: "",
//   });

//   useEffect(() => {
//     if (editHotelId !== null) {
//       const hotelToEdit = hotels.find((hotel) => hotel.id === editHotelId);
//       if (hotelToEdit) {
//         setFormData(hotelToEdit);
//       }
//     } else {
//       setFormData({
//         name: "",
//         description: "",
//         image: "",
//         price: "",
//         rating: "",
//       });
//     }
//   }, [editHotelId, hotels]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editHotelId !== null) {
//       updateHotel(editHotelId, formData);
//     } else {
//       addNewHotel(formData);
//     }
//     setFormData({
//       name: "",
//       description: "",
//       image: "",
//       price: "",
//       rating: "",
//     });
//   };

//   return (
//     <div className="form p-4 md:p-8 lg:p-12 bg-white rounded shadow-md">
//       <h2 className="text-2xl mb-4">
//         {editHotelId !== null ? "Edit Hotel" : "Add a New Hotel"}
//       </h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label
//             htmlFor="name"
//             className="block text-sm font-medium text-gray-600"
//           >
//             Name:
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//             className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="description"
//             className="block text-sm font-medium text-gray-600"
//           >
//             Description:
//           </label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             required
//             className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
//           ></textarea>
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="image"
//             className="block text-sm font-medium text-gray-600"
//           >
//             Image URL:
//           </label>
//           <input
//             type="text"
//             id="image"
//             name="image"
//             value={formData.image}
//             onChange={handleInputChange}
//             required
//             className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="price"
//             className="block text-sm font-medium text-gray-600"
//           >
//             Price:
//           </label>
//           <input
//             type="number"
//             id="price"
//             name="price"
//             value={formData.price}
//             onChange={handleInputChange}
//             required
//             className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="rating"
//             className="block text-sm font-medium text-gray-600"
//           >
//             Rating (1-5):
//           </label>
//           <input
//             type="number"
//             id="rating"
//             name="rating"
//             value={formData.rating}
//             onChange={handleInputChange}
//             required
//             min="1"
//             max="5"
//             className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
//         >
//           {editHotelId !== null ? "Update Hotel" : "Add Hotel"}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default HotelForm;
import React, { useState, useEffect } from "react";

function HotelForm({ addNewHotel, updateHotel, editHotelId, hotels }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    rating: "",
  });

  useEffect(() => {
    if (editHotelId !== null) {
      const hotelToEdit = hotels.find((hotel) => hotel.id === editHotelId);
      if (hotelToEdit) {
        setFormData(hotelToEdit);
      }
    } else {
      setFormData({
        name: "",
        description: "",
        image: "",
        price: "",
        rating: "",
      });
    }
  }, [editHotelId, hotels]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editHotelId !== null) {
      updateHotel(editHotelId, formData);
    } else {
      addNewHotel(formData);
    }
    setFormData({
      name: "",
      description: "",
      image: "",
      price: "",
      rating: "",
    });
  };

  return (
    <div className="p-4 md:p-8 lg:p-12 bg-white rounded shadow-md">
      <h2 className="text-2xl mb-4">
        {editHotelId !== null ? "Edit Hotel" : "Add a New Hotel"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="name" className="text-gray-600 font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="text-gray-600 font-medium">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="text-gray-600 font-medium">
            Image URL:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="text-gray-600 font-medium">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="text-gray-600 font-medium">
            Rating (1-5):
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            required
            min="1"
            max="5"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
        >
          {editHotelId !== null ? "Update Hotel" : "Add Hotel"}
        </button>
      </form>
    </div>
  );
}

export default HotelForm;
