import { LabFactory } from "./lab-factory.js";
import isResultRow from "./utils/parsers/is-result-row.js";
import isOverflowRow from "./utils/parsers/is-overflow-row.js";

function ResultsBuilder(labs) {
    this.originalLabs = labs;
    this.labLines = this.originalLabs.split('\n');
    this.unparsableRows = [];
    this.labResults = [];

    this.prepRows = function () {
        // fixOverflowRows x2 as some rows overflow twice!
        this.labLines.forEach((labLine, index) => {
            if (isOverflowRow(labLine)) {
                this.labLines[index-1] += labLine;
                this.labLines.splice(index, 1);
            }
        });

        this.labLines.forEach((labLine, index) => {
            if (isOverflowRow(labLine)) {
                this.labLines[index-1] += labLine;
                this.labLines.splice(index, 1);
            }
        });
    }

    this.build = function () {
        this.labLines.forEach((labLine, index) => {
            if (isResultRow(labLine)) {
                let lab = new LabFactory(this.labLines, index);
                if (lab.constructor.name === 'UnparsableResult') {
                    this.unparsableRows.push(lab);
                } else {
                    this.labResults.push(lab);
                }
            }
        });
    }

    this.getLabResults = function () {
        return this.labResults;
    };

    this.getUnparsableRows = function () {
        return this.unparsableRows;
    };
}

export default ResultsBuilder;