/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
/*
  function myFunction1() {
    var x = document.getElementById("mySubnav");
    if (x.className === "subnav") {
      x.className += " responsive";
    } else {
      x.className = "subnav";
    }
  }

  function showMore(){
    var x ,i,j;
    x = document.getElementsByClassName("later");
    for (i = 0; i < x.length; i++) {
       addClass(x[i], "first");
    }
    
    j=document.getElementById("more-btn");
      removeClass(j,"first");


  }

  function showLess(){
    var x ,i,j;
    x = document.getElementsByClassName("later");
    for (i = 0; i < x.length; i++) {
       removeClass(x[i], "first");
    }
    
    j=document.getElementById("more-btn");
      addClass(j,"first");


  }

  function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }

  function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

/*am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create( document.getElementById("chartdiv"), am4charts.XYChart3D);

// Add data
chart.data = [{
  "Year": "2010",
  "Researches": 30
}, {
  "Year": "2012",
  "Researches": 36
}, {
  "Year": "2014",
  "Researches": 48
}, {
  "Year": "2016",
  "Researches": 62
}, {
  "Year": "2018",
  "Researches": 78
}, {
  "Year": "2020",
  "Researches": 95
}];

// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Year";
categoryAxis.renderer.labels.template.rotation = 270;
categoryAxis.renderer.labels.template.hideOversized = false;
categoryAxis.renderer.minGridDistance = 20;
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.tooltip.label.rotation = 270;
categoryAxis.tooltip.label.horizontalCenter = "right";
categoryAxis.tooltip.label.verticalCenter = "middle";

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Researches";
valueAxis.title.fontWeight = "bold";

// Create series
var series = chart.series.push(new am4charts.ColumnSeries3D());
series.dataFields.valueY = "Researches";
series.dataFields.categoryX = "Year";
series.name = "Researches";
series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
series.columns.template.fillOpacity = .8;

var columnTemplate = series.columns.template;
columnTemplate.strokeWidth = 2;
columnTemplate.strokeOpacity = 1;
columnTemplate.stroke = am4core.color("#FFFFFF");

columnTemplate.adapter.add("fill", function(fill, target) {
  return chart.colors.getIndex(target.dataItem.index);
})

columnTemplate.adapter.add("stroke", function(stroke, target) {
  return chart.colors.getIndex(target.dataItem.index);
})

chart.cursor = new am4charts.XYCursor();
chart.cursor.lineX.strokeOpacity = 0;
chart.cursor.lineY.strokeOpacity = 0;

}); // end am4core.ready()

*/
/*
var slideIndex = 0;

showSlides("mySlides");

var hovering =false;
var qwe;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  //var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  if(!hovering)slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  if  (slideIndex==0){slideIndex = 1} 
  //for (i = 0; i < dots.length; i++) {
  //dots[i].className = dots[i].className.replace(" active", "");
  //}
  slides[slideIndex-1].style.display = "flex";  
  //dots[slideIndex-1].className += " active";
  qwe = setTimeout(showSlides, 2000); // Change image every 2 seconds
}
function lowerMajorSlide(){
    clearTimeout(qwe);
    slideIndex = slideIndex-1;
    showSlides();
}
function increaseMajorSlide(){
     clearTimeout(qwe);
    slideIndex = slideIndex+1;
    showSlides();
}

function toggleHovering(){
  hovering = !hovering;
 
}


function increaseSlide(){
 
  var imgs = document.getElementsByClassName("achiv-imgs")
  var i,j,k ;
  for(i=0;i<imgs.length;i++){
      if(imgs[i].className.indexOf("showAI")>=0){
        j=i;
        
      } 
  } 
  removeClass(imgs[j],"showAI");
  if(j>=imgs.length-1){k=0;}
  else{k=j+1;}
  
  addClass(imgs[k],"showAI");
  

}
function decreaseSlide(){
  var imgs = document.getElementsByClassName("achiv-imgs")
  var i,j,k ;
  for(i=0;i<imgs.length;i++){
      if(imgs[i].className.indexOf("showAI")>=0){
        j=i;
      } 
      
  } 
  removeClass(imgs[j],"showAI");
  if(j==0){k=imgs.length-1;}
  else{k=j-1;}
  
  addClass(imgs[k],"showAI");

}
*/