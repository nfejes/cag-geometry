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
        var total = 0, num = objects.length;
        for (var i = 0; i < num; i++) {
            // Get object
            var obj = objects[i];
            if (!(obj.type in objectParameters))
                throw Error('unknown type');

            // Build argument list
            var params = objectParameters[obj.type];
            if (params.some(x => !(x in obj)))
                throw Error('missing parameter');

            // Call implementation
            var args = params.map(x => obj[x]);
            total += formulas[obj.type].apply(null,args);
        }
        return total;
    }
    return m;
}

// Exports
exports.circumference = setupSubmodule(objectFormulas.circumference);
exports.area          = setupSubmodule(objectFormulas.area);

