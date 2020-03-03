google.charts.load('current', {'packages':["corechart","line"]});
google.charts.setOnLoadCallback(drawAllSheets);

function drawAllSheets() {
        drawSheetName('GDP_spending','SELECT A,B,C,D,E,F,G,H,I,J,K',
        GDPvsSpendingResponseHandler);

        drawSheetName('Healthcare_Military','SELECT A,B,C,D,E,F,G,H,I,J,K',
        HealthMilitaryResponseHandler);

        drawSheetName('Education_Military','SELECT A,B,C,D,E,F,G,H,I,J,K',
        EducationMilitaryResponseHandler);
        } //drawAllSheets

function drawSheetName(sheetName, query, responseHandler){
    var queryString = encodeURIComponent(query);
    var query = new google.visualization.Query(
    "https://docs.google.com/spreadsheets/d/1xS7BEvbJRdJW20ynQBsw6_GynqiVd7ABg9I6LlvmBYQ/gviz/tq?sheet="+sheetName+"&headers=1&tq="+queryString
    );
    query.send(responseHandler);
} //drawSheetName

//first plot
function GDPvsSpendingResponseHandler(response){
    var data = response.getDataTable();

    var options = {
            height: 500,
            width: 850,
            vAxis:{title:'Percentage %',
                   viewWindow: {min: 5,
                                max: 28}
            },
            hAxis:{title:'Year'},
            pointSize: 8,
            pointShape: 'star',
            legend:{
                position: "top",
                maxLines: 3},
            backgroundColor: "none"
    };

    var chart = new google.visualization.LineChart(
        document.getElementById("GDP_spending_div"));
    chart.draw(data, options);
} //GDPvsSpendingResponseHandler

//second plot
function HealthMilitaryResponseHandler(response){
    var data = response.getDataTable();

    var options = {
            height: 500,
            width: 850,
            vAxis:{title:'Ratio',
                   viewWindow: {min: 0,
                                max: 12}
            },
            hAxis:{title:'Year'},
            pointSize: 8,
            pointShape: 'diamond',
            legend:{
                position: "top",
                maxLines: 3},
            backgroundColor: "none"
    };

    var chart = new google.visualization.LineChart(
        document.getElementById("health_military_div"));
    chart.draw(data, options);
} //HealthMilitaryResponseHandler

//third plot
function EducationMilitaryResponseHandler(response){
    var data = response.getDataTable();

    var options = {
            height: 500,
            width: 850,
            vAxis:{title:'Ratio',
                   viewWindow: {min: 0,
                                max: 5}
            },
            hAxis:{title:'Year'},
            pointSize: 8,
            pointShape: 'circle',
            legend:{
                position: "top",
                maxLines: 3},
            backgroundColor: "none"
    };

    var chart = new google.visualization.LineChart(
        document.getElementById("education_military_div"));
    chart.draw(data, options);
} //EducationMilitaryResponseHandler