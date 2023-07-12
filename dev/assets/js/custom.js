const buildItem = document.querySelectorAll('.build')
const buildValue = document.querySelector('#build-value')
const floorsValue = document.querySelector('#floors-value')
const flatsValue = document.querySelector('#flats-value')
const buildDescriptions = document.querySelector('.descriptions')

const floorItem = document.querySelectorAll('.floor')
const dataFloorNumber = document.querySelector('#floor')
const dataAppartmentQuantity = document.querySelector('#all')
const dataAppartmentFree = document.querySelector('#free')
const dataAppartmentAction = document.querySelector('#action')
const dataAppartmentSold = document.querySelector('#sold')

const flatItem = document.querySelectorAll('.flat-item')
const flatDescriptions = document.querySelector('.descriptions')

buildItem.forEach(item => {
    item.addEventListener('mouseover', function() {
        
        const dataBuildNumber = item.getAttribute('data-build-number');
        const dataFloorsNumber = item.getAttribute('data-floors-number');
        const dataFlatsValue = item.getAttribute('data-flats-number');
        const dataBuildDescriptions = item.getAttribute('data-descriptions');
       
        buildValue.innerHTML = dataBuildNumber;
        floorsValue.innerHTML = dataFloorsNumber;
        flatsValue.innerHTML = dataFlatsValue;
        buildDescriptions.innerHTML = dataBuildDescriptions;
    })
})

floorItem.forEach(item => {
    item.addEventListener('mouseover', function() {
        const floorNumber = item.getAttribute('data-floor-number')
        const appartmentQuantity = item.getAttribute('data-appartment-quantity')
        const appartmentFree = item.getAttribute('data-appartment-quantity') - item.getAttribute('data-appartment-sold')
        const appartmentAction = item.getAttribute('data-appartment-action')
        const appartmentSold = item.getAttribute('data-appartment-sold')

        dataFloorNumber.innerHTML = floorNumber;
        dataAppartmentQuantity.innerHTML = appartmentQuantity;
        dataAppartmentFree.innerHTML = appartmentFree;
        dataAppartmentAction.innerHTML = appartmentAction;
        dataAppartmentSold.innerHTML = appartmentSold;
    })
})

flatItem.forEach(item => {
    item.addEventListener('mouseover', function() {
        const dataFlatDescriptions = item.getAttribute('data-descriptions');
        const appartmentAction = item.getAttribute('data-appartment-action')
        const flatDescriptionsState = document.querySelectorAll('.descriptions')
        function removeAction() {
          flatDescriptionsState.forEach(remove => {
              remove.classList.remove('action-color')
              remove.classList.remove('sold-color')
              remove.classList.remove('free-color')
          })
      }
      removeAction()
        if (item.classList.contains('sold')) {
            flatDescriptions.innerHTML = dataFlatDescriptions;
            flatDescriptions.classList.add('sold-color')  
        } else if (item.classList.contains('action')) {

            flatDescriptions.innerHTML = appartmentAction;
            flatDescriptions.classList.add('action-color')    
        } else{
            flatDescriptions.innerHTML = "Свободно";
            flatDescriptions.classList.add('free-color') 
        }

    })
})

flatItem.forEach(item => {
    item.addEventListener('click', function() {

        if (item.classList.contains('sold')) {
            alert('Квартира была продана!')
        } else {
            null
        }

    })
})

window.addEventListener('load', function(){
    document.querySelector('.flat-item-box') ? installFloorPlan() : null
    function installFloorPlan() {
    const pathFlatItem = document.querySelectorAll('.flat-item')
    function removeActive() {
        pathFlatItem.forEach(active => {
            active.classList.remove('active')
        })
    }

    const flatInfo = document.querySelector('.flat-info-box');
    const renderInfo = (flatInfoTemplate) => {
      const flatInformation = flatInfoTemplate
        .map((item) => {
          return (`
          <div class="flat-info-stat info-flat">
          Номер квартиры : <h4 class="flat-number">${item.flatNumber}</h4>
          </div>
          <div class="flat-info-stat rooms">
              Кол-во комнат: <h4 class="rooms-quantity">${item.rooms}</h4>
          </div>
          <div class="flat-info-stat square">
            Площадь квартиры: <h4 class="flat-square">${item.square}</h4> 
          </div>
          <div class="flat-info-stat square-total">
            Вся площадь квартиры: <h4 class="flat-square-total">${item.squareTotal}</h4> 
          </div>
          <div class="flat-info-stat price">
              Цена за м²: <h4 class="price-meter">${item.price}</h4>
          </div>
          <div class="flat-info-stat price-total">
              Цена за квартиру: <h4 class="price-total">${item.priceTotal}</h4>
          </div>
          <div class="descriptions inset-neomo"><h4>${item.flatStatus}</h4></div>
          `)
          })
        // .join("");
  
      flatInfo.innerHTML = flatInformation;
    };

    pathFlatItem.forEach(item => {
        item.addEventListener('click', function() {
        removeActive()
        item.classList.add('active')

        let thisFlat =item.getAttribute('flat-number');
        console.log(thisFlat);
        let flatNumber = roomFullInfo.filter(
            (obj) => obj.flatNumber === thisFlat
          );
          console.table(flatNumber);
          renderInfo(flatNumber);

    })

})

    }
    const roomFullInfo = [
        {
          flatNumber: "1",
          rooms: "2",
          square: "35,6 м.кв.",
          squareTotal: "60,7 м.кв.",
          price: "1000$",
          priceTotal: "60700$",
          flatStatus: "Свободно",
    
          description: [
            {
              text: "Двокімнатна квартира",
            },
            {
              text: "Загальна площа - 60,7 м.кв.",
            },
            {
              text: "Жила площа - 35,6 м.кв.",
            },
            {
              text: "Ціна за 1 м.кв. - 1000$",
            },
          ],
        },
        {
            flatNumber: "2",
            rooms: "2",
            square: "35,6 м.кв.",
            squareTotal: "60,7 м.кв.",
            price: "1000$",
            priceTotal: "60700$",
            flatStatus: "Продано",
      
            description: [
              {
                text: "Двокімнатна квартира",
              },
              {
                text: "Загальна площа - 60,7 м.кв.",
              },
              {
                text: "Жила площа - 35,6 м.кв.",
              },
              {
                text: "Ціна за 1 м.кв. - 1000$",
              },
            ],
          },
          {
            flatNumber: "3",
            rooms: "2",
            square: "35,6 м.кв.",
            squareTotal: "60,7 м.кв.",
            price: "1000$",
            priceTotal: "60700$",
            flatStatus: "Свободно",
      
            description: [
              {
                text: "Двокімнатна квартира",
              },
              {
                text: "Загальна площа - 60,7 м.кв.",
              },
              {
                text: "Жила площа - 35,6 м.кв.",
              },
              {
                text: "Ціна за 1 м.кв. - 1000$",
              },
            ],
          },
          {
            flatNumber: "4",
            rooms: "2",
            square: "35,6 м.кв.",
            squareTotal: "60,7 м.кв.",
            price: "1000$",
            priceTotal: "60700$",
            flatStatus: "Свободно",
      
            description: [
              {
                text: "Двокімнатна квартира",
              },
              {
                text: "Загальна площа - 60,7 м.кв.",
              },
              {
                text: "Жила площа - 35,6 м.кв.",
              },
              {
                text: "Ціна за 1 м.кв. - 1000$",
              },
            ],
          },
          {
            flatNumber: "5",
            rooms: "2",
            square: "35,6 м.кв.",
            squareTotal: "60,7 м.кв.",
            price: "1000$",
            priceTotal: "60700$",
            flatStatus: "Свободно",
      
            description: [
              {
                text: "Двокімнатна квартира",
              },
              {
                text: "Загальна площа - 60,7 м.кв.",
              },
              {
                text: "Жила площа - 35,6 м.кв.",
              },
              {
                text: "Ціна за 1 м.кв. - 1000$",
              },
            ],
          },
          {
            flatNumber: "6",
            rooms: "2",
            square: "35,6 м.кв.",
            squareTotal: "60,7 м.кв.",
            price: "1000$",
            priceTotal: "60700$",
            flatStatus: "Продано",
      
            description: [
              {
                text: "Двокімнатна квартира",
              },
              {
                text: "Загальна площа - 60,7 м.кв.",
              },
              {
                text: "Жила площа - 35,6 м.кв.",
              },
              {
                text: "Ціна за 1 м.кв. - 1000$",
              },
            ],
          },
          {
            flatNumber: "7",
            rooms: "2",
            square: "35,6 м.кв.",
            squareTotal: "60,7 м.кв.",
            price: "1000$",
            priceTotal: "60700$",
            flatStatus: "Свободно",
      
            description: [
              {
                text: "Двокімнатна квартира",
              },
              {
                text: "Загальна площа - 60,7 м.кв.",
              },
              {
                text: "Жила площа - 35,6 м.кв.",
              },
              {
                text: "Ціна за 1 м.кв. - 1000$",
              },
            ],
          },
          {
            flatNumber: "8",
            rooms: "2",
            square: "35,6 м.кв.",
            squareTotal: "60,7 м.кв.",
            price: "1000$",
            priceTotal: "60700$",
            flatStatus: "Акция! Скидка 10% при оплате 100%",
      
            description: [
              {
                text: "Двокімнатна квартира",
              },
              {
                text: "Загальна площа - 60,7 м.кв.",
              },
              {
                text: "Жила площа - 35,6 м.кв.",
              },
              {
                text: "Ціна за 1 м.кв. - 1000$",
              },
            ],
          }
    ]
        

})


const buildLink = document.querySelectorAll('.build-link')

buildLink.forEach(link => {
    console.log(link);

    link.addEventListener('click', function(event){
       
        if (link.classList.contains('sold')) {
            event.preventDefault();
            alert('Все квартиры проданы!')
        } else {
            null
        }

    })

})