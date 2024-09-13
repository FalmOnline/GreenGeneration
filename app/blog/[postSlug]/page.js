import { getSinglePost, getPostSlugs } from "@/lib/posts";
import Date from "@/app/components/Date";

export async function generateStaticParams() {
  const postSlugs = await getPostSlugs();
  return postSlugs.map((s) => ({ postSlug: s.slug }));
}

export default async function Post({ params }) {
  const { postSlug } = params;
  const postData = await getSinglePost(postSlug);

  if (!postData) {
    return <div className="hero-area h-[60vh] min-h-[30rem] bg-cover bg-center flex items-center relative mb-12">Loading...</div>;
  }

  const { title, excerpt, content, featuredImage, modified } = postData;
  // Select the largest size available, assuming "full" is the name of the largest size
  const largeImage = featuredImage?.node?.mediaDetails?.sizes?.find(size => size.name === 'full');
  const imageUrl = largeImage?.sourceUrl || '';


  return (
    <div className="mb-12">
      <article>
      <section 
          className="hero-area h-[60vh] min-h-[30rem] bg-cover bg-center flex items-center relative mb-12" style={{ backgroundImage: `url(${imageUrl})` }}>
             <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="lg:max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto relative z-10">
                <h1 className="text-white">{title}</h1>
                <div className="pb-4 text-slate-100 z-10">
                  Publicat de GreenHeroes, în data de <Date dateString={ modified } />
                </div>
              </div>
          </section>
          <section className="lg:max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto">


          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </section>
      </article>
    </div>
  );
}