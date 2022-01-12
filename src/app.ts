
import { IDatabase } from "./db/idatabase";
import { IRouter } from "./router/irouter";

export class App {
    private database : IDatabase;
    private router : IRouter;
    
    constructor(database : IDatabase, router : IRouter) {
        this.database = database
        this.router = router
    }

    public setup() : void {
        console.log("Do something")
    }
}