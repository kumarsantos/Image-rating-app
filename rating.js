

const stars=document.querySelectorAll(".star");
const output=document.querySelector(".output");
// console.log(stars);
for(let x=0;x<stars.length;x++)
{
  stars[x].starValue=(x+1);
                                    //   stars[0].addEventListener('click',()=>{
                                    //   console.log("button is clicke");})
 // how to bind multiple addEventListener in the tags at a time

// #######################################################################################                                   
["click","mouseover","mouseout"].forEach(function(e){
  stars[x].addEventListener(e, showrating);
})

}

function showrating(e){
  let type=e.type;                               // console.log(type);
  let starvalue=this.starValue;                 // console.log(starvalue);
  
  if(type==='click')
    if(starvalue>=1)
      output.innerHTML="You Rated this " +starvalue+ " stars.";

stars.forEach(function(el,ind){
  if(type==='click')
    if(ind<starvalue)
      el.classList.add("orange");
    else
      el.classList.remove("orange");  

  if(type==='mouseover')
    if(ind<starvalue)  
      el.classList.add("yellow");
    else
      el.classList.remove("yellow");
  
  if(type==='mouseout')
      el.classList.remove("yellow");

})
}
// ##################################################################################
// For Reloading page
function nextpage(){
  window.location.reload();
}

