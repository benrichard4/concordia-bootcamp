import request, { GET } from "./request";

const CONTENTFUL_URL = `https://cdn.contentful.com/spaces/6fmuqje9nkz0/environments/master/entries?access_token=yNcU-W6qITUmC18PRtK6Gyy32Vy7oGLRAWzW-2zyUaM&content_type=blog-entry`;

// TODO: Update the method below to utilize contentful's pagination functionality to return only 6 entries
//       NOTE: remember on "load more" it's 6 *additional* entries
export const getAllArticles = async () => {
  try {
    const response = await request(GET, CONTENTFUL_URL);

    return response.items;
  } catch (e) {
    console.log("getAllArticles failed:", e);
  }
};

//function that queries for limit and skip to only display 6 articles on a page, until load more is clicked.
export const getPaginatedArticles = async (limit, skip) => {
  //new variable for url with quries concatenated to the end, taking in limit and skip
  const QUERYURL = CONTENTFUL_URL.concat(`&limit=${limit}&skip=${skip}`);
  console.log(QUERYURL);
  try {
    const response = await request(GET, QUERYURL);

    return response.items;
  } catch (e) {
    console.log("getAllArticles failed:", e);
  }
};
// TODO: Using the category argument, update the method below by making a GET
//       request and returning entries from contentful filtered by the category.
//       NOTE: this method will need to be connected to ../contexts/Store!
export const getArticlesByCategory = async (category) => {
  return [];
};

// Possibly useful documentation:
// - https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters
// - https://www.contentful.com/developers/docs/references/content-management-api/#/reference/entries/entries-collection/get-all-entries-of-a-space/console
// - https://www.contentful.com/developers/docs/references/content-delivery-api/#/introduction/collection-resources-and-pagination
