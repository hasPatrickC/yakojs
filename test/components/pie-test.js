var chai = require('chai');
var expect = chai.expect;
var pieChart = require('../../lib/components/pie');

describe('lib/pie', function () {
    var pie;
    before(function () {
        pie = new pieChart();
    });

    after(function () {
        pie = '';
    });

    it('_describePath should return a set of paths & without NaN', function () {
        var radius = 50;
        var data = [ 0.003744850830108601,
          0.035700911247035325,
          0.04755960554237923,
          0.029584321557857944,
          0.025090500561727624,
          0.033578829109973785,
          0.05529896392460367,
          0.012233179378354763,
          0.027961552864810887,
          0.05392585195356385,
          0.03744850830108601,
          0.019098739233553864,
          0.03532642616402447,
          0.04543752340531769,
          0.05879415803270503,
          0.022718761702658845,
          0.0019972537760579202,
          0.05043065784546249,
          0.017725627262514042,
          0.029334664835850705,
          0.05592310572962177,
          0.05517413556360005,
          0.03482711272000999,
          0.03208088877793035,
          0.04294095618524529,
          0.030832605167894146,
          0.0022469104980651603,
          0.04493820996130321,
          0.045812008488328546,
          0.012233179378354763 ];

          var chart = {
            relativeDataSet: [
             0.003744850830108601,
             0.035700911247035325,
             0.04755960554237923,
             0.029584321557857944,
             0.025090500561727624,
             0.033578829109973785,
             0.05529896392460367,
             0.012233179378354763,
             0.027961552864810887,
             0.05392585195356385,
             0.03744850830108601,
             0.019098739233553864,
             0.03532642616402447,
             0.04543752340531769,
             0.05879415803270503,
             0.022718761702658845,
             0.0019972537760579202,
             0.05043065784546249,
             0.017725627262514042,
             0.029334664835850705,
             0.05592310572962177,
             0.05517413556360005,
             0.03482711272000999,
             0.03208088877793035,
             0.04294095618524529,
             0.030832605167894146,
             0.0022469104980651603,
             0.04493820996130321,
             0.045812008488328546,
             0.012233179378354763 ],
          outerRadius: 50,
          scattered: false,
          fill: true,
          line: true,
          paddingBottom: 0,
          paddingTop: 0,
          paddingRight: 0,
          paddingLeft: 0,
          height: 100,
          width: 300,
          type: 'chart' };

        var result = pie._describePath(radius, data, chart);
        expect(result)
            .to.be.a('array')
            .to.satisfy(function (result) {
                return (/<path\s.*>/i).test(result.join("")) && !(/NaN/).test(result.join(""));
            });

    });
});