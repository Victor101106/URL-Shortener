import application from "./config/application";

const PORT = process.env.PORT || 3300

application.listen(PORT, () => {
    console.log(`⚡ Listening at PORT ${PORT}!`)
})