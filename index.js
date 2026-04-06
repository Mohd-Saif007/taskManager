const express =require("express");
const mongoose=require("mongoose");
const app=express();

app.set("view engine","ejs")
app.use(express.static(__dirname))
app.use(express.urlencoded({extended:false}))

mongoose.connect("mongodb://localhost:27017/taskmanager")
.then(()=>{
    console.log("connet")
})
.catch((err)=>{
    console.log(err)
})

const dataschema= mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    category:{
        type:String,
        
    },
    dueDate:{
        type:Date
    },
    completed:{
        type:Boolean,
        default:false
    }
})

const collection=  mongoose.model("task",dataschema)
app.get("/",(req,res)=>{
    res.render("home")
})
app.post("/register",(req,res)=>{
    const userdata= new collection({title:req.body.title,description:req.body.description,category:req.body.category,dueDate:req.body.dueDate})
    userdata.save()
    res.redirect("/show")
})

app.get("/show",(req,res)=>{
        collection.find()
        .then((result)=>{
            res.render("show",{result})
        })
     .catch((err)=>{
        console.log(err)
     })
})

app.post("/delete",(req,res)=>{
    collection.deleteOne({_id:req.body.id})
    .then(()=>{
        res.redirect( "/show");
    })
    .catch((err)=>{
        console.log(err);
    });
})

app.post("/mark-complete",(req,res)=>{
    collection.updateOne({_id:req.body.id},{$set:{completed:true}})
    .then(()=>{
        res.redirect("/show")
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.post("/edit",(req,res)=>{
    collection.findOne({_id:req.body.id})
    .then((result)=>{
        res.render("edit",{result})
    })
    .catch((err)=>{
        console.log(err)
    })

})

app.post("/update",(req,res)=>{
    collection.updateOne({_id:req.body.id},{$set:{title:req.body.title,description:req.body.description,category:req.body.category,dueDate:req.body.dueDate}})
    .then(()=>{
        res.redirect("/show")
    })
    .catch((err)=>{
        console.log(err)
    })

})

app.listen("3000")
