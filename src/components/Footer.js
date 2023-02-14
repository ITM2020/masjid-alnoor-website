export default function Footer() {
  return (
    <footer className="font-body p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-500 sm:text-center">
        © 2023 <a href="" className="hover:underline">Islamic Society of St. Catharines</a>. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">Events</a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">Education</a>
        </li>
        <li>
          <a href="#" className="hover:underline">Contact</a>
        </li>
      </ul>
    </footer>
  )
}