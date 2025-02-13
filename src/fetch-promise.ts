/** The fetch() method starts the process of fetching a resource
 * from the network. It returns a promise that eventually resolves
 * to the Response to that request,
 **/
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

// logging the promise to aid in understanding
console.log(fetchPromise1);

// The promise is resolved when the response is received
fetchPromise1.then((response: Response) => {
  console.log(`Received response? ${response.ok ? "yes" : "no"}`);
  console.log(`Response Status: ${response.status}`);
});

// sequential execution; starts right after fetch() is called
console.log("Started request…");
for (let i = 0; i < 100; i++) {
  console.log("do other things ...");
}

console.log("End of script");

console.log("a lot of other things ...");
