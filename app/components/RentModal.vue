<template>
  <div>
    <!-- Button trigger modal -->
    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Rent
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="calendar-container">
              <div class="text-container">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, sed hic voluptatum ducimus nostrum
                  blanditiis laudantium voluptate cumque ipsum, veniam perspiciatis dolorem quo voluptatibus vero
                  commodi. Atque cum assumenda, iure, quisquam nostrum fugit eaque alias at tempore repudiandae vel
                  laudantium.</p>
              </div>
              <VDatePicker :value="null" color="indigo" is-dark is-range />
            </div>
            <button type="button" @click="() => { addItem(product.id) }" data-bs-dismiss="modal"
              class="btn btn-outline-danger">Order</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from '~/stores/products'
import { mapState, mapActions } from "pinia"

export default {
  props: ["product"],

  computed: { ...mapState(useProductsStore, { products: "items" }) },
  methods: { ...mapActions(useProductsStore, ['addItem']) },
}
</script>

<style scoped>
button.btn {
  width: 100%;
  border: none;
  padding: 0.5rem;
  color: white;
  font-weight: 700;
  padding: 1rem 4rem;
  border-radius: 100rem;
  background-color: rgb(231, 81, 43);
  color: white;
  font-weight: 700;
  transition: 0.5s;
}

.calendar-container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

p {
  color: grey
}

.text-container {
  padding: 0.5rem
}
</style>