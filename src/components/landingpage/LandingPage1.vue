<template>
    <div class="container flex justify-center items-start overflow-hidden">
            <Splide :options="slideOptions" aria-label="My Favorite Images">
                <SplideSlide>
                    <div>
                        <img src="https://pyxis.nymag.com/v1/imgs/cbf/4a2/ec7456fedf57d61fc8e52cb51c3acb47dd-video-game-consoles-for-you-lede.2x.rsocial.w600.jpg" alt="" />
                        <!-- <div class="absolute z-[99] text-white">
                            <div >
                                Official <br>app store <br> now live
                            </div>
                            <div>
                                Buy any device from the Official store and stand a chance to win a shopping voucher
                            </div>
                        </div> -->
                    </div>
                </SplideSlide>
            </Splide> 

        <div class="grid grid-cols-2 gap-4 w-full mt-[4%]">
            <div :class="bgImgClass" class="w-full h-[200px] relative">
                <div class="absolute z-[2] top-[50%] left-2">
                    <div class="font-semibold text-[purple] capitalize text-[18px]">get your phone</div>
                    <div class="font-semibold text-[purple] capitalize text-[18px]">now!</div>
                </div>
                <div class="mt-2 flex items-center justify-start absolute z-[2] w-full bottom-3 mx-auto text-center"><a href="#" class="bg-black text-white font-bold py-1 px-2 capitalize hover:bg-[white] hover:text-red-500 w-[90%] mx-auto">click here</a></div>
                <img src="https://www.shutterstock.com/image-photo/smiling-handsome-arab-guy-casual-600nw-2182934327.jpg" class="absolute top-0 h-[200px] object-fill" />
            </div>

            <div :class="bgImgClass" class="w-full h-[200px] relative">
                <div>get your phone</div>
                <div>now!</div>
                <a href="">click here</a>
                <img src="https://assets-static.invideo.io/images/large/image_47_8c67712d46.png" class="absolute top-0 h-[200px] object-fill" />
            </div>

            <div :class="bgImgClass" class="w-full h-[200px]">
                <div>get up to <br><span>10,000</span> <br> off your shopping cart</div>
                <a href="">Signup here</a>
            </div>

            <div :class="bgImgClass" class="w-full h-[200px]">
                <div>get your phone</div>
                <div>now!</div>
                <a href="">click here</a>
                
            </div>
        </div>
    </div>
</template>
<script setup>
  import { ref } from 'vue'
    const slideOptions = ref({
        perPage: 1,
        width: '70%',
        gap: 20,
        arrows: false,
        perMove: 1,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        drag: true,
        autoplay: true,
        interval: 3000,
        waitForTransition: true,
        paginationDirection: 'ltr',
        pagination: false,
        type: 'loop'
        // breakpoints: { 992: { perPage: 1, gap: 10, width: "100%", height: "auto", padding: {top: "5rem", bottom: "5rem"}}}
    })

    const bgImgClass = ref('purple');
    const myChange = ref(Math.random() * 10000);

    const colorChange = () =>{
        let name = ref('')
        setTimeout((colorChange),3000);
        name.value.style.color=`green ${myChange}`
    }
</script>

<style scoped>
    .purple{
        background: url('https://cdn5.vectorstock.com/i/1000x1000/70/29/abstract-burst-background-from-radial-stripes-vector-16317029.jpg');
        width: 100%;
    }
</style>
