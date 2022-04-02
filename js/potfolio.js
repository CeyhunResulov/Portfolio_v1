//dropdown hissenin gorunmesi ve gizlenmesi
function dropdown() {
    document.querySelector(".dropdown-parent").style.visibility = "visible"
    document.querySelector(".dropdown-parent").style.opacity = "1"
    document.querySelector(".dropdown-parent").style.transition = "all .5s"
    document.querySelector(".gallery-back").style.display = "none"
    document.querySelector(".gallery-back-color").style.display = "none"
    document.querySelector(".close").style.visibility = "visible"
}
function getclose() {
    document.querySelector(".dropdown-parent").style.visibility = "hidden"
    document.querySelector(".dropdown-parent").style.opacity = "0"
    document.querySelector(".gallery-back").style.display = "flex"
    document.querySelector(".gallery-back-color").style.display = "block"
    document.querySelector(".close").style.visibility = "hidden"
}


// // // i am kelly jhon hissesinin deyismesi
function deyis() {
    if (document.querySelector(".user").style.visibility == "hidden") {
        document.querySelector(".user").style.visibility = "visible"
        document.querySelector(".user").style.opacity = "1"
        document.querySelector(".user-work").style.opacity = "0"
        document.querySelector(".web-design").style.visibility = "visible"
        document.querySelector(".web-design").style.opacity = "1"
        document.querySelector(".my-passion").style.opacity = "0"
    } else {
        document.querySelector(".user").style.visibility = "hidden"
        document.querySelector(".user-work").style.visibility = "visible"
        document.querySelector(".user-work").style.opacity = "1"
        document.querySelector(".user").style.opacity = "0"
        document.querySelector(".web-design").style.visibility = "hidden"
        document.querySelector(".my-passion").style.visibility = "visible"
        document.querySelector(".my-passion").style.opacity = "1"
        document.querySelector(".web-design").style.opacity = "0"
        document.querySelector(".user-work").style.display = "block"

    }
}

setInterval(deyis, 5000)



//gallery


function gallery(a) {
    document.querySelector(".gallery-back img").setAttribute("src", a.querySelector("img").getAttribute("src"))
    document.querySelector(".gallery-back img").setAttribute("data", a.querySelector("img").getAttribute("data"))
    document.querySelector(".gallery-back").style.visibility = "visible"
    document.querySelector(".gallery-back-color").style.visibility = "visible"
    document.querySelector(".gallery-back-color").style.transition = "all .5s"
    document.querySelector(".gallery-back-color").style.background = "rgba(12, 12, 12, 0.85)"
    document.querySelector(".gallery-back img").style.opacity = "1"
    document.querySelector(".gallery-back img").style.transition = "all 1s"



}

function closeGallery() {
    document.querySelector(".gallery-back").style.visibility = "hidden"
    document.querySelector(".gallery-back-color").style.visibility = "hidden"
    document.querySelector(".gallery-back-color").style.background = "none"
    document.querySelector(".gallery-back img").style.opacity = "0"


}

// sekilleri deyisen oxlarin gorunmesi
function showAngle(x) {
    x.querySelector("i").style.visibility = "visible"
    x.querySelector("i").style.opacity = "1"
    x.querySelector("i").style.transition = "all .5s"
}
function hiddenAngle(y) {
    y.querySelector("i").style.visibility = "hidden"
    y.querySelector("i").style.opacity = "0"
}


// sekillerin oxlarla deyisdirilmesi
let pictures = [
    {
        id: "1",
        img: "img/1.jpg",

    },
    {
        id: "2",
        img: "img/2.jpg",

    },
    {
        id: "3",
        img: "img/3.jpg",

    },
    {
        id: "4",
        img: "img/4.jpg",

    },
    {
        id: "5",
        img: "img/5.jpg",

    },
    {
        id: "6",
        img: "img/6.jpg",

    },
    {
        id: "7",
        img: "img/7.jpg",

    },
    {
        id: "8",
        img: "img/8.jpg",

    },
    {
        id: "9",
        img: "img/9.jpg",

    },
    {
        id: "10",
        img: "img/10.jpg",

    },
    {
        id: "11",
        img: "img/11.jpg",

    },
    {
        id: "12",
        img: "img/12.jpg",

    }
]
let gallery_grid = document.querySelector(".gallery-grid")
for (let picture of pictures) {
    gallery_grid.innerHTML += `
            <div onclick="gallery(this)">
                <img class="picture"
                    src="${picture.img}" alt="" data="${picture.id}">
            </div>
    `

}



function next() {
    let find_id = document.querySelector(".modal-picture").getAttribute("data")
    let next_id = find_id * 1 + 1
    for (let item of pictures) {
        if (item.id == next_id) {
            document.querySelector(".modal-picture").setAttribute("src", item.img)
            document.querySelector(".modal-picture").setAttribute("data", next_id)
            document.querySelector(".modal-picture").style.transition = "all 1s"

        }

    }
}
function previous() {
    let find_id = document.querySelector(".modal-picture").getAttribute("data")
    let previous_id = find_id * 1 - 1
    for (let item of pictures) {
        if (item.id == previous_id) {
            document.querySelector(".modal-picture").setAttribute("src", item.img)
            document.querySelector(".modal-picture").setAttribute("data", previous_id)
            document.querySelector(".modal-picture").style.transition = "all .5s"
        }

    }
}



