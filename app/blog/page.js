"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getPostList, getCategorySlugs } from "@/lib/posts"; // Import getCategorySlugs
import Date from "../components/Date";
import LoadMore from "../components/LoadMore";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]); // State to hold categories

  useEffect(() => {
    async function fetchData() {
      const allPosts = await getPostList();
      const allCategories = await getCategorySlugs(); // Fetch categories
      setPosts(allPosts);
      setCategories(allCategories); // Set categories in state
    }
    fetchData();
  }, []);

  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      {/* Banner */}
      <div className="bg-gh-green flex items-center justify-center mb-12  flex-col">
        <div className="container lg:max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto h-[380px] flex flex-col justify-center p-8">
          <h1>Resurse educationale</h1>
        </div>
      </div>

      <div className="container lg:max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto flex">
      {/* Render the categories menu */}        
        <nav className="w-3/12">
          <ul className="flex [&>li]:list-none flex-col">
            {categories.map((category) => (
              <li className="ml-0 mr-0" key={category.slug}>
                <Link href={`/blog/category/${category.slug}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-9/12">
          {/* Render the posts */}
          {posts.nodes.map((post) => (
            <div key={post.slug} className="grid grid-cols-5 gap-6 mb-4">
              <div className="col-span-2">
                {post.featuredImage && post.featuredImage.node && post.featuredImage.node.mediaDetails && post.featuredImage.node.mediaDetails.sizes && post.featuredImage.node.mediaDetails.sizes.length > 0 && (
                  <Image className="w-full"
                    src={post.featuredImage.node.mediaDetails.sizes[0].sourceUrl}
                    alt={post.title}
                    width={post.featuredImage.node.mediaDetails.sizes[0].width}
                    height={post.featuredImage.node.mediaDetails.sizes[0].height}
                  />
                )}
              </div>
              <div className="col-span-3">
                <h2 className="py-2 leading-none text-5xl">
                  <Link className="no-underline" href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <div className="flex gap-4 pb-2">
                  <div className="text-gh-medium-grey">
                    Published on <Date dateString={post.date} />
                  </div>
                  <div className="text-gh-medium-grey">&#9675;</div>
                  <div className="text-gh-medium-grey">
                    Posted under {
                      post.categories.nodes.map((category) => (
                        <Link className="text-gh-medium-grey" href={`/blog/category/${category.slug}`} key={category.slug}>{category.name}</Link>
                      ))
                    }
                  </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>

              </div>
            </div>
          ))}
          <LoadMore posts={posts} setPosts={setPosts} />
        </div>
      </div>
    </main>
  );
}
