import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="mx-auto flex justify-center relative">
        <div className="absolute inset-0 w-[55%] h-96 bg-gray-300 z-10">
          <div className="absolute inset-0 flex justify-center items-center">
            <p className="text-white text-lg p-2 sm:p-8 mr-4 sm:mr-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              minima.
            </p>
          </div>
        </div>
        <div className="absolute right-0 w-[50%] h-80 my-auto mt-8 bg-gray-100 z-20">
          {/* Right Div */}
        </div>
      </div>

      <section className="container mx-auto my-8 px-4 mt-[27rem] ">
        <div className="">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            elit sed justo luctus suscipit. Phasellus bibendum convallis sapien,
            eget ultricies libero pulvinar non. Nam et erat a mauris laoreet
            dictum ut eget arcu. Nulla facilisi.
          </p>
        </div>
      </section>
      <section className="container mx-auto my-12 px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="flex flex-col items-center mb-4" key={index}>
              <div className="rounded-full bg-gray-300 w-20 sm:w-40 h-20 sm:h-40 flex justify-center items-center mb-2">
                <img
                  src={`https://picsum.photos/200/200?random=${index}`}
                  alt={`Profile ${index + 1}`}
                  className="rounded-full w-full h-full"
                />
              </div>
              <span>John Doe</span>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto my-12 flex justify-center bg-gray-100 p-12">
        <div className="container flex flex-col sm:flex-row justify-between">
          <div className="">
            <h2 className="text-3xl font-bold mb-4">For Franchise Inquiry</h2>
            <p className="text-lg mb-4">
              Have questions or need assistance? Feel free to reach out to us!
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-gray-500 text-white py-4 px-4 rounded-sm hover:bg-gray-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
