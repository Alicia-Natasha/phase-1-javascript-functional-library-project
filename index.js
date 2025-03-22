function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                callback(collection[key], key, collection);
            }
        }
    }
    return collection;
}
it('calls alert with each element passed', function () {
    const spy = chai.spy(x => true);
    myEach(testArr, spy);
    expect(spy).to.have.been.called.exactly(testArr.length);
    testArr.forEach((val, idx) => {
      expect(spy).to.have.been.called.with(val, idx, testArr);
    });
  });

  function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i, collection));
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                result.push(callback(collection[key], key, collection));
            }
        }
    }
    return result;
}

function myReduce(collection, callback, acc) {
    let keys = Object.keys(collection);
    let startIndex = 0;
    
    if (acc === undefined) {
        acc = collection[keys[0]];
        startIndex = 1;
    }
    
    for (let i = startIndex; i < keys.length; i++) {
        acc = callback(acc, collection[keys[i]], collection);
    }
    
    return acc;
}

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                return collection[i];
            }
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection)) {
                return collection[key];
            }
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    let result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                result.push(collection[i]);
            }
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection)) {
                result.push(collection[key]);
            }
        }
    }
    return result;
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

function myFirst(array, n) {
    return n !== undefined ? array.slice(0, n) : array[0];
}

function myLast(array, n) {
    return n !== undefined ? array.slice(-n) : array[array.length - 1];
}
function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}
