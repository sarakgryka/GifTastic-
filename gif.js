$(document).ready(function () {

    //Create an array for buttons//

    let topic = ["Detroit Lions", "Pittsburg Steelers", "Chicago Bears", "Denver Broncos", "Oakland Raiders", "Dallas Cowboys", "Miami Dolphins", "New England Patriots", "Cleveland Browns", "Tennessee Titans", "Green Bay Packers", "Jacksonville Jaguars"];


    // define variables//query, api//
    let apiKey = "api_key=trDYfnaBbGQV9hOlzSN32F9lysZX9d7o";

    let searchTopic;

    let queryUrl = `https://api.giphy.com/v1/gifs/search?${apiKey}&q=${searchTopic}&limit=10&lang=en`;

    let state = "still";

    //dynamically create buttons//loop//

    function start() {

        for (i = 0; i < topic.length; i++) {

            let buttons = $("<button>");
            buttons.addClass("btn btn-danger");
            buttons.text(topic[i]);
            buttons.attr("data-value", topic[i]);
            $(".buttonsDiv").append(buttons);

          

        }
    };

    start();

    //onclick funciton to return results of button clicked//this data attribute//

    $(".btn").on("click", function () {


        //searchInfo();



        //});


        //pulls information from api and returns on page//still animation and rating//

    searchTopic = $(this).attr("data-value");
    console.log(searchTopic);

     queryUrl = `https://api.giphy.com/v1/gifs/search?${apiKey}&q=${searchTopic}&limit=10&lang=en`;


        $.ajax({

            url: queryUrl,
            method: "GET"
        })
            .then(function (response) {

                console.log(response);

                

                for (j = 0; j < 10; j++) {

                    let imageUrl = response.data[j].images.fixed_height_still.url;

                    // let allResults = $("<div>");
                    // allResults.addClass("allResults");


                    let apiResults = $("<img>");
                    apiResults.attr("src", imageUrl);
                    
                    

                    let ratings =$ ("<h1>");
                     ratings.text("rating: " + response.data[j].rating);

                    // $(".allResults").append(ratings);
                    // $(".allResults").append(apiResults);
                   
                    $(".resultsDiv").prepend(ratings,apiResults);
                   // $(".ratingsDiv").prepend(ratings);
                    console.log(queryUrl);

                    //  console.log(response.data[i].images.fixed_height_still);




                };


            },

                function (error) {

                    console.log("error");



                });

    });







    //onclick function for animation and still//



    // form function for search option to get value and push to the array//


    //function calll that takes each topic in the array and remakes the buttons//

    //function to not allow double search or empty search//







































});