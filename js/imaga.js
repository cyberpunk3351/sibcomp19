function getImage() {
    const random = Math.floor(Math.random() * 4);   
    return '<img src="img/'+random+'.png" border="0" alt="Sibcomp Service"/>';
}
document.getElementById("imaaaga").innerHTML = getImage();
document.getElementById("imaaaga2").innerHTML = getImage();