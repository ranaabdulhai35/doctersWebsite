import React from 'react'

function SearchBar() {
  return (
    <div><div class="flex flex-1 items-center justify-center p-6">
    <div class="w-full max-w-lg">
        <form class="mt-5 sm:flex sm:items-center">
            <input id="q" name="q" class="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" placeholder="Keyword" type="search" autofocus="" value=""/><button type="submit" class="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Search</button>
        </form>
    </div>
</div></div>
  )
}

export default SearchBar