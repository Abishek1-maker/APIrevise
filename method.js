const express=require('express');
const app=express();
const users=require('./MOCK_DATA.json');


const port=3000;

app.get('/api/users',(req,res)=>{
    res.json(users);
})

// for finding individual user with id
app.get('/api/users/:idi',(req,res)=>{
    const idi=Number(req.params.idi)
    const user=users.find((hi) => hi.id === idi);
 res.json(user);
});
app.get('/users/lastname', (req, res) => {
   
    const html = `
        <ul>
            ${users.map((by) => `<li>${by.last_name}</li>`).join("")}
        </ul>
    `;
    res.send(html);
});

app.listen(port,()=>{
    console.log('in server 3000')
});