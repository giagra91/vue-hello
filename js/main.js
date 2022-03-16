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
            mySelectValue: document.getElementById(`images`)
        },
        methods: {
            firstImg : function(){

                switch (document.getElementById(`images`).value){
                    case `1`:
                        this.imageUrl=this.firstImage;
                        break;
                    case `2`:
                        this.imageUrl=this.secondImage;
                        break;
                    case `3`:
                        this.imageUrl=this.thirdImage;
                        break;
                }
            },
        }
    },
)