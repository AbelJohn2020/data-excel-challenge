const base_uri = '../db/BD Test.xlsx';

module.exports = {
    getData: function() {
        const xlsx = require('xlsx');
        const wb = xlsx.readFile(base_uri, {cellDates: true});
        const ws = wb.Sheets['Hoja 1'];

        const data = xlsx.utils.sheet_to_json(ws)
        return data;
    }
}