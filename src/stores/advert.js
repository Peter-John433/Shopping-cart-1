import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAdvertStore = defineStore('advert', () =>{
    const advertProducts = ref([{
        discription : 'get your phone now',
        img: 'https://www.shutterstock.com/image-photo/smiling-handsome-arab-guy-casual-600nw-2182934327.jpg'
      },
      {
        discription : 'get your phone now',
        img: 'https://www.shutterstock.com/image-photo/smiling-handsome-arab-guy-casual-600nw-2182934327.jpg'
      },
        
    ])

})