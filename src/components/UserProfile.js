import React from "react";

const MyAccountPage = () => {
  const checkOrders = () => {
    // Logic to navigate to the orders page
    console.log("Checking orders...");
  };

  const checkWishlist = () => {
    // Logic to navigate to the wishlist page
    console.log("Checking wishlist...");
  };

  const logout = () => {
    // Logic to log the user out
    console.log("Logging out...");
  };

  const resetPassword = () => {
    // Logic to initiate the password reset process
    console.log("Resetting password...");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg p-8 shadow-md md:w-96 w-full">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        {/* Add user details, such as name, email, etc. */}
        <p className="text-gray-600 mb-4">Name: John Doe</p>
        <p className="text-gray-600 mb-6">Email: john.doe@example.com</p>

        {/* Buttons in different sections for better organization */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Actions</h3>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-full mr-2"
            onClick={checkOrders}
          >
            Check Orders
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
            onClick={checkWishlist}
          >
            Wishlist
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Account</h3>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-full w-full md:w-auto"
            onClick={logout}
          >
            Logout
          </button>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Security</h3>
          <button
            className="bg-purple-500 text-white px-4 py-2 rounded-full w-full md:w-auto"
            onClick={resetPassword}
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyAccountPage;
