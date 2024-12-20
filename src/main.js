import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import {labResults, unparsableRows, labels, dateTimeHeaders} from "./LabsDisplay/index.js";

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

document.querySelector('#counter').innerHTML =
`<table class="text-sm border-collapse border-spacing-0">
    <thead>
        <tr style="font-weight: bolder">
            <th scope="col" class="text-center border-b border-gray-500 px-2 z-20 sticky bg-gray-200 top-0">
            ${dateTimeHeaders.map((dt) => dt.toFormat('L/d/yy H:mm')).join('</th><th class="text-center border-b border-gray-500 px-2 z-20 sticky bg-gray-200 top-0">')}
            </th>
        </tr>
    </thead>
    <tbody>
        </tbody>
</table>
<div>
    ${unparsableRows.map((row) => (row.result))}
</div>`;

