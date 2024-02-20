"use client"
import Link from 'next/link'
import { useState } from 'react';


const data = [
  {
    di: 1,
    title: "home",
    href: "",
  },
  {
    di: 2,
    title: "Quiz",
    href: "quiz",
  },
  {
    di: 3,
    title: "Propoos",
    href: "",
  }
]
const dataTow = [
  {
    di: 4,
    title: "exercice",
    href: "",
  },
  {
    di: 5,
    title: "connecter",
    href: "",
  }
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  function toggelMenu() {
    setIsOpen((value) => !value)
  }
  return (
        <nav className="relative flex w-full flex-nowrap items-center justify-between py-2 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4 max-w-screen-xl mx-auto p-4">
          <div className="flex w-full flex-wrap items-center justify-between">

            {/* <!-- Hamburger button for mobile view --> */}
            <button
              className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
              type="button"
              onClick={toggelMenu}
              >
              {/* <!-- Hamburger icon --> */}
              <span className="[&>svg]:w-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7">
                  <path
                    fill-rule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </button>
        
            {/* <!-- navbar container --> */}
            <div
              className={`!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto ${isOpen ? '!flex' : "" } justify-between`}
              id="navbarSupportedContent2">
              {/* <!-- Left links --> */}
              <ul className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"f>
                {data.map((item) => 
                  <li key={item.id} className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1">
                    <Link href={`\\${item.href}`} className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400">
                      {item.title}
                    </Link>
                  </li>
                )}
              </ul>
              <ul className="list-style-none ml-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"f>
                {dataTow.map((item) => 
                  <li key={item.id} className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1">
                    <Link href={`\\${item.href}`} className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400">
                      {item.title}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
  )
}
