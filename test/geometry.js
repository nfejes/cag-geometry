var expect   = require("chai").expect;
var geometry = require("..");

describe("C.A.G Geometry Calculator:", function() {
    describe("Circumference of", function() {
        it("triangle", function() {
            var f = geometry.circumference.triangle;
            expect(f(1,1)).to.equal(2+Math.sqrt(2));
            expect(f(3,4)).to.equal(12);
            expect(f(5,7)).to.equal(12 + Math.sqrt(74));
            expect(f(0,1)).to.equal(2);
            expect(f(0.5,1.25)).to.equal(1.75 + Math.sqrt(1.8125));
        });
        it("rectangle", function() {
            var f = geometry.circumference.rectangle;
            expect(f(1,1)).to.equal(4);
            expect(f(3,4)).to.equal(14);
            expect(f(5,7)).to.equal(24);
            expect(f(0,1)).to.equal(2);
            expect(f(0.5,1.25)).to.equal(3.5);
        });
        it("square", function() {
            var f = geometry.circumference.square;
            expect(f(4)).to.equal(16);
            expect(f(0.5)).to.equal(2);
        });
        it("circle", function() {
            var f = geometry.circumference.circle;
            expect(f(2)).to.equal(4*Math.PI);
            expect(f(1/2/Math.PI)).to.equal(1);
        });
        it("total", function() {
            var total = geometry.circumference.total;
            expect(total([])).to.equal(0);
            expect(total([
                { type:'rectangle', base:2, height:4 }, // 12
                { type:'triangle',  base:3, height:4 }, // 12
                { type:'square',    side:3           }, // 12
                { type:'circle',    radius:2         }, // 4*PI
                { type:'rectangle', base:1, height:1 }, // 4
            ])).to.equal(40 + 4*Math.PI);
        });
        it("total (bad call)", function() {
            var total = geometry.circumference.total;
            expect(total([
                { type:'rectangle', base:2, height:4 }, // ok
                { type:'baloon',    base:3, height:4 }, // error
            ])).to.throw(/unknown type/);
            expect(total([
                { type:'rectangle', base:2, height:4 }, // ok
                { type:'triangle',  radius:3         }, // error
            ])).to.throw(/missing parameter/);
        });
    });


    describe("Area of", function() {
        it("triangle", function() {
            var f = geometry.area.triangle;
            expect(f(1,1)).to.equal(0.5);
            expect(f(3,4)).to.equal(6);
            expect(f(5,7)).to.equal(17.5);
            expect(f(0,1)).to.equal(0);
            expect(f(0.5,1.25)).to.equal(0.3125);
        });
        it("rectangle", function() {
            var f = geometry.area.rectangle;
            expect(f(1,1)).to.equal(1);
            expect(f(3,4)).to.equal(12);
            expect(f(5,7)).to.equal(35);
            expect(f(0,1)).to.equal(0);
            expect(f(0.5,1.25)).to.equal(0.625);
        });
        it("square", function() {
            var f = geometry.area.square;
            expect(f(4)).to.equal(16);
            expect(f(0.5)).to.equal(0.25);
        });
        it("circle", function() {
            var f = geometry.area.circle;
            expect(f(2)).to.equal(4*Math.PI);
            expect(f(1/2/Math.PI)).to.equal(1/4/Math.PI);
        });
        it("total", function() {
            var total = geometry.area.total;
            expect(total([])).to.equal(0);
            expect(total([
                { type:'rectangle', base:2, height:4 }, // 8
                { type:'triangle',  base:3, height:4 }, // 6
                { type:'square',    side:3           }, // 9
                { type:'circle',    radius:2         }, // 4*PI
                { type:'rectangle', base:1, height:1 }, // 1
            ])).to.equal(24 + 4*Math.PI);
        });
        it("total (bad call)", function() {
            var total = geometry.area.total;
            expect(total([
                { type:'rectangle', base:2, height:4 }, // ok
                { type:'baloon',    base:3, height:4 }, // error
            ])).to.throw(/unknown type/);
            expect(total([
                { type:'rectangle', base:2, height:4 }, // ok
                { type:'triangle',  radius:3         }, // error
            ])).to.throw(/missing parameter/);
        });
    });
});

