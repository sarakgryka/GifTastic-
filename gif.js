$(document).ready(function () {

    //Create an array for buttons//

    let topic = ["Detroit Lions", "Pittsburg Steelers", "Chicago Bears", "Denver Broncos", "Oakland Raiders", "Dallas Cowboys", "Miami Dolphins", "New England Patriots", "Cleveland Browns", "Tennessee Titans", "Green Bay Packers", "Jacksonville Jaguars"];


    // define variables//query, api//
    let apiKey = "api_key=trDYfnaBbGQV9hOlzSN32F9lysZX9d7o";

    let searchTopic;

    let queryUrl = `https://api.giphy.com/v1/gifs/search?${apiKey}&q=${searchTopic}&limit=10&lang=en`;

    let state = $(this).attr("data-state");

    //dynamically create buttons//loop//

   function start() {

    $("#formGroupExampleInput").html("");

    

    for (i = 0; i < topic.length; i++) {

            let buttons = $("<button>");
            buttons.addClass("newButton btn btn-danger");
            buttons.text(topic[i]);
            buttons.attr("data-value", topic[i]);
            $(".buttonsDiv").append(buttons);



        }

    

        
    

   

    //onclick funciton to return results of button clicked//this data attribute//

    $(".newButton").on("click", function () {


        $(".resultsDiv").empty();



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

                    let imageUrl = response.data[j].images.downsized_still.url;
                    let imageMove = response.data[j].images.downsized.url;

                    // let allResults = $("<div>");
                    // allResults.addClass("allResults");


                    let apiResults = $("<img>");
                    apiResults.addClass("imageResults");
                    apiResults.attr("src", imageUrl);
                    apiResults.attr("data-state", "still");
                    apiResults.attr("data-move", imageMove);
                    apiResults.attr("data-still", imageUrl);



                    let ratings = $("<h5>");
                    ratings.text("Rating: " + response.data[j].rating);

                    // $(".allResults").append(ratings);
                    // $(".allResults").append(apiResults);

                    let allResults = $("<div>");
                    allResults.addClass("allResults");
                    allResults.prepend(apiResults, ratings);


                    $(".resultsDiv").prepend(allResults);
                    // $(".ratingsDiv").prepend(ratings);
                    console.log(queryUrl);

                };

                //onclick function for animation and still//

                $(".imageResults").on("click", function () {
                    //console.log("clicked");
                    state = $(this).attr("data-state");


                    if (state === "still") {

                        console.log("clicked");

                        $(this).attr("src", $(this).attr("data-move"));
                        $(this).attr("data-state", "animate");

                        console.log(state);






                    }

                    else {
                        console.log("clicked else")


                        $(this).attr("src", $(this).attr("data-still"));

                        $(this).attr("data-state", "still")
                    };




                });


               
            







            },

                function (error) {

                    console.log("error");



                });



    });

};

start ();


    // form function for search option to get value and push to the array//

    $(".submitBtn").on("click", function () {

        let newInput = $("#formGroupExampleInput").val();

       


        if (newInput === ""){

            return;
        }

        else if (topic.includes(newInput)){

            return;
        }

        else{

       
        topic.push(newInput);

        $(".buttonsDiv").empty();
       
        

        start();}

       

















     });


    //function calll that takes each topic in the array and remakes the buttons//

    //function to not allow double search or empty search//








































});