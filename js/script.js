function afficherNb(param){
    let nbBouttons = param.innerText;

    let recupeId = document.getElementById("output");
    recupeId.innerHTML += nbBouttons;
}

function effacer(param1){
        let btnEfface = param1.innerText;
        btnEfface = " ";

        let efface = document.getElementById("output");
        efface.innerHTML = btnEfface;
}

function operation(){
        let recupBtn = document.getElementById("output").innerText;
        let resultat = eval(recupBtn);
        let affich = document.getElementById("output").innerHTML += ' = '+resultat;
        
        return affich;
}

function supCarac(){
        let supCBtn = document.getElementById("output").innerText;
        let supC = supCBtn.slice(0, -1);
        let affiche = document.getElementById("output").innerHTML = supC;

        return affiche;
}