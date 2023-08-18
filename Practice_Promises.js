const posts = [
    {title:'Post One'}, {title:'Post Two'}
];

function printPosts(){
    posts.forEach((post)=>{
        console.log(post.title)
    })
}
function create3rdPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'post Three'});
            resolve()
        }, 1000)
    }) 
}


function create4thPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'post Four'});
            resolve();
        }, 1000)
    }) 
}


function create5thPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'post Five'});
            resolve();
        }, 1000)
    }) 
}

function create6thPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'post Six'});
            resolve();
        }, 1000)
    }) 
}

function create7thPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'post Seven'});
            resolve();
        }, 1000)
    }) 
}



// create3rdPost().then(function(){
//     create4thPost().then(function(){
//         PrintPost();
//     })
// })

// create3rdPost().then(()=>create4thPost().then(()=>PrintPost()));

// create3rdPost().then(()=>create4thPost().then(()=>create5thPost().then(()=>create6thPost().then(()=>create7thPost().then(()=>PrintPost())))))

create3rdPost().then((create4thPost()).then((create5thPost()).then((create6thPost()).then((create7thPost()).then(printPosts)))))