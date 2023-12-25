package routes

import(
	"github.com/gofiber/fiber/v2"

)

type ViewData struct {
	Title   string
	Message string
}

func HomeController(c *fiber.Ctx) error {
	// Data to be passed to the template
	data := ViewData{
		Title:   "Fiber View Example",
		Message: "Hello, Fiber!",
	}

	// Render the template with the data
	return c.Render("index", data)
}