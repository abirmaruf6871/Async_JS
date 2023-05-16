


let data=document.getElementById('btn');
data.addEventListener('click', loadData);

function loadData(){
    const xhr=new XMLHttpRequest();

    xhr.open('GET', 'index.txt', true);

    xhr.onload=function()
    {
        if(this.status===200)
        {
            console.log(this.responseText);
        }
    }

    xhr.send();
}


let btn2=document.getElementById('btn2')

btn2.addEventListener('click',loadAbir);
function loadAbir(){
    const xhr2=new XMLHttpRequest();
    xhr2.open('GET', 'posts.json', true);

    xhr2.onload=function()
    {
        if(this.status===200)
        {
            const posts=JSON.parse(this.responseText);
            
            console.log(posts);
            let output='';
            posts.forEach(post=>{
                 output+=`
            <ul>
                    <li>ID: ${post.id}</li>
                    <li>User ID: ${post.userId}</li>
                    <li>Title: ${post.title}</li>
                    <li>Body: ${post.body}</li>
                </ul>
            `;


            }
                )
            
            document.getElementById('posts').innerHTML =output;
        }
    }
    xhr2.send();
    
}