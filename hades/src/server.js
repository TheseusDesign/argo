import express from 'express';

const projectInfo = [
    {
        name : 'bose-corporation',
        upvotes : 0,
        comments : []
    } , {
        name : 'blacksnap-photography-met',
        upvotes : 0,
        comments : []
    } , {
        name : 'praize-production',
        upvotes : 0,
        comments : []
    } , 
]

const app = express();

app.use(express.json());

app.post('/api/projects/:name/upvote' , (req,res) => {
    const project = projectInfo.find(a => a.name === req.params.name);
    project.upvotes += 1;

    res.json(project);
})

app.post('/api/projects/:name/comments' , (req,res) => {
    const { name } = req.params;
    const { postedBy, text} = req.body;

    
    const project = projectInfo.find(a => a.name === name);

    project.comments.push({
        postedBy,
        text
    });

    res.json(project);
})


// app.get('/hello',function(req,res){
//     res.send('Hey gurlll, gonna gimme somthin?');
// });

// app.get('/hello/:name', function(req , res){
//     res.send('Heyyyyyy ' + req.params.name);
// });

// app.post('/hello',function(req,res){
//     res.send(req.body.name + ' this is a POST!!!');
// });



// Establishes port# and provides the terminal side comment informing where the port is
app.listen(8000 , function(){
    console.log('Server is listenig on port 8000');
});