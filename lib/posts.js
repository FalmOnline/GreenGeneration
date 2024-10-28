import graphqlRequest from "./graphqlRequest";


export async function getPostList(endCursor = null, taxonomy = null) {
  let condition = endCursor 
    ? `after: "${endCursor}", first: 9, where: {orderby: {field: DATE, order: DESC}}` 
    : `first: 9, where: {orderby: {field: DATE, order: DESC}}`;

  if (taxonomy) {
    condition = endCursor 
      ? `after: "${endCursor}", first: 9, where: {orderby: {field: DATE, order: DESC}, ${taxonomy.key}: "${taxonomy.value}"}` 
      : `first: 9, where: {orderby: {field: DATE, order: DESC}, ${taxonomy.key}: "${taxonomy.value}"}`;
  }  

  const query = {
    query: `
      query getAllPosts {
        posts(${condition}) {
          nodes {
            title
            excerpt(format: RENDERED)
            date
            slug
            featuredImage {
              node {
                mediaDetails {
                  file
                  sizes {
                    sourceUrl
                    width
                    height
                  }
                }
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
          }
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
        }
      }
    `
  };

  const resJson = await graphqlRequest(query);
  const { nodes, pageInfo } = resJson.data.posts;

  return { nodes, pageInfo };
}

export async function getSinglePost(slug) {
  const query = {
    query: `query getSinglePost {
            post(id: "${slug}", idType: SLUG) {
              content(format: RENDERED)
              date
              excerpt(format: RENDERED)
              modified
              slug
              title(format: RENDERED)
              featuredImage {
                node {
                  mediaDetails {
                    sizes {
                      sourceUrl
                      width
                      height
                      name
                    }
                    file
                  }
                }
              }
              categories {
                nodes {
                  name
                  slug
                }
              }
            }
          }`
    };

    const resJson = await graphqlRequest (query);
    const singlePost = resJson.data.post;

    return singlePost;
}

export async function getPostSlugs() {
  const query = {
    query: `query getPostSlugs {
              posts {
                nodes {
                  slug
                }
              }
            }`
  }
  const resJson = await graphqlRequest(query);
  const slugs = resJson.data.posts.nodes;

  return slugs;
}

export async function getCategorySlugs() {
  const query = {
    query: `query getCategorySlugs {
              categories {
                nodes {
                  slug
                  name
                  link
                }
              }
            }`
  };

  const resJson = await graphqlRequest(query);
  const categories = resJson.data.categories.nodes;

  return categories;

}

export async function getCategoryDetails(categoryName) {
  const query ={
    query: `query getCategoryDetails {
              category(id: "${categoryName}", idType: SLUG) {
                count
                name
                slug
              }
            }`
  };
  
  const resJson = await graphqlRequest(query);
  const categoryDetails = resJson.data.category;

  return categoryDetails;
}