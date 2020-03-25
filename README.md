> Runs, in parallel, a json-server serving the data stored in data.json and a Vue app that displays the given data using Bootstrap.
> Visit localhost:8080 to see the result

## Build Setup

``` bash
# install dependencies
npm install

# starts json-server with api data (from data.json) at localhost:3000 and serves frontend at localhost:8080
npm start

# runs unit tests that ensure data.json matches the schema needed to be formatted correctly by the frontend
npm test

