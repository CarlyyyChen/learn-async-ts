// A type of the JSON data returned by the Products API
interface Product {
  name: string;
  price: number;
  image: string;
  type: string;
}

/** Call to fetch() returns a promise 
which is resolved when the response is received
**/
const fetchPromise2: Promise<Response> = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
//fetch promise is resolved once the HTTP response headers are received.
// However, at this point, the body of the response is not yet available.
// parding the response body into JSON will also be async

/**
 * The promise is resolved when the response is received
 * The json from the response is retrieved asynchronously
 * Once the json is received, the promise is resolved
 * The resolved promise is handled by logging the product names
 * This is an illustration of callback hell
 */
fetchPromise2.then((response: Response) => {
  const jsonPromise = response.json() as Promise<Product[]>; // this is also async
  jsonPromise.then((products: Product[]) => {
    products.forEach((product: Product) => {
      console.log(product.name);
    });
  });
});

// Logging a message to indicate fetching has started
console.log("Fetching products ... ");
