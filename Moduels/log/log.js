import { log } from "./logger.js";
import { warn } from "./warn.js";
import { lerror } from "./error.js";
import { clear } from "./clear.js";
export var logger = {
    log(io){
        log(io)
    },
    error(io){
        error(io)
    },
    warn(io){
        warn(io)
    },
    clear(io){
        clear(io)
    }
}