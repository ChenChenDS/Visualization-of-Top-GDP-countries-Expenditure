google.charts.load('current', {'packages':["corechart","line"]});
google.charts.setOnLoadCallback(drawAllSheets);

function drawAllSheets() {
        drawSheetName('Prediction','SELECT A,B,C,D',
        PredictionResponseHandler);
} //drawAllSheets

function drawSheetName(sheetName, query, responseHandler){
    var queryString = encodeURIComponent(query);
    var query = new google.visualization.Query(
    "https://docs.google.com/spreadsheets/d/1xS7BEvbJRdJW20ynQBsw6_GynqiVd7ABg9I6LlvmBYQ/gviz/tq?sheet="+sheetName+"&headers=1&tq="+queryString
    );
    query.send(responseHandler);
} //drawSheetName

//first plot
function PredictionResponseHandler(response){
    var data = response.getDataTable();

    var options = {
            height: 600,
            width: 1200,
            vAxis:{title:'USD Dollar (Billion)'},
            hAxis:{title:'Year'},
            pointSize: 8,
            pointShape: 'star',
            legend:{
                position: "top"},
            backgroundColor: "none"
    };

    var chart = new google.visualization.LineChart(
        document.getElementById("prediction_div"));
    chart.draw(data, options);
} //GDPvsSpendingResponseHandler
