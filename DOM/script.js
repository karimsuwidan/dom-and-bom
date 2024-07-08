
let header = document.createElement("header") 
let p = document.createElement("p")
let ul = document.createElement("ul")
let li1 = document.createElement("li")
let li2 = document.createElement("li")
let li3 = document.createElement("li")
let li4 = document.createElement("li")
let txt0= document.createTextNode("Elzero");
let txt1= document.createTextNode("Home");
let txt2= document.createTextNode("About");
let txt3= document.createTextNode("Service");
let txt4= document.createTextNode("Contact");
p.appendChild(txt0)
header.appendChild(p)
li1.appendChild(txt1)
li2.appendChild(txt2)
li3.appendChild(txt3)
li4.appendChild(txt4)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)
header.appendChild(ul)
document.body.appendChild(header)
p.style.color="#23ff23"
ul.style.listStyle="none";
header.style.display="flex"
header.style.padding="20px"
header.style.justifyContent="space-between"
header.style.alignItems="center"
ul.style.display="flex"
ul.style.color="#8f9283"
li1.style.marginRight="20px"
li2.style.marginRight="20px"
li3.style.marginRight="20px"
let content = document.createElement("div")
content.className="content"
for(i=1 ;i<=15 ;i++){ 
    let product =document.createElement("div")
    product.className="product"
    let span = document.createElement("span")
    let txtt=document.createTextNode([i]);
    span.appendChild(txtt)
    product.appendChild(span)
    content.appendChild(product)
    document.body.appendChild(content)
    product.append("product")
    product.style.backgroundColor="white"
    product.style.margin="10px"
    product.style.paddingBottom="40px"
    product.style.paddingTop="40px"
    product.style.textAlign="center"
    span.style.display="block"
    product.style.width="250px"
    span.style.paddingTop="20px"
    span.style.fontSize="25px"
}
content.style.display="flex"
content.style.flexWrap="wrap"
content.style.marginRight="20px"
content.style.marginLeft="20px"
content.style.backgroundColor="#d0c8c8"
let footer=document.createElement("footer")
let tt=document.createTextNode("CopyRight2021.")
footer.appendChild(tt)
document.body.appendChild(footer);
footer.style.textAlign="center"
footer.style.padding="25px"
footer.style.backgroundColor="green"
footer.style.color="white"
footer.style.marginRight="20px"
footer.style.marginLeft="20px"