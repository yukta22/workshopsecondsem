//decleration
let divcard = document.createElement("div");
let divcontainer = document.createElement("div");
let form = document.createElement("form");
let str="";
//setAttribute
form.setAttribute("action","#");
divcard.setAttribute("class","card");
divcontainer.setAttribute("class","container");
//str change
str= '<input type="text">';
str+='<input type="text">';
str+='<input type="submit" class="btn">';
form.innerHTML = str;
//append
divcard.append(divcontainer);
divcontainer.append(form);
document.body.append(divcard);



fetch("http://localhost:3000/post")
.then((res)=>res.json())
.then((data)=>{
	console.log(data);
	makelist(data);
});

let divlist = document.createElement("div");
function makelist(data) {
	str = "";
	data.forEach((ele)=>{
		str+="<p>" + ele["title"] + "=>" +ele["desc"];
		str+="</p>";

	})
	divlist.innerHTML = str;
	document.body.append(divlist);
}
  let myheader = new Headers();
  myheader.append("content-Type","application/json");
form.onsubmit = (evt)=>{
	evt.preventDefault();
	fetch("http://localhost:3000/post",{
		method: "post" ,
		body:JSON.stringify({
			"title":form.children[0].value,
			"desc": form.children[1].value
		}),
		headers:myheader
	})
	.then((res)=>res.json())
	.then((data)=>{
		console.log(data);
		makelist(data);
	});
}

















