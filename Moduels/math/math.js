import { addtions } from "./add.js"
import { subtrack } from "./subtr.js"
import { mutiply } from './muti.js'
import { divion } from './divid.js'
import { roundInt } from "./round.js"
//import { retunrPi } from "./pi.js"
export var math = {
    add(baseNum,AddNum){
        addtions(baseNum,AddNum)
    },
    sub(baseNum,SubNum){
        subtrack(baseNum,SubNum)
    },
    muti(baseNum,power){
        mutiply(baseNum,power)
    },
    divid(baseNum,power){
        divion(baseNum,power)
    },
    round(number){
        roundInt(number)
    }
}