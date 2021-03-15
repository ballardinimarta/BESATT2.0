export class store {
    name:string;
    adress:string;
    city:string;
    constructor(name:string, adress:string, city:string) {
        this.name = name;
        this.adress = adress;
        this.city = city;
    }
}
export let stores = [];

export function addStoresHtml () {
    let konstig = new store("KONST-IG","Åsögatan 124, 116 24 Stockholm", "Stockholm");
    let pressstop = new store("PRESS STOP", "Götgatan 31, 116 21 Stockholm", "Stockholm");
    let hedengrens = new store("HEDENGRENS", "Stureplan 4, 114 35 Stockholm", "Stockholm");
    let moderna = new store("MODERNA MUSEET", "Exercisplan 4, 111 49 Stockholm", "Stockholm");
    let ronells = new store("RÖNNELLS ANTIKVARIAT", "Birger Jarlsgatan 32B, 114 29 Stockholm", "Stockholm");
    let aspudden = new store("ASPUDDENS BOKHANDEL", "Hägerstensvägen 130, 126 49 Hägersten", "Stockholm");

    let malmokonsthall = new store("MALMÖ KONSTHALLS BOKHANDEL", "S:t Johannesgatan 7, 205 80 Malmö", "Skåne");
    let tidskriftsbutiken = new store("TIDSKRIFTSBUTIKEN MALMÖ", "Södra Förstadsgatan 18, 211 43 Malmö", "Skåne");
    let skissernas = new store("SKISSERNAS MUSEUM", "Finngatan 2, 223 62 Lund", "Skåne");

    let tredjevån = new store("3:E VÅNINGEN", "Sockerbruket 9, 414 51 Göteborg", "Göteborg");

    let eskilstuna = new store("ESKILSTUNA KONSTMUSEUM", "Portgatan 2, 633 42 Eskilstuna", "Övriga Sverige");
    let kristinehamn = new store("KRISTINEHAMNS KONSTMUSEUM", "Doktor Enwalls Väg 13, 681 37 Kristinehamn", "Övriga Sverige");

    stores.push(konstig, pressstop, hedengrens, moderna, ronells, aspudden, malmokonsthall, tidskriftsbutiken, skissernas, tredjevån, eskilstuna, kristinehamn);

    let container = $("#container");
    let sthlmContainer = $("<div></div>").addClass("cityContainer").attr("id", "stockholm");
    let skaneContainer = $("<div></div>").addClass("cityContainer").attr("id", "skane");
    let goteborgContainer = $("<div></div>").addClass("cityContainer").attr("id", "goteborg");
    let ovrigContainer = $("<div></div>").addClass("cityContainer").attr("id", "ovrig");

    $("<h1></h1>").text("Stockholm").css("border-bottom", "3px solid pink").appendTo(sthlmContainer);
    $("<h1></h1>").text("Skåne").css("border-bottom", "3px solid pink").appendTo(skaneContainer);
    $("<h1></h1>").text("Göteborg").css("border-bottom", "3px solid pink").appendTo(goteborgContainer);
    $("<h1></h1>").text("Övriga Sverige").css("border-bottom", "3px solid pink").appendTo(ovrigContainer);



    $.each(stores, (i, onestore) => {
        let storeContainer = $("<div></div>").addClass("storeContainer");
        $("<h3></h3>").addClass("storeName").text(onestore.name).appendTo(storeContainer);
        $("<a></a>").addClass("storeAdress").attr("target", "_blank").attr("href", `https://www.google.se/maps/place/${onestore.adress}`).text(onestore.adress).appendTo(storeContainer);
        if (onestore.city == "Stockholm") {
            storeContainer.appendTo(sthlmContainer);
        }
        if (onestore.city == "Skåne") {
            storeContainer.appendTo(skaneContainer);
        }
        if (onestore.city == "Göteborg") {
            storeContainer.appendTo(goteborgContainer);
        }
        if (onestore.city == "Övriga Sverige") {
            storeContainer.appendTo(ovrigContainer);
        }
    })
    sthlmContainer.appendTo(container);
    skaneContainer.appendTo(container);
    goteborgContainer.appendTo(container);
    ovrigContainer.appendTo(container);
}