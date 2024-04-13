import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 px-4 sm:px-8">
      <div className="container mx-auto flex flex-col sm:flex-row gap-4 justify-between" >
        <div className="flex justify-start items-start">
          <h1 className="font-bold text-3xl tracking-wide text-gray-800">
            LOGO
          </h1>
        </div>

        <div className='flex flex-col sm:flex-row gap-12'>
          <div className="inline-block">
            <h4 className="text-lg font-bold mb-2">Contact Us</h4>
            <p>123 Street, City</p>
            <p>Phone: 123-456-7890</p>
            <p>Email: example@example.com</p>
          </div>

          <div className="inline-block">
            <h4 className="text-lg font-bold mb-2">Our Items</h4>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4 </li>
              <li>Item 5</li>
            </ul>
          </div>

          <div className="inline-block">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>

      <div className=" text-center lg:text-left mx-14 mt-8 text-sm">
        <p>Created by Aditya Singh &copy; 2024</p>
        <p>
          <a href="#" className="mr-2">
            Terms and Conditions
          </a>
          <a href="#">Privacy</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
