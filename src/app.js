import { home } from "./main"
import { loadFooter } from "./modules/js/footer"
import { loadHeader } from "./modules/js/header"

function app() {
    loadHeader()
    loadFooter()
    home()
}

app()