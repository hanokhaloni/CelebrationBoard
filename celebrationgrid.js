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
   
     toHtml() {
        let cardHtml = "";
        let color = cardType.properties[this.type].color;
        cardHtml += `<div class="card ${color}  lighten-1">`;
        cardHtml += `  <div class="card-content">`;
        cardHtml += `    <div class="left">${this.project}</div>`;
        cardHtml += `    <div class="right">${this.category}</div>`;
        cardHtml += `  </div>`;
        cardHtml += `  <div class="card-content"> ${this.content} </div>`;
        cardHtml += `  <div class="card-content">`;
        if (this.isActiveActionItem) {
            cardHtml += `    <div class="left">ACTIONITEM</div>`;
        }
        if (this.isSpecial) {
            cardHtml += `    <div class="right">SPECIAL</div>`;
        }
        cardHtml += `  </div>`;
        cardHtml += `</div>`;
    
        return cardHtml;
    }
}

class panel {
    constructor(type) {
        this.type =  type;
    }

    toHtml(cards) {
        let panelHtml = "";
        let color = cardType.properties[this.type].color;
        panelHtml += `<div class="col s4">`;
        panelHtml += `<div class="card-panel ${color} lighten-2">`;
        panelHtml += `<div>` + cardType.properties[this.type].name + `</div>`;
        panelHtml += `<div class="scrollable">`
        cards.forEach(function (card)
        {
            panelHtml += card.toHtml();
        });
        panelHtml += `</div>`;
        panelHtml += `</div>`;
        panelHtml += `</div>`;
        return panelHtml;
    }
}

class resultRow {

}

let scard1 = new card(1,cardType.MISTAKES_SUCCESS, "projectA", "category", "content", true, true);
let spanel1 = new panel(cardType.MISTAKES_SUCCESS).toHtml([scard1]);

let scard2 = new card(1,cardType.EXPERIMENT_SUCCESS, "projectB", "category", "content", true, false);
let spanel2 = new panel(cardType.EXPERIMENT_SUCCESS).toHtml([scard2, scard2]);

let scard3 = new card(1,cardType.PRACTICE_SUCCESS, "projectC", "category", "content", false, true);
let spanel3 = new panel(cardType.PRACTICE_SUCCESS).toHtml([scard3, scard2]);

let spanel = spanel1 + spanel2 + spanel3;

let fcard1 = new card(1,cardType.MISTAKES_FAILURE, "projectC", "category", "content", false, true);
let fpanel1 = new panel(cardType.MISTAKES_FAILURE).toHtml([fcard1]);

let fcard2 = new card(1,cardType.EXPERIMENT_FAILURE, "projectB", "category", "content", true, false);
let fpanel2 = new panel(cardType.EXPERIMENT_FAILURE).toHtml([fcard2]);

let fcard3 = new card(1,cardType.PRACTICE_FAILURE, "projectA", "category", "content", false, false);
let fpanel3 = new panel(cardType.PRACTICE_FAILURE).toHtml([fcard3]);

let fpanel = fpanel1 + fpanel2 + fpanel3;

jQuery(document).ready(() => {
    $('#success').append(spanel);
    $('#failure').append(fpanel);});





