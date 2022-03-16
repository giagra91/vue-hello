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


