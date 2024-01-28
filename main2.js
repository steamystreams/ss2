   //by year (search)
     var activities=  document.getElementById('years');
activities.addEventListener('change', (e) => {
  console.log(` ${ e.target.value }`);
  console.log(`activities.options[activities.selectedIndex].value = ${ activities.options[activities.selectedIndex].value }`);

        var dv = document.getElementById('header1');

        // remove all child nodes
        while (dv.hasChildNodes()) {
            dv.removeChild(dv.lastChild);
        }



        const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    var data = JSON.parse(this.responseText);
       

    console.log(this.responseText);
    for (let i = 0; i < 300; i++) {
      let cont = document.createElement('div');
      cont.setAttribute("class",'cont')
      let cont2 = document.createElement('div');
      cont2.setAttribute('class', "caption");
      let pre = document.createElement('pre');
      pre.setAttribute('class', 'pre');
      pre.innerHTML = data.videos[i].url;
      let ep_link = document.createElement('a');
      ep_link.setAttribute('href', data.videos[i].embed);
      let img = document.createElement('img');
     let dl = document.createElement('a');
     dl.setAttribute('href', data.videos[i].url);
     dl.setAttribute('class', "dl");
     dl.innerText = 'Link';
      img.setAttribute('class', 'image');
      img.setAttribute('src', data.videos[i].default_thumb.src);
      let title = document.createElement('h2');
      let title2 = data.videos[i].title+'  ';
      let title3 = document.createElement('h3');
      let date = 'Added:'+'  '+data.videos[i].added+'  Duration:  ';
    let duration = data.videos[i].length_min
      
      var header1 = document.getElementById('header1');
                    header1.append(cont);
                    cont.appendChild(ep_link);
                    ep_link.append(img);
                    cont.append(title);
                    title.append(title2);
                    title.append(title3)
                   title3.append(date);
                   title3.append(duration);
                  
                  
                  
                    

           
            ep_link.append(img);
            cont.append(title)
        
            
    }
  
  }
})

});
var activities=  document.getElementById('years');
activities.addEventListener('change', (e) => {
  console.log(` ${ e.target.value }`);
  console.log(`activities.options[activities.selectedIndex].value = ${ activities.options[activities.selectedIndex].value }`);
let year_search = e.target.value;
xhr.open("GET", 'https://www.eporner.com/api/v2/video/search/?query='+year_search+'&per_page=500&page=1&thumbsize=big&order=top-weekly&gay=0&lq=1&format=json');

xhr.send(data);
  
})








// search

   



function myFunction4() {

    const data2 = null;
  
  const xhr2 = new XMLHttpRequest();
  xhr2.withCredentials = false;
  
  xhr2.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      var data2 = JSON.parse(this.responseText);
         
  
      console.log(this.responseText);
      for (let i = 0; i < 300; i++) {
        let pre2 = document.createElement('pre');
        pre2.innerHTML = data2.videos[i].url;
        let ep_link2 = document.createElement('a');
        ep_link2.setAttribute('href', data2.videos[i].embed)
        let img2 = document.createElement('img');
        img2.setAttribute('src', data2.videos[i].default_thumb.src);
              document.body.append(pre2,ep_link2);
              ep_link2.append(img2);
      }
    }
  });
  var search_term = document.getElementById('search');
   let search_value = document.querySelector('search').value;
  console.log(search_value)
  xhr2.open("GET", 'https://www.eporner.com/api/v2/video/search/?query='+search_value+'&per_page=300&page=1&thumbsize=big&order=top-weekly&gay=0&lq=1&format=json');

  xhr2.send(data);
}
// catagories

function myfunction_hairy() {
        var dv = document.getElementById('header1');

        // remove all child nodes
        while (dv.hasChildNodes()) {
            dv.removeChild(dv.lastChild);
        }



        const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    var data = JSON.parse(this.responseText);
       

    console.log(this.responseText);
    for (let i = 0; i < 300; i++) {
      let cont = document.createElement('div');
      cont.setAttribute("class",'cont')
      let cont2 = document.createElement('div');
      cont2.setAttribute('class', "caption");
      let pre = document.createElement('pre');
      pre.setAttribute('class', 'pre');
      pre.innerHTML = data.videos[i].url;
      let ep_link = document.createElement('a');
      ep_link.setAttribute('href', data.videos[i].embed);
      let img = document.createElement('img');
     let dl = document.createElement('a');
     dl.setAttribute('href', data.videos[i].url);
     dl.setAttribute('class', "dl");
     dl.innerText = 'Link';
      img.setAttribute('class', 'image');
      img.setAttribute('src', data.videos[i].default_thumb.src);
      let title = document.createElement('h2');
      let title2 = data.videos[i].title+'  ';
      let title3 = document.createElement('h3');
      let date = 'Added:'+'  '+data.videos[i].added+'  Duration:  ';
    let duration = data.videos[i].length_min
      
      var header1 = document.getElementById('header1');
                    header1.append(cont);
                    cont.appendChild(ep_link);
                    ep_link.append(img);
                    cont.append(title);
                    title.append(title2);
                    title.append(title3)
                   title3.append(date);
                   title3.append(duration);
                  
                  
                  
                    

           
            ep_link.append(img);
            cont.append(title)
        
            
    }
  
  }
})


xhr.open("GET", "https://www.eporner.com/api/v2/video/search/?query=hairy&per_page=500&page=1&thumbsize=big&order=top-weekly&gay=0&lq=1&format=json");

xhr.send(data);
}


function myfunction_bigboobs() {
        var dv = document.getElementById('header1');

        // remove all child nodes
        while (dv.hasChildNodes()) {
            dv.removeChild(dv.lastChild);
        }



        const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    var data = JSON.parse(this.responseText);
       

    console.log(this.responseText);
    for (let i = 0; i < 300; i++) {
      let cont = document.createElement('div');
      cont.setAttribute("class",'cont')
      let cont2 = document.createElement('div');
      cont2.setAttribute('class', "caption");
      let pre = document.createElement('pre');
      pre.setAttribute('class', 'pre');
      pre.innerHTML = data.videos[i].url;
      let ep_link = document.createElement('a');
      ep_link.setAttribute('href', data.videos[i].embed);
      let img = document.createElement('img');
     let dl = document.createElement('a');
     dl.setAttribute('href', data.videos[i].url);
     dl.setAttribute('class', "dl");
     dl.innerText = 'Link';
      img.setAttribute('class', 'image');
      img.setAttribute('src', data.videos[i].default_thumb.src);
      let title = document.createElement('h2');
      let title2 = data.videos[i].title+'  ';
      let title3 = document.createElement('h3');
      let date = 'Added:'+'  '+data.videos[i].added+'  Duration:  ';
    let duration = data.videos[i].length_min
      
      var header1 = document.getElementById('header1');
                    header1.append(cont);
                    cont.appendChild(ep_link);
                    ep_link.append(img);
                    cont.append(title);
                    title.append(title2);
                    title.append(title3)
                   title3.append(date);
                   title3.append(duration);
                  
                  
                  
                    

           
            ep_link.append(img);
            cont.append(title)
        
            
    }
  
  }
})


xhr.open("GET", "https://www.eporner.com/api/v2/video/search/?query=big&20%tits&per_page=500&page=1&thumbsize=big&order=top-weekly&gay=0&lq=1&format=json");

xhr.send(data);
}

//smoking
function myfunction_smoke() {
        var dv = document.getElementById('header1');

        // remove all child nodes
        while (dv.hasChildNodes()) {
            dv.removeChild(dv.lastChild);
        }



        const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    var data = JSON.parse(this.responseText);
       

    console.log(this.responseText);
    for (let i = 0; i < 300; i++) {
      let cont = document.createElement('div');
      cont.setAttribute("class",'cont')
      let cont2 = document.createElement('div');
      cont2.setAttribute('class', "caption");
      let pre = document.createElement('pre');
      pre.setAttribute('class', 'pre');
      pre.innerHTML = data.videos[i].url;
      let ep_link = document.createElement('a');
      ep_link.setAttribute('href', data.videos[i].embed);
      let img = document.createElement('img');
     let dl = document.createElement('a');
     dl.setAttribute('href', data.videos[i].url);
     dl.setAttribute('class', "dl");
     dl.innerText = 'Link';
      img.setAttribute('class', 'image');
      img.setAttribute('src', data.videos[i].default_thumb.src);
      let title = document.createElement('h2');
      let title2 = data.videos[i].title+'  ';
      let title3 = document.createElement('h3');
      let date = 'Added:'+'  '+data.videos[i].added+'  Duration:  ';
    let duration = data.videos[i].length_min
      
      var header1 = document.getElementById('header1');
                    header1.append(cont);
                    cont.appendChild(ep_link);
                    ep_link.append(img);
                    cont.append(title);
                    title.append(title2);
                    title.append(title3)
                   title3.append(date);
                   title3.append(duration);
                  
                  
                  
                    

           
            ep_link.append(img);
            cont.append(title)
        
            
    }
  
  }
})


xhr.open("GET", "https://www.eporner.com/api/v2/video/search/?query=smoking&per_page=500&page=1&thumbsize=big&order=top-weekly&gay=0&lq=1&format=json");

xhr.send(data);
}



//by year

//big nipples
function myfunction_nipples() {
        var dv = document.getElementById('header1');

        // remove all child nodes
        while (dv.hasChildNodes()) {
            dv.removeChild(dv.lastChild);
        }



        const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    var data = JSON.parse(this.responseText);
       

    console.log(this.responseText);
    for (let i = 0; i < 300; i++) {
      let cont = document.createElement('div');
      cont.setAttribute("class",'cont')
      let cont2 = document.createElement('div');
      cont2.setAttribute('class', "caption");
      let pre = document.createElement('pre');
      pre.setAttribute('class', 'pre');
      pre.innerHTML = data.videos[i].url;
      let ep_link = document.createElement('a');
      ep_link.setAttribute('href', data.videos[i].embed);
      let img = document.createElement('img');
     let dl = document.createElement('a');
     dl.setAttribute('href', data.videos[i].url);
     dl.setAttribute('class', "dl");
     dl.innerText = 'Link';
      img.setAttribute('class', 'image');
      img.setAttribute('src', data.videos[i].default_thumb.src);
      let title = document.createElement('h2');
      let title2 = data.videos[i].title+'  ';
      let title3 = document.createElement('h3');
      let date = 'Added:'+'  '+data.videos[i].added+'  Duration:  ';
    let duration = data.videos[i].length_min
      
      var header1 = document.getElementById('header1');
                    header1.append(cont);
                    cont.appendChild(ep_link);
                    ep_link.append(img);
                    cont.append(title);
                    title.append(title2);
                    title.append(title3)
                   title3.append(date);
                   title3.append(duration);
                  
                  
                  
                    

           
            ep_link.append(img);
            cont.append(title)
        
            
    }
  
  }
})


xhr.open("GET", "https://www.eporner.com/api/v2/video/search/?query=big-nipples&per_page=500&page=1&thumbsize=big&order=top-weekly&gay=0&lq=1&format=json");

xhr.send(data);
}

//cameltoe
function myfunction_toe() {
        var dv = document.getElementById('header1');

        // remove all child nodes
        while (dv.hasChildNodes()) {
            dv.removeChild(dv.lastChild);
        }



        const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    var data = JSON.parse(this.responseText);
       

    console.log(this.responseText);
    for (let i = 0; i < 300; i++) {
      let cont = document.createElement('div');
      cont.setAttribute("class",'cont')
      let cont2 = document.createElement('div');
      cont2.setAttribute('class', "caption");
      let pre = document.createElement('pre');
      pre.setAttribute('class', 'pre');
      pre.innerHTML = data.videos[i].url;
      let ep_link = document.createElement('a');
      ep_link.setAttribute('href', data.videos[i].embed);
      let img = document.createElement('img');
     let dl = document.createElement('a');
     dl.setAttribute('href', data.videos[i].url);
     dl.setAttribute('class', "dl");
     dl.innerText = 'Link';
      img.setAttribute('class', 'image');
      img.setAttribute('src', data.videos[i].default_thumb.src);
      let title = document.createElement('h2');
      let title2 = data.videos[i].title+'  ';
      let title3 = document.createElement('h3');
      let date = 'Added:'+'  '+data.videos[i].added+'  Duration:  ';
    let duration = data.videos[i].length_min
      
      var header1 = document.getElementById('header1');
                    header1.append(cont);
                    cont.appendChild(ep_link);
                    ep_link.append(img);
                    cont.append(title);
                    title.append(title2);
                    title.append(title3)
                   title3.append(date);
                   title3.append(duration);
                  
                  
                  
                    

           
            ep_link.append(img);
            cont.append(title)
        
            
    }
  
  }
})


xhr.open("GET", "https://www.eporner.com/api/v2/video/search/?query=cameltoe&per_page=500&page=1&thumbsize=big&order=top-weekly&gay=0&lq=1&format=json");

xhr.send(data);
}
