//function & method
const name = 'Michael';

const greet = () =>{
    return 'hello';
}

let resultOne = greet();
console.log(resultOne);

//method 
let resultTwo = name.toUpperCase();

//console.log(resultTwo);

// Objects

let user = {
    name: 'Justice',
    age: '18',
    email: 'justice@justicebanson.com',
    location: 'Bellingham',
    blog: ['Modern JavaScript', 'html, css and jquery are dead but javascript rules'],
    login(){
        console.log('The user logged in');
    },
    logout(){
        console.log('This user is logged out');
    },
    logBlogs(){
        this.blog.forEach(blog =>{
            console.log(blog)
        });
    }
}

//console.log(user);
//console.log(user.name);

user['name'] = 'Jonathan';

console.log(user.name);
console.log(user.age);
console.log(typeof user);

user.logBlogs();