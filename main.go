package main 

import(
	"github.com/gofiber/fiber/v2"
	"github.com/goccy/go-json"
	"github.com/gofiber/template/html/v2"
	"fmt"
	"Calendar_Go/routes"
	
)

	

func main() {

	//load the templates
	engine := html.New("./views", ".html") 	

	//create the app
	app := fiber.New(fiber.Config{
		JSONEncoder: json.Marshal,
		JSONDecoder: json.Unmarshal,
		Views: engine,
	})

	//static
	app.Static("/","./public")

	//register the routes
	// routes.RegisterAllRoutes(app)
	routes.RegisterFrontendRoutes(app)

	startServer(app)
}

func startServer(app *fiber.App) {
	fmt.Println("Starting the web server .......")
	err := app.Listen("localhost:8080")
	if err != nil {
		fmt.Println("Error when building the server")
	} 
}