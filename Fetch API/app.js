const btnText=document.getElementById('btn-text');
console.log(btnText);

const btnJson=document.getElementById('btn-json');
console.log(btnJson);

const btnApi=document.getElementById('btn-api');
console.log(btnApi);

const post=document.getElementById('posts');

btnText.addEventListener('click', () => {
    fetch('index.txt')
    .then(res=>{
        return res.text();
    }).then(data=>{
        console.log(data);
        post.innerHTML=data;
    }).catch(err=>{
        console.log(err);
    })
});


btnJson.addEventListener('click',()=>{
    fetch('posts.json')
    .then(response=>{
        return response.json();
    }).then(data=>{
        console.log(data);

        let output='';
        data.forEach(post=>{
            output+=`
            
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.body}</p>`
        })

        post.innerHTML=output;
    }).catch(err=>{
        console.log(err);
    })
});

btnApi.addEventListener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        let output='';
        data.forEach(todo=>{
            output+=`
            
                    <h5 class="card-title">${todo.id}</h5>`
                    
        })

        post.innerHTML=output;
    })
    .catch((err)=>{
        console.log(err);
    })
})


