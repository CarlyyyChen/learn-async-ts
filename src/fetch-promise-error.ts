// a type for the products from the API
interface Product {
  name: string;
  price: number;
  image: string;
  type: string;
}

// Call to fetch() throws an error due to a bad URL
const fetchPromise3 = fetch(
  "https://mdn.github.io/learningarea/javascript/apis/fetching-data/can-store/products.json"
);

/**
 * The promise is resolved when the response is received
 * The json from the response is retrieved asynchronously
 * Once the json is received, the promise is resolved
 * The resolved promise is handled by logging the product names
 * If the response is not ok, an error is thrown
 * This is an illustration of error handling
 */
fetchPromise3
  .then((response: Response) => {
    if (response.ok) {
      return response.json() as Promise<Product[]>;
    }
    throw new Error(`Bad Response : ${response.status}`);
  })
  .then((products: Product[]) => {
    products.forEach((product: Product) => {
      console.log(product.name);
    });
  })
  .catch((error) => {
    // here's a single catch for both then blocks
    // can have multiple catch if want to catch different types of errors
    console.error(`Failed to get products: ${error}`);
  });

console.log("Chaining promises ... ");
