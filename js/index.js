
        google.charts.load('current', {'packages':["geochart","line", "corechart"]});
        google.charts.setOnLoadCallback(drawAllSheets);

        function drawAllSheets() {
            drawSheetName('GDP','SELECT A,B',
            GDPResponseHandler);

        drawSheetName('GDP_spending','SELECT A,B,C,D,E,F,G,H,I,J,K',
            GDPvsSpendingResponseHandler);
            } //drawAllSheets

        function drawSheetName(sheetName, query, responseHandler){
            var queryString = encodeURIComponent(query);
            var query = new google.visualization.Query(
            "https://docs.google.com/spreadsheets/d/1xS7BEvbJRdJW20ynQBsw6_GynqiVd7ABg9I6LlvmBYQ/gviz/tq?sheet="+sheetName+"&headers=1&tq="+queryString
            );
            query.send(responseHandler);
        } //drawSheetName

        //first plot
        function GDPResponseHandler(response){
            var data = response.getDataTable();
            data.sort({column: 1, desc:true})

            var options = {
                height: 400,
                colorAxis:{colors:["white", "navy"]}, //orange to blue
                backgroundColor: 'none',
            };

            var chart = new google.visualization.GeoChart(
            document.getElementById("GDP_div"));
            chart.draw(data, options);
        } //GDPresponsehandler

        google.charts.load('current', {packages:['wordtree']});
        google.charts.setOnLoadCallback(drawChart);
        //second plot
        function drawChart() {
            var data = google.visualization.arrayToDataTable(
            [ ['Phrases','size', {role:"style"}],
            ['GDP Government Spending Education',0.5,"blue"],
            ['GDP Net Exports',2,"black"],
            ['GDP Personal Consumption',2,"black"],
            ['GDP Business Investment',2,"black"],
            ['GDP Government Spending Healthcare',0.5,"blue"],
            ['GDP Government Spending Defense',0.5,"blue"],
            ['GDP Government Spending others',0.5,"black"],
            ]
            );

        var options = {
            maxFontSize: 25,
            wordtree: {
            format: 'implicit',
            word: 'GDP',
            },
            backgroundColor: "#f8f8f8"
        };

        var chart = new google.visualization.WordTree(document.getElementById('GDP_tree'));
        chart.draw(data, options);
        }
