export default function BlogPostSection() {
    return (
      <section className="flex flex-col lg:flex-row gap-8 items-start p-6">
        {/* Left Section: Image and Details */}
        <div className="w-full lg:w-2/3">
          <img
            src="/blog.png"
            alt="Blog post"
            className="rounded-lg w-full"
          />
          <div className="flex items-center gap-4 text-gray-500 text-sm mt-4">
            <div className="flex items-center gap-1">
              <span className="material-icons">person</span>
              <span>Admin</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-icons">calendar_today</span>
              <span>14 Oct 2022</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-icons">category</span>
              <span>Wood</span>
            </div>
          </div>
        </div>
  
        {/* Right Section: Search and Categories */}
        <div className="w-full lg:w-1/3">
          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-lg p-2 pl-4 pr-10 focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <span className="material-icons">search</span>
            </button>
          </div>
  
          {/* Categories */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex justify-between">
                <span>Crafts</span>
                <span>2</span>
              </li>
              <li className="flex justify-between">
                <span>Design</span>
                <span>8</span>
              </li>
              <li className="flex justify-between">
                <span>Handmade</span>
                <span>7</span>
              </li>
              <li className="flex justify-between">
                <span>Interior</span>
                <span>1</span>
              </li>
              <li className="flex justify-between">
                <span>Wood</span>
                <span>6</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  