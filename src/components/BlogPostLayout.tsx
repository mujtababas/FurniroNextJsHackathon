export default function BlogPostLayout() {
    return (
      <section className="flex flex-col lg:flex-row gap-8 p-6">
        {/* Left Section: Main Blog Post */}
        <div className="lg:w-2/3 w-full">
          <h1 className="text-2xl font-bold mb-4">Going all-in with millennial design</h1>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam
            ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet.
          </p>
          <p className="text-gray-600 mb-4">
            Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc
            sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare
            aenean euismod elementum.
          </p>
          <button className="text-primary font-semibold hover:underline">
            Read more
          </button>
  
          {/* Blog Image */}
          <div className="mt-8">
            <img
              src="/Rectangle 68 (2).png"
              alt="Millennial Design"
              className="rounded-lg w-full"
              width={500}  
              height={300}
            />
          </div>
  
          {/* Post Meta */}
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
              <span>Handmade</span>
            </div>
          </div>
        </div>
  
        {/* Right Section: Recent Posts */}
        <div className="lg:w-1/3 w-full">
          <h2 className="text-lg font-semibold mb-4">Recent Posts</h2>
          <ul className="space-y-4">
            {[
              {
                title: "Going all-in with millennial design",
                date: "03 Aug 2022",
                image: "/Rectangle 69.png",
              },
              {
                title: "Exploring new ways of decorating",
                date: "03 Aug 2022",
                image: "/Rectangle 69 (1).png",
              },
              {
                title: "Handmade pieces that took time to make",
                date: "03 Aug 2022",
                image: "/Rectangle 69 (2).png",
              },
              {
                title: "Modern home in Milan",
                date: "03 Aug 2022",
                image: "/Rectangle 69 (3).png",
              },
              {
                title: "Colorful office redesign",
                date: "03 Aug 2022",
                image: "/Rectangle 69 (4).png",
              },
            ].map((post, index) => (
              <li key={index} className="flex items-center gap-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div>
                  <h3 className="text-sm font-medium">{post.title}</h3>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  