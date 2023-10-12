const loadPhon = async (searchText, isShowAll) =>{
      const responsive = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
      const data = await responsive.json();
      const phones = data.data;
      // console.log(phones);
      displayPhons(phones ,isShowAll )
}

const displayPhons = (phones , isShowAll) =>{
      // console.log(phones ,isShowAll)
      // 1 div name
      const phonContainer = document.getElementById('phon_container')
      // clear phonContainer card before adding card
      phonContainer.textContent = '';

      // display show all items button 
      const showAllContainer = document.getElementById('show_all_container')

      if(phones.length > 12){
            showAllContainer.classList.remove('hidden');
      }
      else{
            showAllContainer.classList.add('hidden');
      }

     if(!isShowAll){
      phones = phones.slice( 0 , 12);
     }
      

      phones.forEach(phon =>{
            // console.log(phon)
            // 2. create a div
            const phonCard = document.createElement('div');
            phonCard.classList=` card bg-gray-300 shadow-xl `;
            // 3 create a innerHTML add
            phonCard.innerHTML=`
            <figure class="px-10 pt-10">
                  <img src="${phon.image}" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                  <h2 class="card-title text-2xl text-black font-extrabold">${phon.phone_name}</h2>
                  <p>There are many variations of passages of available, but the majority have suffered</p>
                  <p class="text-2xl font-extrabold">$999</p>
                  <div class="card-actions">
                  <button onclick="handelShowDetails('${phon.slug}');show_the_my_modal.showModal()" class="btn btn-primary">Show Details</button>
                  </div>
            </div>
            `
            // 4 appendChilde add
            phonContainer.appendChild(phonCard);
      });
      // hide loading_spinner
      toggleLoadingSpinner(false)
}
// handel - show Details
const handelShowDetails =  async (id) =>{
      console.log('click details',id)
      // lode single phon  data 
      const rec = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
      const data = await rec.json();
      // console.log(data.data)
      const phone = data.data;
      showPhoneDetails(phone)
}
const showPhoneDetails = (phone) =>{
      console.log(phone)
      const showModalPhoneName = document.getElementById('show_modal_phon_name');
      showModalPhoneName.innerText = phone.name;

      const showModalContainer = document.getElementById('show_modal_container');

      showModalContainer.innerHTML = `
      <img src="${phone.image}" alt="">
      <h2 class="font-bold py-3 text-2xl">${showModalPhoneName.innerText = phone.name}</h2>
      <p class="text-lg"><span class="text-black  font-bold" >Storage: </span>${phone?.mainFeatures?.storage}</p>
      <p class="text-lg"><span class="text-black  font-bold" >Display Size: </span>${phone?.mainFeatures?.displaySize}</p>
      <p class="text-lg"><span class="text-black  font-bold" >ChipSet: </span>${phone?.mainFeatures?.chipSet}</p>
      <p class="text-lg"><span class="text-black  font-bold" >Slug: </span>${phone.slug}</p>
      <p class="text-lg"><span class="text-black  font-bold" >Release data: </span>${phone.releaseDate}</p>
      <p class="text-lg"><span class="text-black  font-bold" >Brand: </span> ${phone.brand}</p>
      <p class="text-lg"><span class="text-black  font-bold" >GPS: </span> ${phone.others.GPS}</p>
      

      `


      // show the modal
      show_the_my_modal.showModal()
      
}


// handel search
const handelSearch = (isShowAll) =>{
      toggleLoadingSpinner(true);
      const searchFiled = document.getElementById('search_filed');
      const searchText = searchFiled.value;
      // searchFiled.value = '';
      console.log(searchText);
      loadPhon(searchText ,isShowAll );

}

// loading_spinner 
const toggleLoadingSpinner = (isLoading) =>{
      const loadingSpinner = document.getElementById('loading_spinner');
      if(isLoading){
            loadingSpinner.classList.remove('hidden')
      }
      else{
            loadingSpinner.classList.add('hidden')
      }
}      

// handel show all
const handelShowAll = (isShowAll) =>{
      handelSearch(true);
}
      
loadPhon('12')