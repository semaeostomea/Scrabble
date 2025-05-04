const board = document.getElementById("board");
const tileType = ["x", "x2L", "x3L", "x2W", "x3W", "center"];
const base = [
    [2,0,0,0,0,1,0,0,0,0,2,0],
    [0,0,3,0,0,0,0,0,3,0,0,0],
    [0,1,0,0,1,0,1,0,0,1,0,0],
    [0,0,0,3,0,0,0,3,0,0,0,1],
    [0,0,1,0,2,0,2,0,1,0,0,0],
    [1,0,0,0,0,4,0,0,0,0,1,3],
    [0,0,1,0,2,0,2,0,1,0,0,0],
    [0,0,0,3,0,0,0,3,0,0,0,1],
    [0,1,0,0,1,0,1,0,0,1,0,0],
    [0,0,3,0,0,0,0,0,3,0,0,0],
    [2,0,0,0,0,1,0,0,0,0,2,0],
    [0,3,0,0,0,3,0,0,0,3,0,5]
];

addTiles(undefined, undefined, 0, -1, true)
addTiles(0, -1, 0, -1, true);

function addTiles(baseStart, baseEnd, horiStart, horiEnd, first) {
    for (let hori of base.slice(baseStart, baseEnd)) {
        for (let t of (hori.concat(hori.slice(horiStart, horiEnd)))) {
            let tile = document.createElement("div");
            let tType = tileType[t];
            if (!first && tType == "center") {
                tType = "x";
            }; 
            tile.className = `tile ${tType}`;
            if (tType != "x" && tType != "center") {
                tile.textContent = tType.replace("x", "");
            };
            board.appendChild(tile);
        };
    };
}




