let container=document.createElement('div');
container.setAttribute('class','container');
container.setAttribute('id','container');
document.body.appendChild(container);
//row..
let row =document.createElement('div');
row.setAttribute('class',"row row-cols-1 row-cols-lg-4 row-cols-md-3 g-4");
container.appendChild(row);

async function apicalls(){
  try{
    const api=await fetch("https://restcountries.eu/rest/v2/all");
    apiData=await api.json();
        apiData.filter(data => {
         //col.. 
         let col =document.createElement('div');
         col.setAttribute('class','col');
         row.appendChild(col);
         //card..
         let card =document.createElement('div');
         card.setAttribute('class','card');
         col.appendChild(card);
         //card Header..
         let cardHeader =document.createElement('div');
         cardHeader.setAttribute('class','card-header text-center bg-dark text-white');
         cardHeader.innerText=data.name;
         card.appendChild(cardHeader);
         //imgTag...
         let imgTag =document.createElement('img');
         imgTag.setAttribute('src',data.flag);
         imgTag.setAttribute('class','card-img-top');
         imgTag.setAttribute('atl','Flags');
         card.appendChild(imgTag);
         //card-body...
         let cardBody =document.createElement('div');
         cardBody.setAttribute('class','card-body text-center');
         card.appendChild(cardBody);
         //sapn...
         let capitals=document.createElement('span');
         capitals.setAttribute('class',"badge  text-dark my-auto");
         capitals.innerText="Capital :";
         cardBody.appendChild(capitals);
         //capitalNames..
         let capitalName=document.createElement('span');
         capitalName.innerText=data.capital;
         capitalName.setAttribute('class',"badge bg-success");
         cardBody.appendChild(capitalName);
         //br..
         let br=document.createElement('br');
         cardBody.appendChild(br);
         //lai
         let regionName=document.createElement('span');
         regionName.innerText="Region :";
         cardBody.appendChild(regionName);
         //Regions...
         let capitalRegion=document.createElement('span');
         capitalRegion.innerText=data.region;
         capitalRegion.setAttribute('class','badge text-dark my-auto');
         cardBody.appendChild(capitalRegion);
         //br1
         //br..
         let br1=document.createElement('br');
         cardBody.appendChild(br1);
         
         //countryCode innerHtml..
         let countreCodeInner=document.createElement('span');
         countreCodeInner.innerText='CountryCode :';
         cardBody.appendChild(countreCodeInner);
         //countryCode..
         let CountryCode1=document.createElement('span');
         CountryCode1.innerText=data.alpha2Code+","+data.alpha3Code;
         CountryCode1.setAttribute('class','badge text-dark my-auto');
         cardBody.appendChild(CountryCode1);
         ///
         let br2=document.createElement('br');
         cardBody.appendChild(br2);
         // console.log(data)
         //Latlng...
         let lat=document.createElement('span');
         lat.innerText='LatLng :';
         cardBody.appendChild(lat);
         let latLng=document.createElement('span');
         latLng.innerText=data.latlng;
         latLng.setAttribute('class','badge text-dark my-auto alpha3Code');
         cardBody.appendChild(latLng);
         let br5=document.createElement('br');
         cardBody.appendChild(br5);
         let currency=document.createElement('span',"currency");
         currency.innerText="Currency Code :";
         cardBody.appendChild(currency);
         let currencys=document.createElement('span');
         currencys.innerText=data.currencies[0].code;
         currencys.setAttribute('class','badge text-dark my-auto alpha3Code');
         cardBody.appendChild(currencys);
         let br4=document.createElement('br');
         cardBody.appendChild(br4);
         
         let currencyName=document.createElement('span',"currencyName");
        currencyName.innerText="Currency Name :";
        cardBody.appendChild(currencyName);
        let currencyNamed=document.createElement('span');
        currencyNamed.innerText=data.currencies[0].name;
        currencyNamed.setAttribute('class','badge text-dark my-auto alpha3Code');
        cardBody.appendChild(currencyNamed);

        let currencySymbol=document.createElement('div',"currencySymbol");
        currencySymbol.innerText="Currency Symbol :"+data.currencies[0].symbol;
        cardBody.appendChild(currencySymbol);
          //footer...
         let footer=document.createElement("div");
         footer.setAttribute("class","card-footer text-center");
         card.appendChild(footer);
          //footer button
         let button=document.createElement("button");
         button.setAttribute("type","submit");
         button.setAttribute("class","btn btn-primary clicked ");
         button.setAttribute("data-bs-toggle","modal");
         button.setAttribute("data-bs-target","#staticBackdrop");
         button.innerText="CheckWeather";
         footer.appendChild(button); 

            let modal=document.createElement("div");
         modal.setAttribute("class","modal fade")
         modal.setAttribute("id","staticBackdrop")
         modal.setAttribute("data-bs-backdrop","static")
         modal.setAttribute("data-bs-keyboard","false")
         modal.setAttribute("tabindex","-1")
         modal.setAttribute("aria-labelledby","staticBackdropLabel")
         modal.setAttribute("aria-hidden","true")
         card.appendChild(modal);
 
         let dialog=document.createElement("div");
         dialog.setAttribute("class","modal-dialog");
         modal.appendChild(dialog);
 
         let content=document.createElement("div");
         content.setAttribute("class","modal-content");
         dialog.appendChild(content);
 
         let header=document.createElement("div");
         header.setAttribute("class","modal-header");
         content.appendChild(header);
 
         let h5=document.createElement("h5");
         h5.setAttribute("class","modal-title")
         h5.setAttribute("id","staticBackdropLabel")
         h5.innerText="Weather Report";
         header.appendChild(h5);
 
         let btn_close=document.createElement("btn");
         btn_close.setAttribute("type","button")
         btn_close.setAttribute("class","btn-close")
         btn_close.setAttribute("data-bs-dismiss","modal");
         btn_close.setAttribute("aria-label","Close")
         header.appendChild(btn_close);
 
         let modalBody=document.createElement("div");
         modalBody.setAttribute("class","modal-body");
         content.appendChild(modalBody);

         let countryName=document.createElement("h4");
         countryName.setAttribute("class","countryName text-dark");
         
         modalBody.appendChild(countryName);
         
         let CountryTemperature=document.createElement('span');
         CountryTemperature.setAttribute("class","badge text-dark my-auto");
         
         modalBody.appendChild(CountryTemperature);
        
        //  let spinner=document.createElement('div');
        //  spinner.setAttribute("class",'spinner-grow text-success');
        //  spinner.setAttribute("role","status");

        //  let visuallyHidden=document.createElement("span");
        //  visuallyHidden.setAttribute("class","visually-hidden")
        //  visuallyHidden.innerText="Loading...";
        //  spinner.appendChild(visuallyHidden);
        //  modalBody.appendChild(spinner);
         
         let img=document.createElement("img");
         modalBody.appendChild(img);
        
         let modalFooter=document.createElement("div");
         modalFooter.setAttribute("class","modal-footer");
         content.appendChild(modalFooter);
 
         let closedBtn=document.createElement("button");
         closedBtn.setAttribute("type","button");
         closedBtn.setAttribute("class","btn btn-secondary");
         closedBtn.setAttribute("data-bs-dismiss","modal");
         closedBtn.innerHTML="close";
         
         button.addEventListener("onClick", checkWeather(data.latlng,data.name));
         modalFooter.appendChild(closedBtn);
         async function checkWeather(latlng,Country){
                let lat=latlng[0];
                let lon=latlng[1];
                // console.log(lat,lon);
                try{
                  const weatherdata=await fetchWeatherData(lat,lon);
                  weatherShow(weatherdata,Country);
                }
                catch(err){
                    console.error(err);
                }
         }
         async function weatherShow(weatherdata,Country){
          countryName.innerText="Country :"+Country;
          CountryTemperature.innerText="Temperature :"+((weatherdata.main.temp)-273).toFixed(2);
         
         }
        async function fetchWeatherData(lat,lon){
            const apiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e0e83b0c17ddaf027f15d443e0c5e69a`
        try{
          const responseData=await fetch(apiUrl);
          return await responseData.json();
        }
        catch(err){
          console.error(err);
        }
        }
        async function temperatureUrl(){
          return(temperatureUrl-273).toFixed(2);
        }
         
    })  
  }
  catch(err){
    console.log(err);
  }
}
apicalls();
 

