console.log("a"=="A")
const url= 'http://localhost:8080/scrap/';
let static='http://localhost:8080/static/';

/*const btn = document.getElementById("btn");
const auto= document.getElementById("auto");
const tel =document.getElementById("tel");
const elctro=document.getElementById("electro");
const info=document.getElementById("info");*/
btn.addEventListener("click",


                                                                                        
() => render(url+document.getElementById("keyword").value)
)


const tel=  ()=>{console.log('processing ');
render(static+"tel")


} 
const auto=   ()=>{console.log('processing ');
render(static+"auto")


} 









async function getItems(url) {
  console.log(url);
 
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}




async function render(keyword) {
   console.log("rendring");
    let html = '';
    let items = await getItems(keyword);
    console.log(items);
    items.forEach(item => {


        let htmlSegment = `
        
        
        
        <div class="col">
        <div class="card" style="width: 19rem;">
        <img style="height:200px;"class="card-img-top" src="${item.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.price}</p>
       
        </div>
      </div>
        
</div>      
        
        
        
  
        
        
`;
        
        
        
    

                        html += htmlSegment;
                    });
                
                    let container = document.querySelector('.row');
                    container.innerHTML = html;
                }



