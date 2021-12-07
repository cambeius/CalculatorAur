var gramaj, carate, cantitateAliaj, cantitateFinala, print, cantiteAur;

document.getElementById("carate").addEventListener('change', (event) => {
    gramaj = document.getElementById("gramaj").value;
    if(document.getElementById("carateInitiale").value > event.target.value){
        cantitateAliaj = (document.getElementById("carateInitiale").value - event.target.value)*document.getElementById("gramaj").value/event.target.value;
        cantiteAur = 0;

    }else if(document.getElementById("carateInitiale").value < event.target.value){
        cantiteAur = document.getElementById("gramaj").value*(event.target.value-document.getElementById("carateInitiale").value)/(24-event.target.value);
        cantitateAliaj = 0;
    }else{
        cantitateAliaj = 0;
        cantiteAur = 0;
    }
    document.getElementById("print").innerHTML = (Math.round(cantitateAliaj * 100) / 100).toFixed(2) + "g";
    document.getElementById("printAll").innerHTML = (Math.round((parseFloat(cantitateAliaj) + parseFloat(cantiteAur) + parseFloat(gramaj)) * 100) / 100).toFixed(2) + "g";
    document.getElementById("printAur").innerHTML = (Math.round(cantiteAur * 100) / 100).toFixed(2) + "g";
});

document.getElementById("gramaj").addEventListener("input", (event) => {
    gramaj = event.target.value;
    if(document.getElementById("carateInitiale").value > document.getElementById("carate").value){
        cantitateAliaj = (document.getElementById("carateInitiale").value - document.getElementById("carate").value)*event.target.value/document.getElementById("carate").value;
        cantiteAur = 0;

    }else if(document.getElementById("carateInitiale").value < document.getElementById("carate").value){
        cantiteAur = event.target.value*(document.getElementById("carate").value-document.getElementById("carateInitiale").value)/(24-document.getElementById("carate").value);
        cantitateAliaj = 0;
    }else{
        cantitateAliaj = 0;
        cantiteAur = 0;
    }
    document.getElementById("print").innerHTML = (Math.round(cantitateAliaj * 100) / 100).toFixed(2) + "g";
    document.getElementById("printAll").innerHTML = (Math.round((parseFloat(cantitateAliaj) + parseFloat(cantiteAur) + parseFloat(gramaj)) * 100) / 100).toFixed(2) + "g";
    document.getElementById("printAur").innerHTML = (Math.round(cantiteAur * 100) / 100).toFixed(2) + "g";

});

document.getElementById("carateInitiale").addEventListener("change", (event) => {
    gramaj = document.getElementById("gramaj").value;
    if(event.target.value > document.getElementById("carate").value){
        cantitateAliaj = (event.target.value - document.getElementById("carate").value)*document.getElementById("gramaj").value/document.getElementById("carate").value;
        cantiteAur = 0;

    }else if(event.target.value < document.getElementById("carate").value){
        cantiteAur = document.getElementById("gramaj").value*(document.getElementById("carate").value-event.target.value)/(24-document.getElementById("carate").value);
        cantitateAliaj = 0;
    }else{
        cantitateAliaj = 0;
        cantiteAur = 0;
    }
    document.getElementById("print").innerHTML = (Math.round(cantitateAliaj * 100) / 100).toFixed(2) + "g";
    document.getElementById("printAll").innerHTML = (Math.round((parseFloat(cantitateAliaj) + parseFloat(cantiteAur) + parseFloat(gramaj)) * 100) / 100).toFixed(2) + "g";
    document.getElementById("printAur").innerHTML = (Math.round(cantiteAur * 100) / 100).toFixed(2) + "g";
});