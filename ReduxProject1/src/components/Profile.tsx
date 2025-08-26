import { useSelector } from "react-redux";

type UserType = {
    name:string, 
    profession:string, 
    profile:string,
    number:string, 
    email:string, 
    address:string
}

export default function Profile() {
    const user = useSelector((state:{user:{value:UserType}})=>state.user.value)
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full shadow-md"
            src={user.profile}
            alt="Profile"
          />
          <h2 className="mt-4 text-xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-gray-500">{user.profession}</p>
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
            <span className="text-gray-800">{user.email}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600">Phone</span>
            <span className="text-gray-800">{user.number}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600">Location</span>
            <span className="text-gray-800">{user.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
