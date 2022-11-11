let arr = JSON.parse(localStorage.getItem('shopNow'))
console.log(arr)
Display(arr)
Display2(arr)
Display3(arr)

function Search(){
    let x = document.getElementById('Search').value 
    let NewData = arr.filter(function(el){
        return (el.category.toLowerCase().includes(x.toLowerCase())) || (el.name.toLowerCase().includes(x.toLowerCase()))
    })
    SearchData(NewData)
}

function SearchData(a){
    let box = document.getElementById('card').innerHTML = ""
    document.querySelector('.banner').innerHTML = ""
    document.querySelector('.poster').innerHTML = ""
    document.querySelector('.non').innerHTML = ""
    document.getElementById('d').innerText = "Your Search Result"


    for(let i=0 ;i< a.length ;i++){
        // console.log(el.name)
        let div = document.createElement('div')
        let img = document.createElement('img')
            img.setAttribute('src',a[i].img)

        let name = document.createElement('h2')
            name.innerText = a[i].name
        let des = document.createElement('p')
            des.innerText = a[i].description

        let price = document.createElement('p')
            price.innerText = a[i].price

        let rating = document.createElement('p')
            rating.innerText = a[i].rating
    
        let box = document.getElementById('card')
        
        div.append(img,name,des,price,rating)
        box.append(div)
    }


}





let dArr = JSON.parse(localStorage.getItem("details")) || [];

function Display(a){
    let box = document.getElementById('card').innerHTML = ""
    
    for(let i=0 ;i< 8 ;i++){
        // console.log(el.name)
        let div = document.createElement('div')
        div.addEventListener('click',function(){
                dArr.push(a[i])
                
            localStorage.setItem("details",JSON.stringify(dArr))

        });
        let img = document.createElement('img')
            img.setAttribute('src',a[i].img)

        let name = document.createElement('h2')
            name.innerText = a[i].name
        let des = document.createElement('p')
            des.innerText = a[i].description

        let price = document.createElement('p')
            price.innerText = a[i].price

        let rating = document.createElement('p')
            rating.innerText = a[i].rating
    
        let box = document.getElementById('card')
       
        div.append(img,name,des,price,rating)
        box.append(div,)
    }
}



function Display2(a){
    
    
    for(let i=0 ;i< 12 ;i++){
        console.log(a[i].category)
        if(arr[i].category == "dress"){
        let div = document.createElement('div')
        let img = document.createElement('img')
            img.setAttribute('src',a[i].img)

        let name = document.createElement('h2')
            name.innerText = a[i].name
        let des = document.createElement('p')
            des.innerText = a[i].description

        let price = document.createElement('p')
            price.innerText = a[i].price

        let rating = document.createElement('p')
            rating.innerText = a[i].rating
    
        let box = document.getElementById('card2')
        
        div.append(img,name,des,price,rating)
        box.append(div)
        }
    }
}


function Display3(a){
    
    for(let i=0 ;i< a.length ;i++){
        // console.log(el.name)
        if(a[i].category == "shoes"){
        let div = document.createElement('div')
        let img = document.createElement('img')
            img.setAttribute('src',a[i].img)

        let name = document.createElement('h2')
            name.innerText = a[i].name
        let des = document.createElement('p')
            des.innerText = a[i].description

        let price = document.createElement('p')
            price.innerText = a[i].price

        let rating = document.createElement('p')
            rating.innerText = a[i].rating
    
        let box = document.getElementById('card3')
        
        div.append(img,name,des,price,rating)
        box.append(div)
        }
    }
}