import { math } from './Moduels/math/math.js'
import { logger }  from './Moduels/log/log.js'
logger.log("testings")
logger.error("error")
logger.warn("warn")
logger.log(math.add(10,10))
logger.log(math.muti(10,10))
logger.log(math.sub(10,5))
logger.log(math.divid(100,5))
console.log(math.add(10,10))