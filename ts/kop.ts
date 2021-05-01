export class Magazine {
    id: number;
    month: string;
    picture: string;

    constructor(id: number, month: string, picture: string) {
        this.id = id;
        this.month = month;
        this.picture = picture;
    }
}

export let magazines = [];

export function addMagazines () {
    let first = new Magazine (1, "Februari 2019", require("../assets/NR_1.jpg"));
    let second = new Magazine (2 , "Juni 2019", require("../assets/NR_2.jpg"));
    let third = new Magazine (3, "Oktober 2019", require("../assets/NR_3.jpg"));
    let fourth = new Magazine (4, "Juni 2020", require("../assets/NR_4.jpg"));
    let fifth = new Magazine( 5, "Maj 2021", require("../assets/NR_5.jpg"))
    magazines.push(fifth, fourth, third, second, first);

    $.each(magazines, (i, magazine) => {
        let wrap = $("<div></div>").attr("id", "number"+magazine.id+"Wrapper");
        $("<img>").attr("src", magazine.picture).appendTo(wrap);
        let overlay = $("<div></div>").addClass("overlay");
        $("<p></p>").addClass("magInfo").html("Nr." + magazine.id+ "<br>" + magazine.month).appendTo(overlay);
        overlay.appendTo(wrap);
        wrap.appendTo($("#magazineContainer"));
    })
}
export function helpDialog () {
    let helpDiv = $("<div></div>").attr("id", "dialog");
    $("<img>").attr("src", require("../assets/iphonepic.jpg")).css("height", "500px").appendTo(helpDiv);
    helpDiv.appendTo($("#buyText"));
    $( "#dialog" ).dialog({
        autoOpen: false,
        resizable: false,
        draggable:false
        });
   
      $( "#opener" ).on( "click", function() {
        $( "#dialog" ).dialog( "open" );
      });
}