$('.brush').click(function(){
    $('#brushImage').attr("src","./brush.jpg")
    console.log("clicked")
})


$('.reusablecontainer').click(function(){
    console.log("clicked")
    $('#brushImage').attr("src","./box.png")
})

$('.cups').click(function(){
    console.log("clicked")
    $('#brushImage').attr("src","./BambooCup.png")
})

$('.bamboostraw').click(function(){
    console.log("clicked")
    $('#brushImage').attr("src","./strawswooden.png")
})


$('.loofah').click(function(){
    console.log("clicked")
    $('#brushImage').attr("src","./loofahimage.jpg")
})




const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      // console.log(entry);
      if(entry.isIntersecting){
        entry.target.classList.add('appear');
      }else{
        return;
      }
    })
  })
  
  const hiddenElements = document.querySelectorAll('.fade-in');
  hiddenElements.forEach((el)=>observer.observe(el));
  