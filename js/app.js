window.onload =()=>{
    let tableData = document.querySelectorAll(`td`),
        a = tableData[0],
        b = tableData[1],
        c = tableData[2],
        d = tableData[3],
        letters = [a, b, c, d],
        rotateCheck = [false, false, false, false];

    for(let index in letters)
    {
        letters[index].title = index;
        letters[index].addEventListener(`mousedown`, rotate, false);
    }

    function rotate(e)
    {
        {
        }
        {
        }
        else
        {
        }
    }
};
