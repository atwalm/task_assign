google.charts.load('current', {'packages':['corechart']});
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(showChart);


   var tasks = [];

 function drawList()
{
  event.preventDefault();
  var mainForm = document.forms[0];

  var name = mainForm["person"].value;
  var taskListOpts=mainForm["taskListOpts"].value;
  var task = mainForm["myname"].value;

tasks.push({
    name: name,
    taskListOpts: taskListOpts,
    task: task
  });

  showList();
  showChart(tasks);

  mainForm.reset();
}

function showList()
{
  var ul = document.querySelector("ul");
  ul.innerText = "";

    // go through each task
    for (var i = 0; i < tasks.length; i++) {
      // create list item and text
      var li = document.createElement("li");

        li.innerText=tasks[i].name + " need to do " +tasks[i].task + " which is " + tasks[i].taskListOpts + " task ";
        ul.appendChild(li);

}
}

function showChart(tasks)
  {
    console.log("showChart");

    let JeremyCount = 0;
    let RosaCount = 0;
    let RequeloCount = 0;

    // loop through tasks to count totals

    for(var task of tasks) {
      if (task.name == "Jeremy") {
        JeremyCount++;
      } else if (task.name == "Rosa") {
        RosaCount++;
      } else if (task.name == "Requelo") {
        RequeloCount++;
      }
    }

    console.log(JeremyCount, RosaCount, RequeloCount);

    // build the object for the chart
    let taskCounter={Jeremy:JeremyCount,
                    Rosa:RosaCount,
                    Requelo:RequeloCount};

    console.log(taskCounter);

    // add chart code here
         var data = new google.visualization.DataTable();
          data.addColumn('string', ' tasks done by person');
          data.addColumn('number', ' number of tasks');

          data.addRows([
            ['Jeremy', taskCounter.Jeremy],
            ['Rosa', taskCounter.Rosa],
            ['Requelo', taskCounter.Requelo]
          ]);

          var options = {
            title: 'Tasks assign to different different persons',
            hAxis: {
              title: 'Tasks done by persons'
            },
            vAxis: {
              title: 'Number of tasks'
            }
          };
         var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
         chart.draw(data, options);
  }
window.onload=function()
{
  var form=document.querySelector("form");
  form.onsubmit =drawList;
}
