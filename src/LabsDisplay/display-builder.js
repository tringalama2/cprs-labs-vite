import intersectObjects from "./utils/intersectObjects.js";

function DisplayBuilder(results) {
    this.results = results;

    this.getDateTimeHeaders = function () {

        // this puts headers into an object with specID as key
        // let headers = {};
        // let resultKeys = Object.keys(this.results);
        //
        // for(let i = 0, len = resultKeys.length; i < len; i++) {
        //     let key = resultKeys[i];
        //     if (this.results[key]) {
        //         headers[this.results[key].specimenUniqueId] = this.results[key].collectionDate
        //     }
        // }

        let headers = [];
        let resultKeys = Object.keys(this.results);
        for(let i = 0, len = resultKeys.length; i < len; i++) {
                let key = resultKeys[i];
                if (this.results[key]) {
                    headers.push(this.results[key].collectionDate);
                }
            }

        return uniq(headers.sort((date1, date2) => date2 - date1));


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

function uniq(a) {
    let seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

export default DisplayBuilder;