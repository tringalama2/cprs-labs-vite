import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import {labResults, unparsableRows} from "./LabsDisplay/index.js";


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
`<table>
    <thead>
        <tr style="font-weight: bolder">
            <td>specimenUniqueId</td>
            <td>name</td>
            <td>result</td>
            <td>collectionDate</td>
            <td>releasedDate</td>
            <td>flag</td>
            <td>units</td>
            <td>referenceRange</td>
            <td>specimen</td>
            <td>orderingProvider</td>
            <td>siteCode</td>
        </tr>
    </thead>
    <tbody>
        ${labResults.map((row) => (`
            <tr>
            ${Object.values(row).map((value) => (`<td>${value}</td>`)).join('')}
            </tr>
        `)).join('')}
    \t\t</tbody>
</table>
<div>
    ${unparsableRows.map((row) => (row.result))}
</div>`;

