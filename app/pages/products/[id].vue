<template>
  <div>
    This is dynamic {{ product }}
  </div>
</template>

<script>
import { useProductsStore } from '~/stores/products'

export default {
  setup() {
    const route = useRoute()
    const products = useProductsStore()

    const productId = computed(() => Number(route.params.id))
    const product = computed(() => products.getProductById(productId.value))

    return { product }
  }
}
</script>

<style scoped></style>