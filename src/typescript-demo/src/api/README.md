### Run MongoDB
- `colima start`
- `docker run -d \\n  --name mongodb \\n  -p 27017:27017 \\n  -v mongodb-data:/data/db \\n  mongo:8`

### Exercise the API with Bruno

Open the `bruno` directory in Bruno and select the `local` environment. The
collection targets `http://localhost:3000` and uses the demo credentials and
token defined by this API; they are for local testing only.

Run the API against a disposable MongoDB database before running the collection.
For example, from this directory, start it with
`MONGO_URI=mongodb://localhost:27017 MONGO_DB=ts-demo-bruno-test npm run dev`.
The collection creates a uniquely named user and the API has no delete route,
so that record remains in the selected database after the run. Do not run its
mutating requests against production or shared data.

Requests are grouped in folders by endpoint. Run the entire collection in
sequence: the create-user request stores an ID and email used by the
duplicate-email and get-user requests, including across endpoint folders.
Those dependent requests cannot be run independently without that setup. Some
requests are characterization checks for current behavior rather than recommended behavior:
the API accepts a valid token with a non-Bearer authorization scheme, returns
500 for a malformed user ID, and does not validate the runtime type sent to the
reflection endpoints. The 503 user-creation state requires starting the API
with duplicate emails already present in MongoDB; it is covered by the isolated
`user-uniqueness.test.mjs` integration test rather than this interactive
collection.

### Case-insensitive email uniqueness

Before deploying the API, use an administrator-controlled terminal to run
`npm run check-user-email-conflicts` in this directory, with `MONGO_URI`
pointing to the intended MongoDB instance. A nonzero exit reports groups of
conflicting user IDs; treat the report as sensitive and do not put it in
application logs. Inspect and resolve each group manually using your approved
database administration process. The checker does not modify user records.
Rerun the command until it reports no conflicts.

On startup the API creates a case-insensitive unique email index. If existing
records conflict, the API remains available but rejects user creation with HTTP
503. Resolve the conflicts and restart the API to retry index creation. The
index also rejects concurrent duplicate creation attempts; the API returns 409
for an existing email.

Keep the CSV import disabled until the index is active. To roll back the upload,
disable its feature flag first. Do not remove the uniqueness index while the
upload is enabled; coordinate any index or API rollback and never automatically
change existing users.

### Create a customer

`POST /api/customers` requires an admin token and a JSON body containing a
non-blank string `name`. Leading and trailing whitespace is removed. Customer
names are unique ignoring case; a MongoDB unique index enforces this even for
concurrent requests. A successful response is `201` with `{ "id": "..." }`;
invalid input returns `400`, and a duplicate name returns `409`. Authentication
failures and unexpected database errors use the existing API error conventions.
The API will fail to start if the customer name index cannot be created, such
as when an existing customers collection contains conflicting names.

To run the customer integration test, point `MONGO_TEST_URI` at an isolated
MongoDB instance and run `node --test test/customer-create.test.mjs` in this
directory. The test creates a uniquely named database and does not delete it;
use a disposable instance and remove it after the test.