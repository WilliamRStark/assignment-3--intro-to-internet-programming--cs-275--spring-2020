window.onload =()=>{
    let tableData = document.querySelectorAll(`td`),
        a = tableData[0],
        b = tableData[1],
        c = tableData[2],
        d = tableData[3],
        letters = [a, b, c, d],
        rotateCheck = [false, false, false, false];

    {
    function rotateB()
    {
        if(bRotated)
        {
            b.className = `fa upright`;
        }
        else
        {
            b.className = `fa rotated`;
        }
        bRotated = !bRotated;
    }
    function rotateC()
    {
        if(cRotated)
        {
            c.className = `fa upright`;
        }
        else
        {
            c.className = `fa rotated`;
        }
        cRotated = !cRotated;
    }
    function rotateD()
    {
        if(dRotated)
        {
            d.className = `fa upright`;
        }
        else
        {
            d.className = `fa rotated`;
        }
        dRotated = !dRotated;
    }
};
