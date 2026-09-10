const myjson =  [
    {
            Color: "Rose red",
            "Tinted windows": false,
            Wheels: 4,
            "Roof cargo": null,
            Entertainment: ["FM Radio", "MP3, MP4 and MKV player", "harman/kardon speakers"],
            Accessories: "satnav, cruise control"
        
        
    },
    {
        Color: "Navy blue",
            "Tinted windows": true,
            Wheels: 4,
            "Roof cargo": "Thule",
            Entertainment: ["FM Radio", "Apple CarPlay/Android Auto", "Bowers & Wilkins Premium Sound speakers"],
            Accessories: "self drive system, luggage cover"
    }
];

let dataHtml = `
    <div id="json">
    <h1> Car properties </h1>
`;
for (let i = 0; i < myjson.length; i++) {
    dataHtml += `

    <h2>${i + 1}. car</h2>
    <p>Color: ${myjson[i].Color}</p>
    <p>Tinted windows: ${myjson[i]["Tinted windows"]}</p>
    <p>Wheels: ${myjson[i].Wheels}</p>
    <p>Roof cargo: ${myjson[i]["Roof Cargo"]}</p>
    <p>Entertainment: ${myjson[i].Entertainment}</p>
    <p>Accessories: ${myjson[i].Accessories}</p>
    </div>
    `
}
dataHtml += `</div>`



document.getElementById("app").innerHTML = dataHtml