import './style.css'
import javascriptLogo from './javascript.svg'
import { logger } from './Moduels/log/log'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button" onclick="logger.log("Testing")"></button>
    </div>
    <p id="d"class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

logger.log("gay")

