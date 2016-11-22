var express=require('express');
var app=express();
var handlebars=require('express-handlebars')
                .create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');


app.set('port',process.env.PORT||3000);

app.use(express.static('public'));

//middleware to check for a valid url
app.use(function(req,res,next){
    var error=null;
     try {
  decodeURIComponent(req.path);
} catch(e) { //Throws an URIError ("malformed URI sequence") exception when url is used wrongly.
    error=e;
}
   (error) ?  res.redirect(301,'/404') : next(); //redirects ,to /404
})

//renders home page.
app.get('/',function(req,res){
   res.render('home');
});

//renders 404.for invalid url
app.get('/404',function(req,res){
    res.status(404);
    res.send("Not Found or Bad request");
});

//for a valid url,renders desired response
app.get('/:date',function(req,res){
    var date=parseDate(req.params.date),
    bool=date.match(/[a-z]/i);

    var obj = getResult(bool,date);

    res.json(obj);
});

function parseDate(date){
    return date.replace(/\W+^(,)/g, "");
}

function getResult(bool,date){
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var unix,natural,date;

   //to convert the UNIX timestamp(if given) from seconds to milliseconds,inorder to get correct date from Javascript Date constructor.
   date=new Date((bool)?date:parseInt(date)*1000);
   //to revert back to UNIX timestamp(if converted in above line) or to get UNIX timestamp for natural date(if given)
    unix=  date.getTime()*(0.001);
    natural= `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    return {
        "unix":unix,
        "natural":(isNaN(unix)) ? null : natural
    }
}

app.listen(app.get('port'));
