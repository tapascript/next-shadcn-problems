"use client";

export const UserList = () => {
  const usersFromStore = JSON.parse(window.localStorage.getItem("users")) || [];

  return (
    <div>
      <h2 className="text-2xl font-extrabold mb-3">Registered Users</h2>
      {usersFromStore.length === 0 ? (
        <p className="bg-gray-200 p-2 text-xl">No registered users found!!!</p>
      ) : (
        <ul>
          {usersFromStore.map((user) => (
            <li className="my-1" key={user.email}>
              {user.name}({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
