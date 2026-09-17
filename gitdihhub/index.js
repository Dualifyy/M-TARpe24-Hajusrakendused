let givenProfile = "";
let profileName = "";
let profileId = "";
let profileLink = "";
let profileRepos = "";

let fetchProfile = async () => {
    let fetchedData

    await fetch(`https://api.github.com/users/${givenProfile}`)
    .then((response) => response.json())
    .then((data) => fetchedData = data)
    .catch((reason) => console.log("failed cuz: ", reason))

    console.log("fetched data: ", fetchedData);


}
 
const input = document.querySelector("input")
input.addEventListener("change", updateContent)

function updateContent(e) {
    givenProfile = e.target.value
    fetchProfile()
}

function renderContent() {
    document.getElementById("content").innerHTML = `
    <h2 id="name">Name: ${profileName}</h2>
    <p id="id">Id: ${profileId}</p>
    <p id="repos">Repos: ${profileRepos}</p>
    <p id="url">URL: <a href="${profileLink}" target="_blank"></a></p>

    `
}
renderContent()