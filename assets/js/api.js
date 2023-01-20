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

