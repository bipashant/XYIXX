function changeflag() {
    var selected = document.frmLanguage.cblanguage[document.frmLanguage.cblanguage.selectedIndex].value;
    document.getElementById("languagelist").display = "none";
    alert(selected);
}

function chooseLanguage() {
    alert("asdasd");
    document.getElementById("languagelist").style.display = 'block';
    
}

