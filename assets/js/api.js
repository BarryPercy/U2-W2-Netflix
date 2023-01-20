const url = "https://striveschool-api.herokuapp.com/api/movies"
const params = new URLSearchParams(location.search);
const id = params.get("id");
console.log(id);

postName = document.getElementById("post-name");
postDesc = document.getElementById("post-description");
postCategory = document.getElementById("post-category");
postImage = document.getElementById("post-image");

postMovie = async(movie)=>{
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
            displayAllMovies();
          } else {
            throw res.status + " " + res.statusText
          }  

    }catch(error){
        console.log(error);
    }
}


putMovie = async(object)=>{
    try{
        console.log(url+"/"+id)
        let res = await fetch(url+"/"+id, {
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
    let movie=
    {
        name:`${editName.value}`,
        description:`${editDesc.value}`,
        category:`${editCategory.value}`,
        imageUrl:`${editImage.value}`,
    }
    if(movie.name!==''&&movie.description!==''&&movie.category!==''&&movie.imageUrl!==''){
        putMovie(movie);
        editName.value="";
        editDesc.value="";
        editCategory.value="";
        editImage.value="";
    }
    else{
        alert("Check your inputs!");
    }
}
displayMovies=document.getElementById("display-movies");
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
                categoryId.innerHTML+=`<div class="card black-text" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${movie.name}</h5>
                            <button class="btn btn-primary"><a href="backoffice.html?id=${movie._id}" class="text-white edit-and-delete">Edit</a></button>
                            <button class="btn btn-danger" onclick="deleteMovie('${movie._id}')">Delete</button>
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
            displayMovies.innerHTML="";
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
    if(res.ok){
         displayAllMovies();
    }
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
            res.forEach(movie=>{
                deleteMovie(movie._id);
            })
        }
    }catch(error){
        console.log(error);
    }
}
let editMovieObject={};
searchMovie = async()=>{
    try{
        let res = await fetch(url, {
            method: 'GET',
            headers:{
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzVjZmU3MzczODAwMTUzNzQzNzkiLCJpYXQiOjE2NzQxMzA4OTUsImV4cCI6MTY3NTM0MDQ5NX0.Lhwgk1EUUirn_mddnwsquUI0rwmcT740RTl3AXgqUL0'
            }
        })
        if(res.ok){
            
            res = await res.json();
            console.log(res);
            res.forEach(category =>{
                searchMovieInCategory(category);
                
            })
            
        }
    }catch(error){
        console.log(error);
    }
}
searchMovieInCategory = async(category)=>{
    try{
        let res = await fetch(url+"/"+category, {
            method: 'GET',
            headers:{
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzVjZmU3MzczODAwMTUzNzQzNzkiLCJpYXQiOjE2NzQxMzA4OTUsImV4cCI6MTY3NTM0MDQ5NX0.Lhwgk1EUUirn_mddnwsquUI0rwmcT740RTl3AXgqUL0'
            }
        })
        if(res.ok){
            res=await res.json();
            res.forEach(movie=>{
                if(movie._id===id){
                    editMovieObject=movie;
                }
            })
        }
    }catch(error){
        console.log(error);
    }
}

createEditDiv=async()=>{
    try {
        await searchMovie();
        if (id !== null) {
          newEditDiv.innerHTML=`
            <div class="col-6">
                <h2>Edit Movie - ${id}</h2>
                <form>
                    <div class="form-group">
                        <label for="name-of-item">Name Of Movie</label>
                        <input type="text" class="form-control" id="edit-name">
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <input type="text" class="form-control" id="edit-description">
                    </div>
                    <div class="form-group">
                        <label for="price">Category</label>
                        <input type="text" class="form-control" id="edit-category">
                    </div>
                    <div class="form-group">
                        <label for="image-url">Image URL</label>
                        <input type="text" class="form-control" id="edit-image">
                    </div>
                    <a href="./backoffice.html"><button type="button" class="btn btn-primary" onclick="getEditMovie()">Submit</button></a>
                </form>
            </div>
            `
            editName = document.getElementById("edit-name");
            editDesc = document.getElementById("edit-description");
            editCategory = document.getElementById("edit-category");
            editImage = document.getElementById("edit-image");
            setTimeout(()=>{
                editName.value=editMovieObject.name;
                editDesc.value=editMovieObject.description;
                editCategory.value=editMovieObject.category;
                editImage.value=editMovieObject.imageUrl;
            }, 1000);   
        } else {
          displayAllMovies();
        }
    
      } catch (error) {
        handleError(error)
    
      }    
}
newEditDiv = document.getElementById("new-edit-div");
window.onload = async()=>{
    createEditDiv();
}