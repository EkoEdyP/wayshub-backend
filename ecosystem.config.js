module.exports = {
  apps: [
    {
      name: "wayshub-backend",
      script: "node index.js",
      watch: true,
      env: {
        NODE_ENV: "staging",
	DB_HOST: "database",
        DB_USER: "eep-db-staging",
        DB_PASSWORD: "MySql@123",
        DB_NAME: "wayshub"
      }
    }
  ]
}
