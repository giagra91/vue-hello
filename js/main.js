let root = new Vue(
    {
        el: `#root`,
        data: {
            title: ``,
            imageUrl: ``,
            myClass: ``,
            firstImage:`img/img.01.jpg`,
            secondImage:`img/img.02.jpg`,
            thirdImage:`img/img.03.jpg`,
        },
        methods: {
            newImg : function(){
                console.warn(`prova funzione click`)
            },
        }
    },
)



// function newImage(value, source, firstLink, secondLink, thirdLink){
//     switch (value) {
//         case `1`:
//             source= firstLink;
//             break;
//         case `2`:
//             source= secondLink;
//             break;
//         case `3`:
//             source = thirdLink;
//             break;        
//     }
//     return source;
// }}
