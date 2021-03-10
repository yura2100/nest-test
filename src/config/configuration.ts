export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: process.env.DATABASE_URI,
    jwtSecret: process.env.JWT_SECRET
})
