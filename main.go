package main 

import(
	"github.com/gofiber/fiber/v2"
	"github.com/goccy/go-json"
	"fmt"
)

	var app *fiber.App

func main() {

	app = fiber.New(fiber.Config{
		JSONEncoder: json.Marshal,
		JSONDecoder: json.Unmarshal,
	})

	startServer()
}

func startServer() {
	fmt.Println("Starting the web server .......")
	err := app.Listen("localhost:8080")
	if err != nil {
		fmt.Println("Error when building the server")
	} 
}