// Object properties
var objectParameters = {
    triangle:  ['base','height'],
    rectangle: ['base','height'],
    square:    ['side'],
    circle:    ['radius'],
};

var objectFormulas = {
    circumference : {
        triangle  : (base,height) => base + height + Math.sqrt(base*base + height*height),
        rectangle : (base,height) => 2*base + 2*height,
        square    : (side)        => 4*side,
        circle    : (radius)      => 2 * Math.PI * radius,
    },
    area : {
        triangle  : (base,height) => (base * height) / 2,
        rectangle : (base,height) => base * height,
        square    : (side)        => side * side,
        circle    : (radius)      => Math.PI * radius * radius,
    }
};


// Setup function
function setupSubmodule(formulas) {
    var m = {};
    // Setup individual functions
    for (var type in objectParameters) {
        m[type] = formulas[type];
    }

    // Setup "total" function
    m.total = function(objects) {
        var total = 0;
        for (var obj in objects) {
            // Build argument list
            var type = obj.type;
            var args = objectParameters[type].map(x => obj[x]);
            // Call implementation
            total += formulas[type].apply(null,args);
        }
        return total;
    }
    return m;
}

// Exports
exports.circumference = setupSubmodule(objectFormulas.circumference);
exports.area          = setupSubmodule(objectFormulas.area);

