export default function (options) {
  return Object.assign({
    path: "/courtbot", //deprecated
    dbUrl: process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/courtbotdb"
  }, options);
}
