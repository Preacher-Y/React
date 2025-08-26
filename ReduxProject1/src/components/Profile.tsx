export default function Profile() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full shadow-md"
            src="https://i.pravatar.cc/150?img=32"
            alt="Profile"
          />
          <h2 className="mt-4 text-xl font-semibold text-gray-800">Yves Sheja</h2>
          <p className="text-gray-500">Full Stack Engineer</p>
          <div className="mt-4 flex space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Edit Profile
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
              Logout
            </button>
          </div>
        </div>
        <div className="mt-6 space-y-2">
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600">Email</span>
            <span className="text-gray-800">yves@example.com</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600">Phone</span>
            <span className="text-gray-800">+250 788 123 456</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600">Location</span>
            <span className="text-gray-800">Kigali, Rwanda</span>
          </div>
        </div>
      </div>
    </div>
  );
}
