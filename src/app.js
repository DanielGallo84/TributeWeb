import { home } from "./main"
import { loadHeader } from "./modules/js/header"

function app() {
    loadHeader()
    home()
}

app()