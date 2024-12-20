import {labs} from "./labs.short.js";
import ResultsBuilder from "./results-builder.js";
import DisplayBuilder from "./display-builder.js";

let labResults;
let unparsableRows;
let labels;

const resultBuilder = new ResultsBuilder(labs);

resultBuilder.prepRows();
resultBuilder.build();
labResults = resultBuilder.getLabResults();
unparsableRows = resultBuilder.getUnparsableRows();
const displayBuilder = new DisplayBuilder(resultBuilder.getLabResults());
labels = await displayBuilder.getLabels();
const dateTimeHeaders = displayBuilder.getDateTimeHeaders();

// Todo:
//log unmatched labs

export {labResults, unparsableRows, labels, dateTimeHeaders};