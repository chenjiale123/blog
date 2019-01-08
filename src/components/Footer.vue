<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <span id="bottom">
        made with
        <a href="https://vuejs.org/" target="_blank">
          <img class="badges"
            src="@/assets/images/vue-logo.png"
            alt="Vue" >
        </a>
        <br/>
        made with
        <a href="https://bulma.io/" target="_blank">
          <img class="badges"
            src="@/assets/images/bulma-logo.png"
            alt="Bulma"
          >
        </a>
        <br/>
        and of course
        <i class="fas fa-heart badges"></i>
      </span>
    </div>
  </footer>
</template>

<style lang="scss">
#bottom {
  font-family: 'Poiret One', cursive;
  font-size: 1.7rem;
}

.fa-heart {
  color: red
}

.badges {
  height: 1.5rem;
  padding: 1px;
}

.footer {
  box-shadow: 0px -3px 20px -3px #414141;
  height: 25vh;
  color: #000000
}
</style>
