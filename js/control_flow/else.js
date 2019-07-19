// else if statements

/* const password = 'p@ss'

if(password.length >= 8){
    console.log('password is correct');
} 
else if(password.includes('@')){
    console.log('password must not contain @')
}
else{
    console.log('password should be at least 8 characters');
} */

/* Switch statements */

const grade = 'A';

switch(grade){
    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('You got a B!');
        break;
    case 'C':
        console.log('You got a C');
        break;
    case 'D':
        console.log('You got a D');
        break;
    default:
        console.log('You got a lower grade');
}