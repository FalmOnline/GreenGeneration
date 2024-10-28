"use client";

import { useState, useEffect } from "react";
import { getPostList, getCategorySlugs } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";
import Date from "../components/Date";
import LoadMore from "../components/LoadMore";

export default function Blog() {
const [posts, setPosts] = useState([]);
const [categories, setCategories] = useState([]);
const [loadMorePosts, setLoadMorePosts] = useState([]);

useEffect(() => {
// Check if posts, categories, and load more posts are already stored in local storage
const cachedData = localStorage.getItem("blogData");
if (cachedData) {
const { cachedPosts, cachedCategories, cachedLoadMorePosts } = JSON.parse(cachedData);
setPosts(cachedPosts);
setCategories(cachedCategories);
setLoadMorePosts(cachedLoadMorePosts);
} else {
fetchData();
}
}, []);

async function fetchData() {
const allPosts = await getPostList();
const allCategories = await getCategorySlugs();
setPosts(allPosts);
setCategories(allCategories);
// Store posts, categories, and load more posts in local storage
localStorage.setItem(
"blogData",
JSON.stringify({ cachedPosts: allPosts, cachedCategories: allCategories, cachedLoadMorePosts: [] })
);
}

async function fetchMorePosts() {
const morePosts = await getMorePosts(); // Replace getMorePosts with your actual function to fetch more posts
setLoadMorePosts(morePosts);
// Update the cached load more posts in local storage
const cachedData = localStorage.getItem("blogData");
if (cachedData) {
const { cachedPosts, cachedCategories } = JSON.parse(cachedData);
localStorage.setItem(
"blogData",
JSON.stringify({ cachedPosts, cachedCategories, cachedLoadMorePosts: morePosts })
);
}
}

if (posts.length === 0) {
return <div className="bg-gh-green flex items-center justify-center mb-12  flex-col">Încarcăm articolele tale...</div>;
}

return (
<main className="mb-12">
{/* Banner */}
<div className="bg-gh-green flex items-center justify-center mb-12  flex-col">
<div className="md:container lg:max-w-screen-lg xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto h-[380px] flex flex-col justify-center p-2 xs:p-8">
<h1>Resurse educaționale</h1>
</div>
</div>

<div className="md:container lg:max-w-screen-lg xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto flex flex-col-reverse lg:flex-row px-2 lg:px-4 xl:px-0">
{/* Render the categories menu */}
    <nav className="w-full lg:w-3/12 bg-gg-bej-dark lg:bg-gg-bej rounded-md lg:rounded-none pb-8 px-4 lg:pb-0 lg:px-0">
        <h4 className="text-gg-dark-grey text-lg font-bold mb-4 text-center lg:text-left">Categorii:</h4>
        <ul className="flex [&>li]:list-none [&>li>a]:no-underline flex-col">
            {categories.map((category) => (
            <li className="ml-0 mr-0 text-center lg:text-left" key={category.slug}>
            <Link href={`/blog/category/${category.slug}`}>
            {category.name}
            </Link>
            </li>
            ))}
        </ul>
    </nav>
    <section className="lg:w-9/12 mb-16 lg:mb-0">
    {/* Render the posts */}
    {posts.nodes.map((post) => (
        <div key={post.slug} className="grid grid-cols-1 px-4 lg:px-0 lg:grid-cols-5 lg:gap-6 mb-12">
            <div className="col-span-2">
            {post.featuredImage && post.featuredImage.node && post.featuredImage.node.mediaDetails && post.featuredImage.node.mediaDetails.sizes && post.featuredImage.node.mediaDetails.sizes.length > 0 && (
            <Link className="no-underline" href={`/blog/${post.slug}`}><Image className="w-full"
            src={post.featuredImage.node.mediaDetails.sizes[0].sourceUrl}
            alt={post.title}
            width={post.featuredImage.node.mediaDetails.sizes[0].width}
            height={post.featuredImage.node.mediaDetails.sizes[0].height}
            /></Link>
            )}
            </div>
            <div className="col-span-3">
                <h2 className="py-2 leading-none text-3xl xs:text-4xl md:text-5xl">
                <Link className="no-underline" href={`/blog/${post.slug}`}>
                {post.title}
                </Link>
            </h2>
            <div className="flex gap-1 xs:gap-4 pb-2 xs:items-center flex-col xs:flex-row">
                <div className="text-gh-medium-grey text-xs sm:text-sm">
                Publicat în <Date dateString={post.date} />
                </div>
                <div className="text-gh-medium-grey hidden xs:block">&#9675;</div>
                <div className="text-gh-medium-grey text-xs sm:text-sm">
                În categoria {
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
    <div className="px-4 text-center md:px-0 md:text-left">
        <LoadMore  posts={posts} setPosts={setPosts} fetchMorePosts={fetchMorePosts} />
    </div>
    </section>
</div>
</main>
);
}
