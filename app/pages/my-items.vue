<template>
  <div>
    <MyItem v-for="item in myRentals" :key="item.id" :item="item" />
  </div>
</template>

<script setup>
import { useProductsStore } from '~/stores/products'

const products = useProductsStore()
const myRentals = computed(() => products.$state.myRentals)
// const myRental = computed(() => products.getAllProducts)
definePageMeta({
  layout: 'no-nav'
})
</script>

<style scoped></style>