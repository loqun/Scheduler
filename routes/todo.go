package routes

import(
	"github.com/gofiber/fiber/v2"
)

func SendStrings(c *fiber.Ctx) error {
	return c.SendString("Hello, Fiber!")
}