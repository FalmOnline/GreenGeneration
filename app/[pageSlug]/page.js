import { getSinglePost, getPostSlugs } from "@/lib/posts";
import Date from "@/app/components/Date";

export async function generateStaticParams() {
  const postSlugs = await getPostSlugs();
  return postSlugs.map((s) => ({ postSlug: s.slug }));
}

export default async function Page({ params }) {
  const { postSlug } = params;
  const postData = await getSinglePost(postSlug);

  if (!postData) {
    return <div>Loading...</div>;
  }

  const { title, excerpt, content, featuredImage, modified } = postData;
  // Select the largest size available, assuming "full" is the name of the largest size
  const largeImage = featuredImage?.node?.mediaDetails?.sizes?.find(size => size.name === '2048x2048');
  const imageUrl = largeImage?.sourceUrl || '';


  return (
    <div>
      <article>
      <section 
          className="hero-area h-[60vh] min-h-[30rem] bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
          </section>
          <section>
          <h1>{title}</h1>
          <div className="pb-4 text-slate-100 z-10">
            Posted by Green Generation, last updated on <Date dateString={ modified } />
          </div>
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </section>
      </article>
    </div>
  );
}