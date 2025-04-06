const express=require('express');
const app=express();
const users=require('./MOCK_DATA.json');


const port=3000;

app.get('/api/users',(req,res)=>{
    res.json(users);
})

// for finding individual user with id
app.get('/api/users/:id',(req,res)=>{
    const id=Number(req.params.id)
    const user=users.find((user) => user.id === id);
    
 res.json(user);
});
app.get('/users/lastname', (req, res) => {
   
    const html = `
        <ul>
            ${users.map((user) => `<li>${user.last_name}</li>`).join("")}
        </ul>
    `;
    res.send(html);
});

app.listen(port,()=>{
    console.log('in server 3000')
});