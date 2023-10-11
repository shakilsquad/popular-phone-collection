const loadPhon = async (searchText, isShowAll) =>{
      const responsive = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
      const data = await responsive.json();
      const phones = data.data;
      // console.log(phones);
      displayPhons(phones ,isShowAll )
}

const displayPhons = (phones , isShowAll) =>{
      console.log(phones ,isShowAll)
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
                  <h2 class="card-title">${phon.phone_name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions">
                  <button class="btn btn-primary">Show Details</button>
                  </div>
            </div>
            `
            // 4 appendChilde add
            phonContainer.appendChild(phonCard);
      });
      // hide loading_spinner
      toggleLoadingSpinner(false)

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