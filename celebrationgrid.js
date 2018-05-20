function init() {
    $('#title').text(document.title);
}

var cardType = {
    MISTAKES_SUCCESS: 1,
    EXPERIMENT_SUCCESS: 2,
    PRACTICE_SUCCESS: 3,
    MISTAKES_FAILURE: 4,
    EXPERIMENT_FAILURE: 5,
    PRACTICE_FAILURE: 6,

    // properties: {
    //   1: {name: "small", value: 1, code: "S"},
    //   2: {name: "medium", value: 2, code: "M"},
    //   3: {name: "large", value: 3, code: "L"}
    // }
};