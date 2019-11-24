
function home()
{
    document.getElementById("showData").style.display="none";
    document.getElementById("abc").style.display="block";
    document.getElementById("page").style.display="none";
}

function selectType()
{
    var type = document.getElementById("selectType").value;

    img1 = document.getElementById("img1");
    img2 = document.getElementById("img2");
    img3 = document.getElementById("img3");
    img4 = document.getElementById("img4");

    if(type=="Anime")
    {
        img1.src="images/11.jpg";
        img2.src="images/12.jpg";
        img3.src="images/13.jpg";
        img4.src="images/14.jpg";
    }
    else if(type=="Movies")
    {
        img1.src="images/img1.png";
        img2.src="images/img2.jpg";
        img3.src="images/img3.jpg";
        img4.src="images/img4.jpg";
    }
    else if(type=="TV Shows")
    {
        img1.src="images/tvimg1.jpg";
        img2.src="images/tvimg2.jpg";
        img3.src="images/tvimg3.jpg";
        img4.src="images/tvimg4.jpg";
    }
}

function func(a)
{
    var txtSearch = document.getElementById("inputSearch").value;
    $('#showData').empty();
        $.getJSON("https://www.omdbapi.com/?s="+txtSearch+"&page="+a+"&apikey=666248b2",function(data){
                //console.log(data);


            console.log(data);
            

            for(i=0;i<data.Search.length;i++)
            {
                if(data.Search[i].Poster=="N/A")
                    continue;

                var divv = document.createElement('div');
                divv.className="movie";

                var para = document.createElement('h2'); 
                var node = document.createTextNode(data.Search[i].Title);
                para.appendChild(node);
                
                var img = document.createElement('img'); 
                    img.src =  data.Search[i].Poster;
        
                var reldate = document.createElement('p');
                    reldate.className="date"
                    node = document.createTextNode("Release Date: "+data.Search[i].Year)
                    reldate.appendChild(node);

                
        
                divv.appendChild(img);
                divv.appendChild(para);
                divv.appendChild(reldate);

                
        
                document.getElementById('showData').appendChild(divv);
            }
    });
}

function search()
{

    document.getElementById("abc").style.display="none";
    

    var type = document.getElementById("selectType").value;

    var i;
    //var arrData=[];

    var txtSearch = document.getElementById("inputSearch").value;

    if(type=="Anime")
    {
    
        $('#showData').empty();
    
        $.getJSON("https://cors-anywhere.herokuapp.com/api.jikan.moe/v3/search/anime?q="+txtSearch+"&limit=20",function(data)
        {
            console.log(data);
            
        
            for(i=0;i<data.results.length;i++)
            {
                //arrData.push(data.results[i].title);
                var divv = document.createElement('div');
                divv.className="anim";
                
                var img = document.createElement('img'); 
                    img.src =  data.results[i].image_url;
        
                var para = document.createElement('h2'); 
                var node = document.createTextNode(data.results[i].title);
                para.appendChild(node);
        
                divv.appendChild(img);
                divv.appendChild(para);
        
                document.getElementById('showData').appendChild(divv);
            }
        
            
            document.getElementById("page").style.display="flex";
            
        
        });
    
    }


    else if(type=="TV Shows")
    {
        $('#showData').empty();
        $.getJSON("https://api.tvmaze.com/search/shows?q="+txtSearch,function(data){
                //console.log(data);

            console.log(data);
            
        
            for(i=0;i<data.length;i++)
            {
                //arrData.push(data.results[i].title);
                var divv = document.createElement('div');
                divv.className="tv";
                
                var img = document.createElement('img'); 
                    img.src =  data[i].show.image.original;
        
                var para = document.createElement('h4');
                    para.className="rating";
                var node = document.createTextNode("Rating: "+data[i].show.rating.average);
                para.appendChild(node);
        
                divv.appendChild(img);
                divv.appendChild(para);
        
                document.getElementById('showData').appendChild(divv);
            }
            document.getElementById("page").style.display="flex";
        });
    }

    else if(type=="Movies")
    {
        $('#showData').empty();
        $.getJSON("https://www.omdbapi.com/?s="+txtSearch+"&apikey=666248b2",function(data){
                //console.log(data);


            console.log(data);
            

            for(i=0;i<data.Search.length;i++)
            {

                if(data.Search[i].Poster=="N/A")
                    continue;

                var divv = document.createElement('div');
                divv.className="movie";

                var para = document.createElement('h2'); 
                var node = document.createTextNode(data.Search[i].Title);
                para.appendChild(node);
                
                var img = document.createElement('img'); 
                    img.src =  data.Search[i].Poster;
        
                var reldate = document.createElement('p');
                    reldate.className="date"
                    node = document.createTextNode("Release Date: "+data.Search[i].Year)
                    reldate.appendChild(node);

                
        
                divv.appendChild(img);
                divv.appendChild(para);
                divv.appendChild(reldate);

                
        
                document.getElementById('showData').appendChild(divv);
            }

            document.getElementById("page").style.display="flex";
    });
    }


    document.getElementById("showData").style.display="flex";
}
