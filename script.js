let img1=document.querySelector(".hell");
let img2=document.querySelector(".heaven");
let img3=document.querySelector(".dark");
let body=document.querySelector("body");
let header=document.querySelector("h1");
let realms=document.querySelector(".realms");
let sugar=document.querySelector(".sugar");
let god=document.querySelector(".god");
let demon=document.querySelector(".demon");
let monster=document.querySelector(".monster");
let monster1=document.querySelector(".monster1");
let monster2=document.querySelector(".monster2");
let monster3=document.querySelector(".monster3");
let blank=document.querySelector(".blank");
let carnival=document.querySelector(".carnival");
let dungeon=document.querySelector(".dungeon");
let basement=document.querySelector(".basement");
let ghost=document.querySelector(".ghost");
let ultimo=document.querySelector(".ultimo");

img1.onclick=function(){
header.innerHTML="You Encounter 2 Monsters Who Do You Go With?";
body.style.backgroundColor="#21373F";
realms.style.display='none';
god.style.display='block';
demon.style.display='none';
monster.style.display='none';
monster1.style.display='block';
monster2.style.display='none';
monster3.style.display='none';
blank.style.display='none';
carnival.style.display='none';
dungeon.style.display='none';
basement.style.display='none';
ultimo.style.display='none';
}

god.onclick=function(){
header.innerHTML="This is just the Beginning...";
body.style.backgroundColor="#21373F";
realms.style.display='none';
god.style.display='none';
demon.style.display='none';
monster.style.display='none';
monster1.style.display='none';
monster2.style.display='none';
monster3.style.display='none';
blank.style.display='block';
carnival.style.display='none';
dungeon.style.display='none';
basement.style.display='none';
ultimo.style.display='none';
}

monster1.onclick=function(){
header.innerHTML="You have been teleported to the Carnival";
body.style.backgroundColor="#21373F";
realms.style.display='none';
god.style.display='none';
demon.style.display='none';
monster.style.display='none';
monster1.style.display='none';
monster2.style.display='none';
monster3.style.display='none';
blank.style.display='none';
carnival.style.display='block';
dungeon.style.display='none';
basement.style.display='none';
ultimo.style.display='block';
}

img2.onclick=function(){
   header.innerHTML="You Encounter 2 Monsters Who Do You Go With?";
body.style.backgroundColor="#21373F";
god.style.display='none';
realms.style.display='none';
demon.style.display='block';
monster.style.display='none';
monster1.style.display='none';
monster2.style.display='block';
monster3.style.display='none';
blank.style.display='none';
carnival.style.display='none';
dungeon.style.display='none';
basement.style.display='none';
ultimo.style.display='none';
}

demon.onclick=function(){
header.innerHTML="You have been teleported to the Dungeon";
body.style.backgroundColor="#21373F";
realms.style.display='none';
god.style.display='none';
demon.style.display='none';
monster.style.display='none';
monster1.style.display='none';
monster2.style.display='none';
monster3.style.display='none';
blank.style.display='none';
carnival.style.display='none';
dungeon.style.display='block';
basement.style.display='none';
ultimo.style.display='block';
}

monster2.onclick=function(){
header.innerHTML="This is just the beginning...";
body.style.backgroundColor="#21373F";
realms.style.display='none';
god.style.display='none';
demon.style.display='none';
monster.style.display='none';
monster1.style.display='none';
monster2.style.display='none';
monster3.style.display='none';
blank.style.display='block';
carnival.style.display='none';
dungeon.style.display='none';
basement.style.display='none';
ultimo.style.display='none';
}

img3.onclick=function(){
header.innerHTML="You Encounter 2 Monsters Who Do You Go With?";
god.style.display='none';
body.style.backgroundColor="#21373F";
realms.style.display='none';
demon.style.display='none';
monster.style.display='block';
monster1.style.display='none';
monster2.style.display='none';
monster3.style.display='block';
blank.style.display='none';
carnival.style.display='none';
dungeon.style.display='none';
basement.style.display='none';
ultimo.style.display='none';
}

monster.onclick=function(){
header.innerHTML="This is just the Beginning...";
body.style.backgroundColor="#21373F";
realms.style.display='none';
god.style.display='none';
demon.style.display='none';
monster.style.display='none';
monster1.style.display='none';
monster2.style.display='none';
monster3.style.display='none';
blank.style.display='block';
carnival.style.display='none';
dungeon.style.display='none';
basement.style.display='none';
ultimo.style.display='none';
}

monster3.onclick=function(){
header.innerHTML="You have been teleported to the basement ";
body.style.backgroundColor="#21373F";
realms.style.display='none';
god.style.display='none';
demon.style.display='none';
monster.style.display='none';
monster1.style.display='none';
monster2.style.display='none';
monster3.style.display='none';
blank.style.display='none';
carnival.style.display='none';
dungeon.style.display='none';
basement.style.display='block';
ultimo.style.display='block';
}

ultimo.onclick=function(){
  realms.style.display="flex";
header.innerHTML="What door do you want to enter?";
god.style.display='none';
demon.style.display='none';
monster.style.display='none';
monster1.style.display='none';
monster2.style.display='none';
monster3.style.display='none';
blank.style.display='none';
carnival.style.display='none';
dungeon.style.display='none';
basement.style.display='none';
body.style.backgroundColor="#21373F";
ultimo.style.display='none';
}






