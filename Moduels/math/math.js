import { addtions } from "./add.js"
import { subtrack } from "./subtr.js"
import { mutiply } from './muti.js'
import { divion } from './divid.js'
import { roundInt } from "./round.js"
import { returnPI } from "./pi.js"
export var math = {
    add(baseNum1,AddNum1){
        return addtions(baseNum1,AddNum1)
    },
    sub(baseNum2,SubNum2){
        return subtrack(baseNum2,SubNum2)
    },
    muti(baseNum3,power3){
        return mutiply(baseNum3,power3)
    },
    divid(baseNum4,power4){
        return divion(baseNum4,power4)
    },
    round(number){
        return roundInt(number)
    },
    GetValTimePi(inp){
        return returnPI * inp
    }
}