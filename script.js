$(document).ready(function() {
    // let n = 3;
    // $('.slider').on('change', function() {
    //     let n = Math.floor($(this).val());
    
    // });
    var API_KEY = config.API_KEY;
    var video= "";
    // var videos=$("#videos")

    $("#form").submit(function(event) {
        event.preventDefault();
        // alert("form is submitted");

        var search = $("#search").val();
        videoSearch(API_KEY, search, $('.slider').val());

    });

    document.getElementById('btn2').onclick = function() {
        
        // alert("form is submitted");

        var search = $("#search").val();
        playlistSearch(API_KEY, search, $('.slider').val());
    };

    document.getElementById('btn3').onclick = function() {
        
        // alert("form is submitted");

        var search = $("#search").val();
        customSearch(API_KEY, search, 1);
    };

    function videoSearch(key, search, maxResults) {
        $("#videos").empty()
        $.get("https://www.googleapis.com/youtube/v3/search?part=snippet&key="+key
        + "&type=video&maxResults=" + maxResults + "&q=" + search, function(data){
            
        // console.log(data);

        data.items.forEach(item => {
            video= `
            <iframe class="vid" width="420" height="315" src="https://www.youtube.com/embed/${item.id.videoId}"?si=CB4a528bXk0qmyPT&autoplay=1&showinfo=0&loop=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            
            `;
            // console.log(video)
            $("#videos").append(video);
        });
    }
        );
    }
    

    function playlistSearch(key, search, maxResults) {
        $("#videos").empty()
        $.get("https://www.googleapis.com/youtube/v3/search?part=snippet&key="+key
        + "&type=playlist&maxResults=" + maxResults + "&q=" + search, function(data){
            
        // console.log(data);

        data.items.forEach(item => {
            video= `
            
            <iframe  class="vid" width="420" height="315" src="https://www.youtube.com/embed/videoseries?si=vpMvKSHRp4MlEmcr&amp;list=${item.id.playlistId}&autoplay=0&showinfo=0&loop=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 

            
            `;
            // console.log(video)
            $("#videos").append(video);
        });
    }
        );
    }


    function customSearch(key, search, maxResults) {
        $("#videos").empty()

        


        const rndInt = Math.floor(Math.random() * 200) + 1;
            
        // var userInput = document.getElementById('userInput').value;
        var userInput = search;
        // var lnk = document.getElementById('lnk');

        //    
        var url
            
        if (!userInput.length){
            url = "https://www.youtube.com/embed/?list=PLjE24dapzlxRl42ELixBrgrIkxo56krTq&index=" + rndInt.toString() + "&autoplay=1&showinfo=0&loop=1&rel=0";
            
            // url = "https://www.youtube.com/embed/videoseries?si=vpMvKSHRp4MlEmcr&amp;list=PLjE24dapzlxRl42ELixBrgrIkxo56krTq&autoplay=1&showinfo=0&loop=1&rel=0";
        }
            
        else if (userInput.length === 11) {
            url = "https://www.youtube.com/embed/"+ userInput +"?si=CB4a528bXk0qmyPT"+"&autoplay=1&showinfo=0&loop=1&rel=0";
        }

        else if (userInput.length > 34) {
            if ( userInput.split('=').length === 2 ) {
                url = "https://www.youtube.com/embed/"+ userInput.split('=').at(-1) +"?si=CB4a528bXk0qmyPT"+"&autoplay=1&showinfo=0&loop=1&rel=0";
            }
            else {
                url = "https://www.youtube.com/embed/?list=" + userInput.split('=').at(-1) + "&index=" + rndInt.toString() + "&autoplay=1&showinfo=0&loop=1&rel=0";
                // url= "https://www.youtube.com/embed/videoseries?si=vpMvKSHRp4MlEmcr&amp;list="+userInput.split('=').at(-1)+"&autoplay=1&showinfo=0&loop=1&rel=0" ;
            }
        }

        else {
            url = "https://www.youtube.com/embed/?list=" + userInput + "&index=" + rndInt.toString() + "&autoplay=1&showinfo=0&loop=1&rel=0";
            // url= "https://www.youtube.com/embed/videoseries?si=vpMvKSHRp4MlEmcr&amp;list="+userInput+"&autoplay=1&showinfo=0&loop=1&rel=0" ;
        }
            
        //
            
        // var url= "https://www.youtube.com/embed/videoseries?si=vpMvKSHRp4MlEmcr&amp;list="+userInput+"&autoplay=1&showinfo=0&loop=1&rel=0" ;
        // <iframe  id="mainframe" class="iframeContent" src="https://www.youtube.com/embed/videoseries?si=vpMvKSHRp4MlEmcr&amp;list=PLjE24dapzlxRl42ELixBrgrIkxo56krTq&autoplay=1&showinfo=0&loop=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 

        // document.getElementById("mainframe").src=url;
        

    
        
        

    
        video= `
        
        <iframe  id="mainframe" class="custom_vid vid" width="420" height="315" src=${url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 

        
        `;
        // console.log(video)
        $("#videos").append(video);
        
    }
        
    


});
