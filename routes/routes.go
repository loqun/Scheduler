package routes 

import(
	 "github.com/gofiber/fiber/v2"
)


func RegisterAllRoutes(app *fiber.App) {
    app.Get("/", SendStrings)
}