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
            value: document.getElementById(`images`).value,
        },
        methods: {
            newImg : function(){
                console.warn(`prova funzione click`)
            },
            // myImg : function(value, imageUrl, firstImage, secondImage, thirdImage){
            //     switch (value) {
            //         case `1`:
            //             imageUrl= firstImage;
            //             console.log(imageUrl)
            //             break;
            //         case `2`:
            //             imageUrl= secondImage;
            //             break;
            //         case `3`:
            //             imageUrl = thirdImage;
            //             break;        
            //     }

            //     console.warn(document.getElementById(`images`).value)
            //     console.log(imageUrl)
            //     return(imageUrl)

            // },
            
        }
    },
)

const selectImage = document.getElementById(`images`);
document.querySelector(`button`).addEventListener(`click`, function(){
    console.log(selectImage.value)
    function newImage(){
        switch (selectImage.value) {
            case `1`:
                console.log(selectImage)
                break;
            case `2`:
                console.log(selectImage)
                break;
            case `3`:
                console.log(selectImage)
                break;        
        }
        return selectImage;
    }
});

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
