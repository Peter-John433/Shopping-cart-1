<template>
    <div>
       <Header />
       <Header2 />
       <LandingPage1 />
       <MiddleHeaders />
       <TodaysDeal />
       <LandingPageProduct1 />
    </div>
</template>
<script setup>
  import Header from '@/components/Header.vue';
  import Header2 from '@/components/Header2.vue';
  import TodaysDeal from '@/components/TodaysDeal.vue';
  import LandingPageProduct1 from '@/components/landingpage/LandingPageProduct1.vue';
  import LandingPage1 from '@/components/landingpage/LandingPage1.vue'
  import MiddleHeaders from '../views/middleheader/MiddleHeaders.vue'
</script>
