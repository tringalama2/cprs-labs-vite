import intersectObjects from "./utils/intersectObjects.js";

function DisplayBuilder(results) {
    this.results = results;

    this.getDateTimeHeaders = function () {
        let headers = {};
        let resultKeys = Object.keys(this.results);

        for(let i = 0, len = resultKeys.length; i < len; i++) {
            let key = resultKeys[i];
            if (this.results[key]) {
                headers[this.results[key].specimenUniqueId] = this.results[key].collectionDate
            }
        }

        return headers;
    }

    this.getLabels = async function () {
        let uniqueLabLabels = {};
        for (const key in this.results) {
            uniqueLabLabels[this.results[key].name] = true;
        }
        return await intersectObjects(await this.retrieveLabAndPanelLabels(), uniqueLabLabels);

    }

    this.retrieveLabAndPanelLabels = async function () {
        let url = 'http://labs.test/api/labels';
        let response = await fetch(url);
        let labelResult = {};

        if (response.ok) { // if HTTP-status is 200-299
            labelResult = await response.json();
        } else {
            alert("Cannot retrieve lab and panel labels. HTTP-Error: " + response.status);
        }
        return labelResult.data;
    }
}

export default DisplayBuilder;