

function getProverb(){
    let id = document.getElementById("input").value;
    if(id<1 || id>5){
        document.getElementById('para').style = 'color: red'
        document.getElementById("para").textContent = 'Number must be between 1 and 5 included.';
    }
    else {
        document.getElementById('para').style = 'color: darkblue'
    fetch("/api/"+id)
    .then(Result => Result.json())
    .then(data => {document.getElementById("para").textContent = data[0].proverb_text});
    }
}

function create(){
    let aName = document.getElementById("authorNAME").value;
    let aBirth = document.getElementById("authorBIRTH").value;
    let aDeath = document.getElementById("authorDEATH").value;
    fetch(`/api/create.html/${aName}/${aBirth}/${aDeath}`)
    .then(Result => Result.json())
    .then(data => {
        const display_el = document.getElementById("para");
        let row = [`ID: ${data[0].id_author}`];
        row.push(`Name: ${data[0].author_name}`);
        row.push(`Birth: ${data[0].birth}`);
        row.push(`Death: ${data[0].death}`);
        for(let i = 0 ; i<row.length; i++){
            const paragraphe = document.createElement('p')
            paragraphe.textContent = row[i];
            display_el.appendChild(paragraphe)
        }
    })
}

function retrieve(){
    let aName = document.getElementById("authorNAME").value;
    fetch(`/api/retrieve.html/${aName}`)
    .then(Result => Result.json())
    .then(data => {
        const display_el = document.getElementById("para");
        if (data.length===0){
            display_el.textContent = 'No match found.';
        }
        else{
            display_el.textContent = '';
            for(let i = 0 ; i<data.length; i++){
                const paragraphe = document.createElement('p')
                paragraphe.textContent = `ID: ${data[i].id_author} / Name: ${data[i].author_name} / Birth: ${data[i].birth} / Death: ${data[i].death}`;
                display_el.appendChild(paragraphe)
        }
    }
    })
}

function update(){
    let id = document.getElementById("prvrbID").value;
    let text = document.getElementById("prvrbTEXT").value;
    if(id<1 || id>5){
        document.getElementById('para').style = 'color: red'
        document.getElementById("para").textContent = 'Number must be between 1 and 5 included.';
    }
    else{
        document.getElementById('para').style = 'color: darkblue'
        fetch(`/api/update.html/${id}/${text}`)
        .then(Result => Result.json())
        .then(data => {
            const display_el = document.getElementById("para");
            display_el.textContent = JSON.stringify(data);
        })
    }
}

function deleteP(){
    let id = document.getElementById("input").value;
    fetch(`/api/delete.html/${id}`)
    .then(Result => Result.json())
    .then(data => {
        const display_el = document.getElementById("para");
        display_el.textContent = JSON.stringify(data);
    })
}