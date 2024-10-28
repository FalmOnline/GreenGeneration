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
<<<<<<< HEAD
=======

  // Log the featured image file if it exists
  console.log(postData.featuredImage?.node?.mediaDetails?.file);
  
  // Get the dynamic part of the URL
  const urlImage = featuredImage?.node?.mediaDetails?.file;
  
  // Combine the base URL and dynamic URL using a template literal
  const imageUrl = `https://greenheroes.falm.ro/wp-content/uploads/${urlImage || ''}`;
  
  console.log(imageUrl);
>>>>>>> 757edd9982a5392b8d76de566bd6b791274a38ce

  // Log the featured image file if it exists
  console.log(postData.featuredImage?.node?.mediaDetails?.file);
  
  // Get the dynamic part of the URL
  const urlImage = featuredImage?.node?.mediaDetails?.file;
  
  // Combine the base URL and dynamic URL using a template literal
  const imageUrl = `https://greengeneration.falm.ro/wp-content/uploads/${urlImage || ''}`;
  
  console.log(imageUrl);

  return (
    <div className="mb-12">
      <article>
      <section 
          className="hero-area h-[60vh] min-h-[30rem] bg-cover bg-center flex items-center relative mb-12 flex-col justify-center p-2 xs:p-8" style={{ backgroundImage: `url(${imageUrl})` }}>
             <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="lg:max-w-screen-lg xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto relative z-10">
                <h1 className="text-white">{title}</h1>
                <div className="pb-4 text-slate-100 z-10">
                  Publicat de GreenHeroes, în data de <Date dateString={ modified } />
                </div>
              </div>
          </section>
          <section className="md:container lg:max-w-screen-lg xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto flex flex-col-reverse lg:flex-row px-2 lg:px-4 xl:px-0">


          {/* <div dangerouslySetInnerHTML={{ __html: excerpt }} /> */}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </section>
      </article>
    </div>
  );
}