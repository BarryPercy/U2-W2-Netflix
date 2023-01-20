const url = "https://striveschool-api.herokuapp.com/api/movies"

postName = document.getElementById("post-name");
postDesc = document.getElementById("post-description");
postCategory = document.getElementById("post-category");
postImage = document.getElementById("post-image");

postMovie = async(movie)=>{
    console.log(movie);
    try{
        let res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(movie),
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzVjZmU3MzczODAwMTUzNzQzNzkiLCJpYXQiOjE2NzQxMzA4OTUsImV4cCI6MTY3NTM0MDQ5NX0.Lhwgk1EUUirn_mddnwsquUI0rwmcT740RTl3AXgqUL0'
            }
        })
        if(res.ok) {
            res = await res.json();
            console.log(res);
          } else {
            throw res.status + " " + res.statusText
          }  

    }catch(error){
        console.log(error);
    }
}

bla = ()=>{
    trendingArray.forEach(movie=>{
        postMovie(movie);
    })
}

putMovie = async(object,id)=>{
    try{
        let res = await fetch(url+id, {
            method: 'PUT',
            body: JSON.stringify(object),
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzVjZmU3MzczODAwMTUzNzQzNzkiLCJpYXQiOjE2NzQxMzA4OTUsImV4cCI6MTY3NTM0MDQ5NX0.Lhwgk1EUUirn_mddnwsquUI0rwmcT740RTl3AXgqUL0'
            }
        })
        if(res.ok) {
            res = await res.json();
          } else {
            throw res.status + " " + res.statusText
          }  

    }catch(error){
    }
}

getMovie=()=>{
    let movie=
    {
        name:`${postName.value}`,
        description:`${postDesc.value}`,
        category:`${postCategory.value}`,
        imageUrl:`${postImage.value}`,
    }
    if(movie.name!==''&&movie.description!==''&&movie.category!==''&&movie.imageUrl!==''){
        postMovie(movie)
        postName.value="";
        postDesc.value="";
        postCategory.value="";
        postImage.value="";
    }
    else{
        alert("Check your inputs!");
    }
}

getEditMovie=()=>{
    let id=editID.value;
    let movie=
    {
        name:`${editName.value}`,
        description:`${editDesc.value}`,
        category:`${editCategory.value}`,
        imageUrl:`${editImage.value}`,
    }
    if(object.name!==''&&object.description!==''&&object.category!==''&&object.imageUrl!==''){
        putMovie(movie,id);
        editID.value="";
        editName.value="";
        editDesc.value="";
        editCategory.value="";
        editImage.value="";
    }
    else{
        alert("Check your inputs!");
    }
}

deleteAll=()=>{

}
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
const deleteMovie = async (idToDelete) => {
  try {
    let res = await fetch(url +"/"+idToDelete, {
      method: "DELETE",
      headers:{
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzVjZmU3MzczODAwMTUzNzQzNzkiLCJpYXQiOjE2NzQxMzA4OTUsImV4cCI6MTY3NTM0MDQ5NX0.Lhwgk1EUUirn_mddnwsquUI0rwmcT740RTl3AXgqUL0'
    }
    })
  } catch (error) {
    console.log(error);
  }
}
const deleteAllMovies = async()=>{
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
                deleteCategory(category);
            })
        }
    }catch(error){
        console.log(error);
    }
}

const deleteCategory = async(category)=>{
    try{
        let res = await fetch(url+"/"+category, {
            method: 'GET',
            headers:{
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzVjZmU3MzczODAwMTUzNzQzNzkiLCJpYXQiOjE2NzQxMzA4OTUsImV4cCI6MTY3NTM0MDQ5NX0.Lhwgk1EUUirn_mddnwsquUI0rwmcT740RTl3AXgqUL0'
            }
        })
        if(res.ok){
            res = await res.json();
            res.forEach(movie=>
                deleteMovie(movie._id));
        }
    }catch(error){
        console.log(error);
    }
}


let trendingArray=[
    {
        imageUrl:"https://media.timeout.com/images/105455969/750/562/image.jpg",
        name:"2001: A Space Oddyssey",
        category:"Science Fiction",
        description:"The greatest film ever made began with the meeting of two brilliant minds: Stanley Kubrick and sci-fi seer Arthur C Clarke. ",
    },
    {
        imageUrl:"https://media.timeout.com/images/105455970/750/562/image.jpg",
        name:"The Godfather",
        category:"Thriller",
        description:"From the wise guys of Goodfellas to The Sopranos, all crime dynasties that came after The Godfather are descendants of the Corleones: Francis Ford Coppola's magnum opus is the ultimate patriarch of the Mafia category.",
    },
    {
        imageUrl:"https://media.timeout.com/images/105455971/750/562/image.jpg",
        name:"Citizen Kane",
        category:"Drama",
        description:"Back in the headlines thanks to David Fincher's brilliantly acerbic making-of drama Mank, Citizen Kane always finds a way to renew itself for a new generation of film lovers.",
    },
    {
        imageUrl:"https://media.timeout.com/images/105455978/750/562/image.jpg",
        name:"There Will Be Blood",
        category:"Drama",
        description:"On the road to becoming the most significant filmmaker of the last 20 years, Paul Thomas Anderson transformed from a Scorsesian chronicler of debauched L.A. life into a hard-nosed investigator of the American confidence man.",
    },
    {
        imageUrl:"https://media.timeout.com/images/105536435/750/562/image.jpg",
        name:"Goodfellas",
        category:"Thriller",
        description:"'As far back as I can remember, I always wanted to be a gangster.' Ray Liotta's opening line is the crime movie equivalent of 'Once upon a time…',",
    },
    {
        imageUrl:"https://media.timeout.com/images/105455985/750/562/image.jpg",
        name:"The Dark Knight",
        category:"Action",
        description:"`There's` a new Batman in Gotham, in the shadowy form of Matt Reeves's The Batman - and this is the bar it has to clear.",
    },
    {
        imageUrl:"https://media.timeout.com/images/105455997/750/562/image.jpg",
        name:"Jaws",
        category:"Thriller",
        description:"Steven Spielberg`s immortal blockbuster doesn`t need political prescience to stay relevant: it`s a movie about a big-ass shark eating people.",
    },   
]
