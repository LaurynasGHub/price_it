## TODO List:

• Just a test to see if changes are tracked.

• Add descriptions to profile page, move how to use app there.

• Work on API- it's slow. Maybe remove something so it is fetched only when necessary.

• Check maybe it's possible to get price from Lidl and Norfa. So far it is not possible. Atleast get their sales brochures.

• Check if it's possible to add Bottlery for price checking.

• Add age confirmation.

• Add separate search frequency checker for alcohol.

• Add a captcha if user tries to log in too many times.

• Add price checker - user can select products that interest them and the price checker follows the products prices. It notifies when product is on sale or gets to a certain price that is selected by a user. THIS FEATURE NEEDS A SERVER.

• Add SALE page. Get all the brochures with sales, show what is on sale etc.

• Add loader when logging in profile. ✅

• Add default items when no options are present. ✅

• Add page for alcohol shops (Vynoteka, Bottlery etc.), get alcohol prices from these shops. ✅

• Add description why people should create profile in profile section. ✅

• When profile options change MCP doesn't recalculate and rerender, need to fix this. ✅

• Setup a backend server and chanel scraper requests trough the server. Doing this will remove CORS error that occurs now. Move scrapers to backend and not frontend. Completed ✅

• Make result cards for each shop search. In results window there should be a stack of resultCard for each shop. They should be vertical. Completed ✅

• Show loader when searching when the previous search results are displayed. Completed ✅

• Rimi brings back 20 results when barbora returns 5. Fixed ✅

• Iki (LastMile) scraper. Completed ✅

• Add loaders to cost of main cart items and most popular searches. ✅

• Add an option to insert items to a shopping cart. ✅

• Calculate full cart price. ✅

## Future planed updates:

Future plans on expanding this project further and adding more functions:

### Add more items to navbar:

• Statistics about product prices;

### Maybe add some premium/paid tier

Like shopping carts only for premium users etc.

### Add possibility to change how many results is returned

Only for premium users add option to change results from 5 to 10 etc.

### Add links to the products

After search is completed add links to search so users can go to e - shops and see the results. Or add that pressing on returned products takes user to that product page in the shop.

### When hovering on name show product picture

Check if this is even possible. Need to check if images are returned.

### Add counter for requests

Non - premium users can only make i.e. 5 requests every 24h.

### Add graphs for price history:

Store products price history in server and add graphs/other info on how that price changes.

### Add trip planner that plans trips to the store:

Google maps API that helps plan shortest trip to the store where the cheapest products are, add trip cost to the total shopping cost. Make some options- shortest trip, cheapest trip etc.
