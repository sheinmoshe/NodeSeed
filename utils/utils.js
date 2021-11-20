module.exports = {
    /**
     * Capitalize first letter of text
     * @param text
     * @returns {string}
     * @example text = 'name', return 'Name'
     */
    autocapitalize: function (text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    },


    printPrimitiveObject: function (obj, padding) {
        printPrimitiveObject (obj, padding);
    }
}

/**
 * @description A custom implementation of JSON.stringify
 * @param obj
 * @param padding
 */
function printPrimitiveObject (obj, padding) {
    let printObject = true;
    const headerString = 'Object: ';
    const dividerString = ('--------------------');

    const tabChar ='\t';
    let tabs ='\t'
    for (let i=0; i< padding; i++) {
        tabs += tabChar;
    }
    console.log(tabs + headerString);
    console.log(tabs + dividerString);

    const primitiveObjectKeys = Object.keys(obj);
    primitiveObjectKeys.forEach(key => {

        let value = obj[key];
        const valueType = typeof value;
        if (valueType !== 'object') {
            console.log(tabs + `${key} = ${value}`);
        } else {
            padding++;
            console.log(tabs + `${key} =`);
            printPrimitiveObject(value, padding);
        }
    });
}


