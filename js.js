const lodPhone = async (searchText ,isShowAll) =>{
      const rec = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
      const data = await rec.json();
      const phonData = data.data
      displayPhone(phonData , isShowAll);
}

const displayPhone = (phones ,isShowAll) =>{
      console.log(phones , isShowAll)
      const phonContainer = document.getElementById('phon_container')
      phonContainer.innerHTML = '';
        // display show all items button 
        const showAllContainer = document.getElementById('show_all_container')
      
        if(phones.length > 12){
            showAllContainer.classList.remove('hidden');
      }
      else{
            showAllContainer.classList.add('hidden');
      }

      // phones = phones.slice( 0 , 12);
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
                  <button class="btn btn-primary">Buy Now</button>
                  </div>
            </div>
            `
            // 4 appendChilde add
            phonContainer.appendChild(phonCard);
      });
}


// handel search
const handelSearch = (isShowAll) =>{
      // toggleLoadingSpinner(true);
      const searchFiled = document.getElementById('search_filed');
      const searchText = searchFiled.value;
      console.log(searchText);
      lodPhone(searchText,isShowAll  );

}



const handelShowAll = (isShowAll) =>{
      // bashe tarame korla tora dbo na ke korbe dakbo ne ame amae shata amon koror k
      handelSearch(true);
}

lodPhone('oppo')