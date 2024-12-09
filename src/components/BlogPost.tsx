import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function BlogPost() {
  return (
    <div>
      <div className="p-6 shadow-lg bg-white rounded-lg mt-8">  
          <h2 className="text-xl font-bold mb-2">Exploring new ways of decorating</h2>  
          <p className="text-gray-700 mb-4">  
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultricies. Morbi blandit cursus risus at ultricies in tempus imperdiet.  
          </p>  
          <Image  
            src="/blogpost.png"  
            alt="Decorating image"  
            width={500}  
            height={300}  
            className="mb-4 rounded"  
          />  
          <div className="flex justify-between items-center">  
            <div className="text-sm text-gray-500">  
              <span>Admin</span> &bull; <span>14 Oct 2022</span> &bull; <span>Wood</span>  
            </div>  
            <Link href="/blog-post-link" className="text-blue-500 hover:underline">  
              Read more  
            </Link>  
          </div>  
        </div>  
    </div>
  )
}

export default BlogPost
