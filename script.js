// bai 1
if (localStorage.getItem('information') === null) {
    localStorage.setItem('information', JSON.stringify([]))
}

document.getElementById("butnn").addEventListener('click', function() {
    console.log('hello')
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const pass = document.getElementById('pass')

    const infor = {
        name: name,
        email: email,
        pass: pass
    };
    const infor2 = {
        name: name,
        email: email,
        pass: pass
    }
    let accounts = [{infor, infor2}]
    console.log(accounts)
    const information = JSON.parse(localStorage.getItem('information'))
    information.push(infor)

    localStorage.setItem('information', JSON.stringify(information))
    
})

// bai 2
const listName = [
    {name: "ALex"},
    {name: "Gorgio"},
    {name: "Esther"}
];
const open = document.getElementById('open');

listname.forEach(function(item, index) {
    const ulTag = document.createElement("div");
    const nameFirst = document.createElement("name-first");
    const nameSecond = document.createElement("name-sc");
    const nameThird = document.createElement("name-third");


    ulTag.appendChild(nameFirst);
    ulTag.appendChild(nameSecond);
    ulTag.appendChild(nameThird);

    container.appendChild(ulTag)
    nameFirst.innerText = item.name;
    nameSecond.innerText = item.name;
    nameThird.innerText = item.name;

}
)