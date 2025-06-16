import React from "react";
import { Heart, ShoppingCart, Pencil, PackageCheck } from "lucide-react";

export default function Profile() {
  const user = {
    name: "Deepika",
    email: "deepika@gct.ac.in",
    phone: "+91 98765 43210",
    address: "123, Tech Street, Salem, India",
    avatar:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl">
        {/* Profile Info */}
        <div className="flex flex-col items-center">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-28 h-28 rounded-full border-4 border-blue-300 shadow-lg mb-4 object-cover"
          />
          <h1 className="text-3xl font-extrabold text-gray-800">{user.name}</h1>
          <p className="text-gray-500 text-sm">{user.email}</p>
        </div>

        {/* Contact Details */}
        <div className="mt-6 border-t pt-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            Contact Info
          </h2>
          <div className="text-gray-700 space-y-2">
            <p>
              <span className="font-medium">📞 Phone:</span> {user.phone}
            </p>
            <p>
              <span className="font-medium">🏠 Address:</span> {user.address}
            </p>
          </div>
        </div>

        {/* Order Summary and Favorites */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-center">
          <div className="bg-blue-100 p-4 rounded-xl shadow">
            <PackageCheck className="mx-auto text-blue-600" size={32} />
            <h3 className="font-semibold text-gray-800 mt-2">Orders</h3>
            <p className="text-sm text-gray-600">12 placed</p>
          </div>
          <div className="bg-pink-100 p-4 rounded-xl shadow">
            <Heart className="mx-auto text-pink-600" size={32} />
            <h3 className="font-semibold text-gray-800 mt-2">Favourites</h3>
            <p className="text-sm text-gray-600">8 items saved</p>
          </div>
        </div>

        {/* Edit Profile Button */}
        <div className="mt-6 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition duration-300 shadow-md flex items-center justify-center gap-2">
            <Pencil size={18} /> Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
