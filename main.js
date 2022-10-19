import { math } from './Moduels/math/math'
import { log } from './Moduels/log/logger'
import './style.css'

document.querySelector('#app').innerHTML = `
  <h1 id="r">Hello, world!</h1>
  <button type="button" onclick="logger.log("duck")">Click Me!</button>
`

logger.log("FCK")