let divMenu = document.createElement("div");
let divContent = document.createElement("div");
divMenu.classList.add("divMenu");
divContent.classList.add("divContent");
let userId;
const validateUser= async()=>{
    userId=txtUserId.value;
    userName.innerHTML=await getName(userId);
    container.innerHTML="";
    let str=`
    <p onclick='showData(1)'><i class="bi bi-bookmarks-fill"></i>Feeds [All]</p>
    <p onclick='showData(2)'><i class="bi bi-file-earmark-post-fill"></i>My Posts</p>
    <p onclick='showData(3)'><i class="bi bi-journal-album"></i>My Albums</p>
    <p onclick='showData(4)'><i class="bi bi-person"></i>My Profiles</p>
    <p onclick='showData(5)'><i class="bi bi-list-task"></i>Todos</p>
    <p onclick='showData(5)'><i class="bi bi-door-open"></i>Logout</p>`;
    divMenu.innerHTML=str;
    container.append(divMenu);
    divContent.innerHTML= await getFeeds();
    container.append(divContent);
    
};

const fetchData = async(url)=>{
    const response =await fetch(url);
    const json=await response.json();
    return json;
};

const getName=async (id) =>{
    const url=`https://jsonplaceholder.typicode.com/users/${userId}`;
    const json= await fetchData(url);
    return  json.name;
};
//to printing the all feeds
const getFeeds = async () =>{
    const url="https://jsonplaceholder.typicode.com/posts";
    const json= await fetchData(url);
    let str="<div><h2>Feeds [All Posts]</h2>";
    json.map((element)=>{
        str+=`<p><b>User:</b>${element.userId}</p>
        <p><b>Title:</b>${element.title}</p>
        <p><b>Body:</b>${element.body}</p>
        <p onclick=getComments(${element.id})>View Comments</p>
        <hr>`;
    });
    str+="</div>";
    return str;
};


//for printing the posts
const getPosts= async ()=>{
    const url=`https://jsonplaceholder.typicode.com/posts/?userId=${userId}`;
    const json= await fetchData(url);
    let str="<div><h2>My Posts</h2>";
    json.map((element)=>{
        str += `
        <p><b>Title:</b>${element.title}</p>
        <p><b>Body:</b>${element.body}</p>
        <p onclick="getComments(${element.id})"><b>View Comments</b></p>
        <hr>
        `
    });
    str += "</div>";
    return str;
};

//for printing the comments
const getComments= async (id)=>{
    const url=`https://jsonplaceholder.typicode.com/comments/?postId=${id}`;
    const json= await fetchData(url);
    let str="<div><h2>My Comments</h2>";
    json.map((element)=>{
        str += `
        <p><b>Email:</b>${element.email}</p>
        <p><b>Name:</b>${element.name}</p>
        <p><b>Body:</b>${element.body}</p>
        <hr>
        `
    });
    str += "</div>";
    divContent.innerHTML= str;
};

// for displaying the albums

const getAlbums= async ()=>{
    const url=`https://jsonplaceholder.typicode.com/albums/?userId=${userId}`;
    const json= await fetchData(url);
    let str="<div><h2>My Albums</h2>";
    json.map((element)=>{
        str += `
        <p onclick="getPhotos(${element.Id})">${element.title}</p>
        <hr>
        `
    });
    str += "</div>";
    return str;
};
// for displaying the each photo
const getPhotos= async (id)=>{
    const url=`https://jsonplaceholder.typicode.com/photos/?albumId=${userId}`;
    const json= await fetchData(url);
    let str="<div><h2>My Albums</h2>";
    json.map((element)=>{
        str += `<a href="${element.url}"><img src="${element.thumbnailUrl}" onclick="getPhoto(${element.id})" width=250px height=250px></a>
        `
    });
    str += "</div>";
    divContent.innerHTML= str;
};

//for displaying my profile
const getProfile= async ()=>{
    const url=`https://jsonplaceholder.typicode.com/users/?id=${userId}`;
    const json= await fetchData(url);
    let str="<div><h2>My Profile</h2>";
    json.map((element)=>{
        str += `<p><b>User Name:</b>${element.username}</p>
        <p><b>Name:</b>${element.name}</p>
        <p><b>Email:</b>${element.email}</p>
        <p><b>Address:</b><br><b>Street:</b>${element.address.street}<br><br><b>City:</b>${element.address.city}<br><br><b>Zipcode:</b>${element.address.zipcode}</p>
        <hr>
        `
    });
    str += "</div>";
    return str;
};
// for printing the todo
const getTodo= async ()=>{
    const url=`https://jsonplaceholder.typicode.com/todos/?userId=${userId}`;
    const json= await fetchData(url);
    let str="<div><h2>Todos</h2>";
    json.map((element)=>{
        if(element.completed){
            str+=`<p ><b>Completed:</b>${element.completed}</p><input type="checkbox" checked></input>`
        }
        else{
            str+=`<p ><b>Completed:</b>${element.completed}</p><input type="checkbox"></input>`
        }
        str += `
        <p><b>Title:</b>${element.title}</p>
        <hr>
        `
    });
    str += "</div>";
    return str;

};
//for showing the data
const showData = async(pageId)=>{
    if(pageId===1){
        divContent.innerHTML=await getFeeds();
    }
    else if(pageId===2){
        divContent.innerHTML=await getPosts();
    }
    else if(pageId===3){
        divContent.innerHTML=await getAlbums();
    }
    else if(pageId===4){
        divContent.innerHTML=await getProfile();
    }
    else if(pageId===5){
        divContent.innerHTML=await getTodo();
    }
    else if(pageId===6){
        location.reload();
    }
};