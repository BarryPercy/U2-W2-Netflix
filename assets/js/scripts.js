// let trendingArray=[
//     {
//         "image":"assets/images/media/media0.webp",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media2.webp",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media3.webp",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media4.jpg",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media5.webp",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media6.jpg",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media7.webp",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media8.webp",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     }   
// ]

// let watchItArray=[
//     {
//         "image":"assets/images/media/media9.jpg",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media10.jpg",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media11.jpg",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media12.jpg",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media13.jpg",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media14.webp",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media15.jpg",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media16.webp",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     }  
// ]

// let newReleasesArray=[
//     {
//         "image":"assets/images/media/media17.jpg",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media18.jpg",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media19.webp",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media20.jpg",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media21.webp",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media22.webp",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media23.webp",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media24.jpg",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     }  
// ]

// let bingeWorthyArray=[
//     {
//         "image":"assets/images/media/media25.webp",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media26.webp",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media27.jpg",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media28.jpg",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media29.jpg",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media30.jpg",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media31.webp",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     },
//     {
//         "image":"assets/images/media/media32.jpg",
//         "match":"99",
//         "genre":"genre",
//         "seasons":"5"
//     }  
// ]
// let trendingNow = document.getElementById("trending-now");
// let watchItAgain = document.getElementById("watch-it-again");
// let newReleases = document.getElementById("new-releases");
// let bingeWorthy = document.getElementById("binge-worthy");
// function createTrending(){
//     for(let i=0;i<trendingArray.length;i++){
//         trendingNow.innerHTML+=`
//         <div class="image-div">
//             <img src=${trendingArray[i].image} class="netflix-image">
//             <div class="infos-container container">
//                 <div class="row icon-row">
//                     <img class="col-3 icons" src="assets/images/icons/play-button.png">
//                     <img class="col-3 icons" src="assets/images/icons/add.png">
//                     <img class="col-3 icons" src="assets/images/icons/like.png">
//                     <img class="col-3 icons" src="assets/images/icons/down-arrow.png">
//                 </div>
//                 <div class="row info-row">
//                     <div class="col">
//                         <p><span class="match-green">${trendingArray[i].match}% Match</span> &nbsp; <img class="age-rating slightly-up" src="assets/images/icons/number-15.png"> &nbsp; ${trendingArray[i].seasons} Seasons &nbsp;<img class="age-rating icons slightly-up" src="assets/images/icons/hd.png"></p> 
//                     </div>
//                 </div>
//                 <div class="row">
//                     <div class="col genre">
//                         <p class="align-left">${trendingArray[i].genre} &nbsp;<span class="grey-dot">&#x2022</span>&nbsp;${trendingArray[i].genre}&nbsp;<span class="grey-dot">&#x2022</span>&nbsp;${trendingArray[i].genre}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         `
//     }
// }

// function createWatchItAgain(){
//     for(let i=0;i<watchItArray.length;i++){
//         watchItAgain.innerHTML+=`
//         <div class="image-div">
//             <img src=${watchItArray[i].image} class="netflix-image">
//             <div class="infos-container container">
//                 <div class="row icon-row">
//                     <img class="col-3 icons" src="assets/images/icons/play-button.png">
//                     <img class="col-3 icons" src="assets/images/icons/add.png">
//                     <img class="col-3 icons" src="assets/images/icons/like.png">
//                     <img class="col-3 icons" src="assets/images/icons/down-arrow.png">
//                 </div>
//                 <div class="row info-row">
//                     <div class="col">
//                         <p><span class="match-green">${watchItArray[i].match}% Match</span> &nbsp; <img class="age-rating slightly-up" src="assets/images/icons/number-15.png"> &nbsp; ${watchItArray[i].seasons} Seasons &nbsp;<img class="age-rating icons slightly-up" src="assets/images/icons/hd.png"></p> 
//                     </div>
//                 </div>
//                 <div class="row">
//                     <div class="col genre">
//                         <p class="align-left">${watchItArray[i].genre} &nbsp;<span class="grey-dot">&#x2022</span>&nbsp;${watchItArray[i].genre}&nbsp;<span class="grey-dot">&#x2022</span>&nbsp;${watchItArray[i].genre}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         `
//     }
// }

// function createNewReleases(){
//     for(let i=0;i<newReleasesArray.length;i++){
//         newReleases.innerHTML+=`
//         <div class="image-div">
//         <img src=${newReleasesArray[i].image} class="netflix-image">
//             <div class="infos-container container">
//             <div class="row icon-row">
//                 <img class="col-3 icons" src="assets/images/icons/play-button.png">
//                 <img class="col-3 icons" src="assets/images/icons/add.png">
//                 <img class="col-3 icons" src="assets/images/icons/like.png">
//                 <img class="col-3 icons" src="assets/images/icons/down-arrow.png">
//             </div>
//             <div class="row info-row">
//                 <div class="col">
//                     <p><span class="match-green">${newReleasesArray[i].match}% Match</span> &nbsp; <img class="age-rating slightly-up" src="assets/images/icons/number-15.png"> &nbsp; ${newReleasesArray[i].seasons} Seasons &nbsp;<img class="age-rating icons slightly-up" src="assets/images/icons/hd.png"></p> 
//                 </div>
//             </div>
//             <div class="row">
//                 <div class="col genre">
//                     <p class="align-left">${newReleasesArray[i].genre} &nbsp;<span class="grey-dot">&#x2022</span>&nbsp;${newReleasesArray[i].genre}&nbsp;<span class="grey-dot">&#x2022</span>&nbsp;${bingeWorthyArray[i].genre}</p>
//                 </div>
//             </div>
//         </div>
//         `
//     }
// }

// function createBingeWorthy(){
//     for(let i=0;i<bingeWorthyArray.length;i++){
//         bingeWorthy.innerHTML+=`
//         <div class="image-div">
//         <img src=${bingeWorthyArray[i].image} class="netflix-image">
//             <div class="infos-container container">
//             <div class="row icon-row">
//                 <img class="col-3 icons" src="assets/images/icons/play-button.png">
//                 <img class="col-3 icons" src="assets/images/icons/add.png">
//                 <img class="col-3 icons" src="assets/images/icons/like.png">
//                 <img class="col-3 icons" src="assets/images/icons/down-arrow.png">
//             </div>
//             <div class="row info-row">
//                 <div class="col">
//                     <p><span class="match-green">${bingeWorthyArray[i].match}% Match</span> &nbsp; <img class="age-rating slightly-up" src="assets/images/icons/number-15.png"> &nbsp; ${bingeWorthyArray[i].seasons} Seasons &nbsp;<img class="age-rating icons slightly-up" src="assets/images/icons/hd.png"></p> 
//                 </div>
//             </div>
//             <div class="row">
//                 <div class="col genre">
//                     <p class="align-left">${bingeWorthyArray[i].genre} &nbsp;<span class="grey-dot">&#x2022</span>&nbsp;${bingeWorthyArray[i].genre}&nbsp;<span class="grey-dot">&#x2022</span>&nbsp;${newReleasesArray[i].genre}</p>
//                 </div>
//             </div>
//         </div>
//         `
//     }
// }
const url = "https://striveschool-api.herokuapp.com/api/movies"
displayMovies = document.getElementById("display-movies")
getCategory = async(category)=>{
    try{
        let res = await fetch(url+"/"+category, {
            method: 'GET',
            headers:{
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzVjZmU3MzczODAwMTUzNzQzNzkiLCJpYXQiOjE2NzQxMzA4OTUsImV4cCI6MTY3NTM0MDQ5NX0.Lhwgk1EUUirn_mddnwsquUI0rwmcT740RTl3AXgqUL0'
            }
        })
        if(res.ok){
            res = await res.json();
            console.log(res);
            noSpaceCategory = category.replace(/ /g, "");
            displayMovies.innerHTML+=`<h3>${category}</h3><div class="row row no-wrap" id=${noSpaceCategory}></div>`
            categoryId= document.getElementById(`${noSpaceCategory}`)
            res.forEach(movie=>{
                categoryId.innerHTML+=`
                    <div class="image-div">
                        <img src=${movie.imageUrl} class="netflix-image">
                        <div class="infos-container container">
                        <div class="row icon-row">
                            <img class="col-3 icons" src="assets/images/icons/play-button.png">
                            <img class="col-3 icons" src="assets/images/icons/add.png">
                            <img class="col-3 icons" src="assets/images/icons/like.png">
                            <img class="col-3 icons" src="assets/images/icons/down-arrow.png">
                        </div>
                        <div class="row info-row">
                            <div class="col">
                                <p>${movie.name}</p>
                                <p>${movie.category}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                `})
        }
    }catch(error){
        console.log(error);
    }
}

displayAllMovies = async()=>{
    try{
        let res = await fetch(url, {
            method: 'GET',
            headers:{
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzVjZmU3MzczODAwMTUzNzQzNzkiLCJpYXQiOjE2NzQxMzA4OTUsImV4cCI6MTY3NTM0MDQ5NX0.Lhwgk1EUUirn_mddnwsquUI0rwmcT740RTl3AXgqUL0'
            }
        })
        if(res.ok){
            res = await res.json();
            res.forEach(category=>{
                getCategory(category);
            })
        }
    }catch(error){
        console.log(error);
    }
}
window.onload = function() {
    displayAllMovies();
    //createWatchItAgain();
    //createNewReleases();
    //createBingeWorthy();
}