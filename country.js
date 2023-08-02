const countryName = new URLSearchParams(location.search).get("name");
const countryDetails = document.querySelector(".country");

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data[0].languages)
   
    countryDetails.innerHTML = `<div>
            <img class="flagImg" src="${data[0].flags.svg}" alt="flag">
            </div>
            <div>
                <h1>${data[0].name.common}</h1>

                <div class="countryDetails">
                    <div>
                        <P><b>Native Name :</b> Belgum </p>
                        <p><b>Population :</b> 11,143,200 </p>
                        <p><b>Region :</b> Europe</p>
                        <p><b>Sub Region :</b> Western Europe </p>
                        <p><b>Capital :</b></p>
                    </div>
                    <div>
                        <p><b>Top Level Domain :</b> com</p>
                        <p><b>Currencies:</b> Europe</p>
                        <p><b>Language :</b>${data[0].languages}</p>
                    </div>
                </div>
                
                <div>
                    Border Countries <a href=""></a>
                </div>
            </div>`;
  });
