import {labs} from "./labs.short.js";
import ResultsBuilder from "./results-builder.js"

let labResults;
let unparsableRows;
const resultBuilder = new ResultsBuilder(labs);

let url = 'http://labs.test/api/labels';
let response = await fetch(url);
let labelResult = {};

if (response.ok) { // if HTTP-status is 200-299
    labelResult = await response.json();
} else {
    alert("Cannot retrieve lab and panel labels. HTTP-Error: " + response.status);
}

for (const [key, value] of Object.entries(labelResult.data)) {
    console.log(`${value.panel}:  ${key}: ${value.label}`);
}

resultBuilder.prepRows()
resultBuilder.build()
labResults = resultBuilder.getLabResults()
unparsableRows = resultBuilder.getUnparsableRows()

export {labResults, unparsableRows};