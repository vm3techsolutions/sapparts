"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RecentBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/data/home/Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="mx-auto px-6 md:px-12 sm:py-12 py-8  bg-[#F6F8FC]/50">
      <div className="text-center mb-10">
        <h2 className="Heading text-center">Recent Blogs</h2>
        <p className="Paragraph text-center">
          Innovation is the USP of SAP Parts. Moreover it is our core value and
          we intend to proactively employ innovative thinking culture in all our
          operations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white   overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              width={800}
              height={400}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-[#0E509E] font-semibold text-xl mb-2 hover:underline">
                <Link href={blog.link}>{blog.title}</Link>
              </h3>
              <hr className="border-t-2  border-[#FACC48] w-full mb-4" />
              <p className="text-[#363636] text-md mb-5">{blog.description}</p>
              <Link
                href={blog.link}
                className="inline-block bg-[#0E509E] text-white px-5 py-2 rounded text-sm hover:bg-[#0c4586] transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
