window.onload =()=>{
    let tableData = document.querySelectorAll(`td`),
        a = tableData[0],
        b = tableData[1],
        c = tableData[2],
        d = tableData[3],
        aRotated = false,
        bRotated = false,
        cRotated = false,
        dRotated = false;

    a.addEventListener(`mousedown`, rotateA);
    b.addEventListener(`mousedown`, rotateB);
    c.addEventListener(`mousedown`, rotateC);
    d.addEventListener(`mousedown`, rotateD);

