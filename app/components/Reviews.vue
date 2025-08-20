<template>
  <div>
    <h3>Customer reviews</h3>
    <div v-if="status !== 'pending'">
      <ReviewCard v-for="reviewer in reviewers.results" :key="reviewer.login.uuid" :review="reviewer" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>

export default {
  setup() {
    // const { data: reviewers } = await useFetch('https://randomuser.me/api/?results=5');
    const { data: reviewers, status } = useFetch('https://randomuser.me/api/?results=5');
    // const pending = computed(() => status.value === 'pending');

    return { reviewers, status }
  }
}
</script>

<style scoped></style>