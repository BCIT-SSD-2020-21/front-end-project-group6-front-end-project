// // Get Button HTML/CSS Info
// GetRemoveButtonInfo = document.querySelectorAll('.btn-danger')
// console.log(GetRemoveButtonInfo)

// // For loop used to itterate through multiple buttons
// for( i=0; i < GetRemoveButtonInfo.length; i++){
//     var removeButton = GetRemoveButtonInfo[i];
//     removeButton.addEventListener('click',function(){
//         console.log("Button was clicked")

//     });
// }

// $("button").click(function(){
//     $(".btn-danger").css("color","blue");
//     $("header").css("background-color", "green");
//     console.log("Button was clicked")
// });

//Remove Item-1
$(".rm-btn-1").click(function(){
    $(".hide-item-1").hide();
 });

//Remove Item-2
$(".rm-btn-2").click(function(){
    $(".hide-item-2").hide();
 });


