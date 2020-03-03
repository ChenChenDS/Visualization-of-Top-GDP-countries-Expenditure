google.charts.load('current', {'packages':["corechart"]});
google.charts.setOnLoadCallback(drawAllSheets);

function drawAllSheets() {
    drawSheetName('Education_spending','SELECT A,B,C,D,E,F,G',
    EducationSpendingResponseHandler);

    drawSheetName('total_pp','SELECT A,D,E,F,G',
    EducationppResponseHandler);

	drawSheetName('Education_growth','SELECT A,H,I',
	EducationgrowthResponseHandler);
} //drawAllSheets

function drawSheetName(sheetName, query, responseHandler){
    var queryString = encodeURIComponent(query);
    var query = new google.visualization.Query(
        "https://docs.google.com/spreadsheets/d/1xS7BEvbJRdJW20ynQBsw6_GynqiVd7ABg9I6LlvmBYQ/gviz/tq?sheet="+sheetName+"&headers=1&tq="+queryString
        );
    query.send(responseHandler);
} //drawSheetName

function EducationSpendingResponseHandler(response){
    var data = response.getDataTable();
    data.sort({column:5, desc: true});

	var options = {height: 400,
				   backgroundColor:"none",
				   vAxis:{title:'Spending in Billions ($)'},
				   hAxis:{title:'Country'}};

	var chart = new google.visualization.ColumnChart(
		document.getElementById("Education_spending_div"));
	chart.draw(data, options); 
}//educationSpendingresponsehandler

function EducationppResponseHandler(response){
    var data = response.getDataTable();

    var options = {height: 500,
                   width: 780,
		           vAxis:{title:'GDP spending per capita(USD)'},
		           hAxis:{title:'Education spending per capita(USD)'},
		           bubble: {textStyle: {fontSize: 6, auraColor: 'none'}},
                   legend:{
                        position: "top",
                        maxLines: 2},
                   backgroundColor: 'none'
	};
    var chart = new google.visualization.BubbleChart(
        document.getElementById("education_gdp_pp_div"));
    chart.draw(data, options); 
}//EducationppResponseHandler

function EducationgrowthResponseHandler(response){
    var data = response.getDataTable();

    var options = {
            pointSize:10,
            backgroundColor:"none",
            hAxis: {pointSize:10},
            vAxes: {0: {viewWindowMode:'pretty', 
                        format:"short",
                        title:"Growth in absolute value",
                        viewWindow: {min: -120}},
                    1: {viewWindowMode:'pretty', 
                        format:"percent",
                        title:"Growth in percentage",
                        viewWindow: {min: -0.72}},
            },
            series: {0: {type : 'bars', targetAxisIndex:0},
                     1: {type : 'line', targetAxisIndex:1}
            },
            colors: ["#2E64FE", "#FF8000"],
            chartArea:{left:100,top:100, width:500, height:400}
    };

        var chart = new google.visualization.ComboChart(
            document.getElementById('Education_growth_div'));
        chart.draw(data, options);
}//EducationgrowthResponseHandler
