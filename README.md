# ReactJS Technical Interview

#### The objective of this technical test is to create a similar application to the one previously provided. To achieve this, you must use the API provided by https://randomuser.me/.

Here are the steps to follow:
- [x] Fetch 100 rows of data using the API.
- [x] Display the data in a table format, similar to the example.
- [x] Provide the option to color rows as shown in the example (striped table).
- [x] Allow the data to be sorted by country as demonstrated in the example.
- [x] Enable the ability to delete a row as shown in the example.
- [x] Implement a feature that allows the user to restore the initial state, meaning that all deleted rows will be recovered.
- [x] Implement a feature that allows the user to filter the data by country.
- [x] Avoid sorting users again when the user is changing filter by country.
- [x] Sort by clicking on the column header.
- [x] Extra: Add pagination

## How to run the project
1. Clone the repo.
2. `cd` into the folder.
3. Execute the following command: `npm install`.
4. Once all the packages have been installed, run the server with: `npm run dev`.

## How to test the software
1. Open your favorite web browser and go to [localhost:3000](localhost:3000).
2. Ensure the users table loads.
3. Click the button `Toggle Striped Table` and ensure it's working properly, if you click it again it should return to its original state.
4. Click the button `Enable sort by country` and ensure it sorts the countries alphabetically.
5. Go ahead and delete some of the entries by clicking the button `Delete` in the `Actions` column.
6. If you click the button `Reset User List` the web app should be able to display the initial user list (without having to re-fetch the data).
7. Start typing into the `Filter by Country` input, it should automatically filter the entries using the provided value.
8. Make sure the pagination works properly (try changin the page size and moving between pages).