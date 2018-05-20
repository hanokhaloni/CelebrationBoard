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

    properties: {  
       1: {name: "Mistakes Success", color: "grey"},
       2: {name: "Experiments Success", color: "green"},
       3: {name: "Practices Success", color: "green"},
       4: {name: "Mistakes Failures", color: "red"},
       5: {name: "Experiments Failures", color: "green"},
       6: {name: "Practices Failures", color: "grey"},
    }
    
};

class card {

    constructor(sn, type, project, category, content, isSpecial, isActiveActionItem) {
        this.sn=sn;
        this.type =  type;
        this.project = project;
        this.category = category;
        this.content = content;
        this.isSpecial = isSpecial;
        this.isActiveActionItem = isActiveActionItem;
    }
   
     createHtmlFor() {
        let result = "";
        let color = cardType.properties[this.type].color;
        result += `<div class=\"card ${color}  lighten-1\">`;
        result += `  <div class="card-content">`;
        result += `    <div class="left">${this.project}</div>`;
        result += `    <div class="right">${this.category}</div>`;
        result += `  </div>`;
        result += `  <div class="card-content"> ${this.content} </div>`;
        result += `  <div class="card-content">`;
        if (this.isActiveActionItem) {
            result += `    <div class="left">ACTIONITEM</div>`;
        }
        if (this.isSpecial) {
            result += `    <div class="right">SPECIAL</div>`
        }
        result += `  </div>`
        result += `</div>`
    
        return result;
    }
}

let scard1 = new card(1,cardType.MISTAKES_SUCCESS, "projectA", "category", "content", true, true);
let spanel1 = `<div class="col s4"><div class="card-panel grey lighten-2">` + scard1.createHtmlFor() + `</div></div>`;

let scard2 = new card(1,cardType.EXPERIMENT_SUCCESS, "projectB", "category", "content", true, false);
let spanel2 = `<div class="col s4"><div class="card-panel green lighten-2">` + scard2.createHtmlFor() + `</div></div>`;

let scard3 = new card(1,cardType.PRACTICE_SUCCESS, "projectC", "category", "content", false, true);
let spanel3 = `<div class="col s4"><div class="card-panel green lighten-2">` + scard3.createHtmlFor() + `</div></div>`;

let spanel = spanel1 + spanel2 + spanel3;


let fcard1 = new card(1,cardType.MISTAKES_FAILURE, "projectC", "category", "content", false, true);
let fpanel1 = `<div class="col s4"><div class="card-panel red lighten-2">` + fcard1.createHtmlFor() + `</div></div>`;

let fcard2 = new card(1,cardType.EXPERIMENT_FAILURE, "projectB", "category", "content", true, false);
let fpanel2 = `<div class="col s4"><div class="card-panel green lighten-2">` + fcard2.createHtmlFor() + `</div></div>`;

let fcard3 = new card(1,cardType.PRACTICE_FAILURE, "projectA", "category", "content", false, false);
let fpanel3 = `<div class="col s4"><div class="card-panel grey lighten-2">` + fcard3.createHtmlFor() + `</div></div>`;

let fpanel = fpanel1 + fpanel2 + fpanel3;

jQuery(document).ready(() => {
    $('#success').append(spanel);
    $('#failure').append(fpanel);});





