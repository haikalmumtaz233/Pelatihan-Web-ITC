const navbarIcon = document.querySelector("#navbar-icon");
navbarIcon.addEventListener("click", function () {
  const navbarGroup = document.querySelector("#navbar-group");
  navbarGroup.classList.toggle("navbar-group--close");
});

const navbarItems = document.querySelectorAll("#navbar-group li");

for (const item of navbarItems) {
  item.addEventListener("click", function () {
    const navbarGroup = document.querySelector("#navbar-group");
    navbarGroup.classList.add("navbar-group--close");
  });
}

const dataFakultas = [
  {
    fakultasName: "Fakultas Teknologi Mineral",
    prodiList: ["Teknik Geologi", "Teknik Geofisika"],
  },
  {
    fakultasName: "Fakultas Teknik Industri",
    prodiList: ["Teknik Informatika", "Teknik Industri", "Sistem  Informasi"],
  },
  {
      fakultasName : "Fakultas Teknik Sipil",
      prodiList: ["Teknik Sipil"]
  }
];

const container = document.querySelector('#fakultasList')
for (const fakultas of dataFakultas) {
    const h3 = document.createElement('h3');
    h3.innerText = fakultas.fakultasName;

    const ul = document.createElement('ul');
    for (const prodi of fakultas.prodiList) {
        const li = document.createElement('li');
        li.innerText = prodi

        ul.appendChild(li)
    }


    container.appendChild(h3); 
    container.appendChild(ul);
}  

// foreach, map, filter, reduce
const number = [1,2,3,4,5,6]

// number.forEach(function(item){
//     console.log(item)
// })

// const hasilMap = number.map(function(item){
//     console.log(item)
//     return item * item
// })

// console.log(hasilMap)

// const hasilFilter = number.filter(function(item){
//     if (item % 2){
//         return item;
//     }
// })

// console.log(hasilFilter)

const hasilReduce = number.reduce(function(total, currentValue, currentIndex, arr){
    console.log(currentValue)
    return total * currentValue
}, 10);

console.log(hasilReduce)