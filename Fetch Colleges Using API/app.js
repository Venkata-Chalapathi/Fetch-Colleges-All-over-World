let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");


btn.addEventListener("click" , async () => {
    let country = document.querySelector("input").value;
    // console.log(country);
    
    let collegeArr = await getColleges(country);
    // console.log(collegeArr);

    show(collegeArr);
    
})

function show(collegeArr) {
    let list = document.querySelector(".list");
    list.innerText = "";
    for(college of collegeArr){
        console.log(college.name);
        let item = document.createElement("li");
        item.innerText = college.name;
        list.appendChild(item);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch(err) {
        return [];
    }
}

