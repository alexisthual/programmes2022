import React from "react";

import AppContext from "src/context/AppContext";

const Search: React.FC<unknown> = () => {
  const { search, deleteContextKey, setContext } = React.useContext(AppContext);

  return (
    <div className="mt-1 relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 p-2 flex items-center pointer-events-none">
        <span className="text-gray-500 sm:text-sm h-5 w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
      </div>
      <input
        type="text"
        name="price"
        id="price"
        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-2 sm:text-sm border-gray-300 rounded-md"
        placeholder="Rechercher..."
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          event.preventDefault();
          if (event.target.value === ``) {
            deleteContextKey(`search`);
          } else {
            setContext({
              search: event.target.value,
            });
          }
        }}
        value={search}
      />
    </div>
  );
};

export default Search;
