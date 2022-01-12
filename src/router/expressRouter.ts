
import express = require('express');
import { IRouter } from "./irouter"

export class ExpressRouter implements IRouter {

    private readonly app = express()
    private readonly port = 3000

    setup(): void {

        this.app.get('/', (req, res) => {
            res.send('Hello World!')
        });

        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
        });
    }

}