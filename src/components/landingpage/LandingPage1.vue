<template>
    <div class="container flex flex-col lg:flex-row justify-center items-start overflow-hidden">
            <Splide :options="slideOptions" aria-label="My Favorite Images">
                <SplideSlide>
                    <div class="relative">
                        <img src="https://pyxis.nymag.com/v1/imgs/cbf/4a2/ec7456fedf57d61fc8e52cb51c3acb47dd-video-game-consoles-for-you-lede.2x.rsocial.w600.jpg" alt="" />
                        <div class="absolute z-30 left-10 top-[20%] text-[25px] text-black font-bold capitalize w-[500px]">
                            <div>
                                Official <br>app store <br> now live
                            </div>
                            <div>
                                Buy any device from the Official store and stand a chance to win a shopping voucher
                            </div>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div class="relative">
                        <img src="https://www.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej.png" alt="" />
                        <div class="absolute z-30 left-10 top-[20%] text-[25px] text-black font-bold capitalize w-[500px]">
                            <div>
                                Official <br>app store <br> now live
                            </div>
                            <div>
                                Buy any device from the Official store and stand a chance to win a shopping voucher
                            </div>
                        </div>
                        <div class="absolute top-[2%] right-[2%] font-bold text-[10px] border border-black px-2 rounded-3xl">OcheStore</div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div class="relative">
                        <img src="https://img.freepik.com/free-vector/season-sale_62951-24.jpg" class="w-full object-fill h-[400px]" alt="" />
                        <!-- <div class="absolute z-30 left-10 top-[20%] text-[25px] text-black font-bold capitalize w-[500px]">
                            <div>
                                Official <br>app store <br> now live
                            </div>
                            <div>
                                Buy any device from the Official store and stand a chance to win a shopping voucher
                            </div>
                        </div> -->
                        <div class="absolute top-[2%] right-[2%] font-bold text-[10px] border border-black px-2 rounded-3xl">OcheStore</div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div class="relative">
                        <img src="https://media.istockphoto.com/id/1345347634/photo/portrait-of-happy-and-excited-woman-holding-many-bags-after-successful-shopping-and-shouting.jpg?s=612x612&w=0&k=20&c=-d6he0J0FltMTGgJRIHCHT886l7iK6uExzWUXWALIJc=" class="w-full object-fill h-[400px]" alt="" />
                        <div class="absolute z-30 left-10 top-[20%] text-[25px] text-white font-bold capitalize w-[500px]">
                            <div>
                                Official <br>app store <br> now live
                            </div>
                            <div>
                                Buy any device from the Official store and stand a chance to win a shopping voucher
                            </div>
                        </div>
                        <div class="absolute top-[2%] right-[2%] font-bold text-[10px] text-white border border-white px-2 rounded-3xl">OcheStore</div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div class="relative">
                        <img src="https://img.freepik.com/premium-photo/mobile-ad-joyful-black-guy-showing-big-blank-smartphone-with-white-screen_116547-19348.jpg" class="w-full object-fill h-[400px]" alt="" />
                        <!-- <div class="absolute z-30 left-10 top-[20%] text-[25px] text-white font-bold capitalize w-[500px]">
                            <div>
                                Official <br>app store <br> now live
                            </div>
                            <div>
                                Buy any device from the Official store and stand a chance to win a shopping voucher
                            </div>
                        </div> -->
                        <div class="absolute top-[2%] right-[2%] font-bold text-[10px] text-white border border-white px-2 rounded-3xl">OcheStore</div>
                        <div class="absolute top-[30%] left-[25%]">oche <span>onlineShopping</span></div>
                    </div>
                </SplideSlide>
            </Splide> 

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-4 w-full lg:w-full lg:mt-[4%]">
            <div :class="bgImgClass" class="w-full h-[200px] relative">
                <div class="absolute z-[2] top-[30%] left-2 text-center">
                    <div class="font-semibold text-[purple] capitalize text-[23px]">get your phone</div>
                    <div class="font-semibold text-[purple] capitalize text-[23px]">now!</div>
                </div>
                <div class="mt-2 flex items-center justify-start absolute z-[2] w-full bottom-3 mx-auto text-center"><a href="#" class="bg-black text-white font-bold py-1 px-2 capitalize hover:bg-[white] hover:text-red-500 w-[90%] mx-auto">click here</a></div>
                <img src="https://www.shutterstock.com/image-photo/smiling-handsome-arab-guy-casual-600nw-2182934327.jpg" class="absolute top-0 h-[210px] lg:h-[200px] lg:object-fill" />
            </div>

            <div :class="bgImgClass" class="w-full h-[200px] relative">
                <div class="absolute z-[2] top-[10%] text-center left-[20%] lg:left-2 animate__animated animate__infinite animate__slower animate__zoomIn">
                    <div class="font-bold text-red-500 capitalize text-[18px] ">get up to</div>
                    <div class="font-bold text-green-500 capitalize text-[20px] animate__animated animate__infinite animate__slower animate__flash">&#x20A6;10,000</div>
                    <div class="font-bold text-red-500 capitalize text-[18px] changeColors">off your shopping cart</div>
                </div>
                <div class="mt-2 flex items-center justify-start absolute z-[2] w-full bottom-3 mx-auto text-center"><a href="#" class="bg-black text-white font-bold py-1 px-2 capitalize hover:bg-[white] hover:text-red-500 w-[90%] mx-auto">Apply now</a></div>
                <img src="https://st3.depositphotos.com/26809576/32099/i/450/depositphotos_320996592-stock-photo-yellow-radial-background-pop-art.jpg" class="absolute top-0 h-[210px] lg:h-[200px] object-cover" />
            </div>

            <div :class="bgImgClass" class="w-full h-[200px] relative">
                <!-- <div class="absolute z-[2] top-[50%] left-2">
                    <div class="font-semibold text-yellow-500 capitalize text-[18px]">get your phone</div>
                    <div class="font-semibold text-yellow-500 capitalize text-[18px]">now!</div>
                </div> -->
                <div class="mt-2 flex items-center justify-start absolute z-[2] w-full bottom-3 mx-auto text-center"><a href="#" class="bg-black text-white font-bold py-1 px-2 capitalize hover:bg-[white] hover:text-red-500 w-[90%] mx-auto">Shop Now</a></div>
                <img src="https://assets-static.invideo.io/images/large/image_47_8c67712d46.png" class="absolute top-0 h-[210px] lg:h-[200px] object-fill" />
            </div>

            <div :class="bgImgClass" class="w-full h-[200px] text-center relative">
                <div class="absolute z-[2] top-[10%] left-6">
                    <div class="font-extrabold text-white capitalize text-[25px] changeColors1">unbeatable</div>
                    <div class="font-extrabold text-[yellow] capitalize text-[25px] changeColors2">Bulk</div>
                    <div class="font-extrabold text-white capitalize text-[25px] changeColors3">deals</div>
                </div>
                <div class="mt-2 flex items-center justify-start absolute z-[2] w-full bottom-3 mx-auto text-center"><a href="#" class="bg-black text-white font-bold py-1 px-2 capitalize hover:bg-[white] hover:text-red-500 w-[90%] mx-auto">Shop Now</a></div>
                <img src="https://media.istockphoto.com/id/1184833952/vector/radial-background-traditional-pattern.jpg?s=612x612&w=0&k=20&c=jAdUVN53V-2-AuYYweHpTRbb80Pz7t2-DKsqtPZLFew=" class="absolute w-full top-0 h-[210px] lg:h-[200px] object-fill" />
            </div>
        </div>
    </div>
</template>
<script setup>
  import { ref } from 'vue'
    const slideOptions = ref({
        perPage: 1,
        width: '70%',
        // gap: 20,
        arrows: false,
        perMove: 1,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        drag: true,
        autoplay: true,
        interval: 3000,
        waitForTransition: true,
        paginationDirection: 'ltr',
        pagination: false,
        type: 'loop',
        breakpoints: { 576: { perPage: 1, width: ""}}
    })
</script>

<style scoped>
    .purple{
        background: url('https://cdn5.vectorstock.com/i/1000x1000/70/29/abstract-burst-background-from-radial-stripes-vector-16317029.jpg');
        width: 100%;
    }
</style>
