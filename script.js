
let dataGiphy;
let strSearch;

//  Asynchronous
const getGiphy = async(strKeyWord) => {

    // console.log(strKeyWord);
    if (strKeyWord === ""){
      endPoint = `https://api.giphy.com/v1/gifs/trending?api_key=PGkVEMYcdtGbxo2XxLxeasiDEWiUJ49a&limit=9`
    } else {
      endPoint = `https://api.giphy.com/v1/gifs/search?q=${strKeyWord}&api_key=PGkVEMYcdtGbxo2XxLxeasiDEWiUJ49a&limit=9`
    }

    console.log(endPoint);
    const response = await fetch(endPoint);
    const data = await response.json();
    dataGiphy = data.data;
    console.log(dataGiphy);
    await viewData();
  }

  

const viewData = () => {
    let result = '';
    dataGiphy.map(element => {
      console.log(element.images.preview_gif.url);
        // result += `<img src="${element.images.preview_gif.url}">`;

        result += `<div class="col-sm-4">
                    <div class="card">
                      <div class="card-body">
                        <img id="gifItem" src="${element.images.preview_gif.url}">
                      </div>
                    </div>
                  </div>`;
    })
    document.getElementById('gifGridContainer').innerHTML = result;
  }


  $(document).ready(function(){

    $("#btnSearch").click(function(){
        strSearch = document.getElementById("txtSearch").value;
        getGiphy(strSearch);
    });


});

getGiphy("");