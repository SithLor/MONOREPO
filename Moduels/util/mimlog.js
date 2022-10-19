import { logger } from "../log/log";


export function logToConsole(state,msg){
    if (state == 1) {
        logger.log(msg)
    }
}