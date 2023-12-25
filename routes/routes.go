package routes 

import(
	 "github.com/gofiber/fiber/v2"
)


func RegisterAllRoutes(app *fiber.App) {
    app.Get("/", SendStrings)
}

func RegisterFrontendRoutes(app *fiber.App){
	
	frontendRoutes := []string{
		"/",
		"/about",
	}

	for _, route:= range frontendRoutes {
		app.Get(route,HomeController)
	}



}