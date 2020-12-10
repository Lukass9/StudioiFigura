function slider(name){
    $(document).ready(function(){
        $('.' + name + "-slider").slick({
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 3,
            infinity: true,
            arrows: true,
            autoplay: false,
            appendArrows: $(".arrow-place-" + name),
            prevArrow: $('.arrow-place-'+ name +' .arrowBack'),
            nextArrow: $('.arrow-place-'+ name +' .arrowNext'),		
            
            focusOnSelect: true,
    
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
        });
    });
}
function fillTable(name, tableName){
    $(name).on('afterChange', function(event, slick, currentSlide){
        // console.log(currentSlide);
        // let $alt = $('.arrow-place-fitness .fitness-slider .slick-list .slick-track .slick-current');
        let $alt = $(name + ' .slick-current');
    
        function set_price(single_price){
              for(let i=1; i<4; i++){
                  if(i==1){
                      $('.f_w_single'+i).text(single_price + " zł");
                      $('.f_w_price'+i).text(single_price + " zł");
                      $('.f_w_package'+i).text(single_price + " zł");
                  }
                  else if(i==2){
                      // const package_price = (single_price*0.65).toPrecision(2);
                      const package_price = (single_price*0.65).toFixed();
    
                      $('.f_w_single'+i).text(package_price + " zł");
                      $('.f_w_price'+i).text(single_price*8);
                      $('.f_w_package'+i).text( (package_price*8) + " zł");
                  }
                  else{
                      // const package_price = (single_price*0.55).toPrecision(2);
                      const package_price = (single_price*0.55).toFixed();
    
                      $('.f_w_single'+i).text(package_price + " zł");
                      $('.f_w_price'+i).text(single_price*12);
                      $('.f_w_package'+i).text( (package_price*12) + " zł");
                  }
              }
        }
/////////////////////////////FITNESS////////////////////////////////////////////////////////////////
          if($alt.attr("alt") == 'Swan'){
              $(tableName + ' .tab_h1').text("Swan Shaper (30 min)");
              set_price(46);
          }
          else if($alt.attr("alt") == 'vacu'){
              $(tableName + ' .tab_h1').text("Vacu Shaper (30 min)");
              set_price(46);
          }
          else if($alt.attr("alt") == 'elektro'){
              $(tableName + ' .tab_h1').text("Elektrostymulacja (30 min)");
              set_price(46);
          }
          else if($alt.attr("alt") == 'limfo'){
              $(tableName + ' .tab_h1').text("Limfodrenaż (30 min)");
    
              set_price(28);
          }
          else if($alt.attr("alt") == 'sauna'){
              $(tableName + ' .tab_h1').text("Sauna (30 min)");
    
              set_price(26);
          }
          else if($alt.attr("alt") == 'RollShaper'){
              $(tableName + ' .tab_h1').text("Roll Shaper (30 min)");
    
              set_price(28);
          }
///////////////////////////COSMETOLOGY//////////////////////////////////////////////////////////////////////////////////////

    });
}

slider('fitness');
slider('pack');
slider('cosm'); 
fillTable('.fitness-slider','.fitness-tab');

// let $alt = $('.slick-current');

// $(document).ready(function(){
//     console.log($alt.attr("alt"));
// });



// $('.fitness-slider').on('afterChange', function(event, slick, currentSlide){
//     // console.log(currentSlide);
//     // let $alt = $('.arrow-place-fitness .fitness-slider .slick-list .slick-track .slick-current');
//     let $alt = $('.fitness-slider');

//     function set_price(single_price){
//           for(let i=1; i<4; i++){
//               if(i==1){
//                   $('.f_w_single'+i).text(single_price + " zł");
//                   $('.f_w_price'+i).text(single_price + " zł");
//                   $('.f_w_package'+i).text(single_price + " zł");
//               }
//               else if(i==2){
//                   // const package_price = (single_price*0.65).toPrecision(2);
//                   const package_price = (single_price*0.65).toFixed();

//                   $('.f_w_single'+i).text(package_price + " zł");
//                   $('.f_w_price'+i).text(single_price*8);
//                   $('.f_w_package'+i).text( (package_price*8) + " zł");
//               }
//               else{
//                   // const package_price = (single_price*0.55).toPrecision(2);
//                   const package_price = (single_price*0.55).toFixed();

//                   $('.f_w_single'+i).text(package_price + " zł");
//                   $('.f_w_price'+i).text(single_price*12);
//                   $('.f_w_package'+i).text( (package_price*12) + " zł");
//               }
//           }
//     }

//       if($alt.attr("alt") == 'Swan'){
//           $('.fitness-tab .tab_h1').text("Swan Shaper (30 min)");
//           set_price(46);
//       }
//       else if($alt.attr("alt") == 'vacu'){
//           $('.fitness-tab .tab_h1').text("Vacu Shaper (30 min)");
//           set_price(46);
//       }
//       else if($alt.attr("alt") == 'elektro'){
//           $('.fitness-tab .tab_h1').text("Elektrostymulacja (30 min)");
//           set_price(46);
//       }
//       else if($alt.attr("alt") == 'limfo'){
//           $('.fitness-tab .tab_h1').text("Limfodrenaż (30 min)");

//           set_price(28);
//       }
//       else if($alt.attr("alt") == 'sauna'){
//           $('.tab_h1').text("Sauna (30 min)");

//           set_price(26);
//       }
//       else if($alt.attr("alt") == 'RollShaper'){
//           $('.tab_h1').text("Roll Shaper (30 min)");

//           set_price(28);
//       }
// });