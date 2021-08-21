<template>
  <div id="book">
    <h2 class="text-center">this is book page</h2>
    <div class="row">
      <div class="col-md-3">
        <div class="list-group-book">
          <a class="list-group-item list-group-item-action active" aria-current="true" @click.prevent="getAll">All</a>
          <a class="list-group-item list-group-item-action" @click.prevent.stop="getAug">本月雜誌</a>
          <a class="list-group-item list-group-item-action" @click="getJuly">上月雜誌</a>
          <a class="list-group-item list-group-item-action" @click="getHit">近期熱門</a>
        </div>
      </div>
      <div class="col-md-9">
        <div class="row book-list"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      books: [],
      augBooks: [],
      julyBooks: [],
      hitBook: []
    }
  },
  methods: {
    getAll () {
      const allBooks = 'https://sleepy-waters-79700.herokuapp.com/magzine'
      this.$http.get(allBooks).then((response) => {
        // console.log(response.data)
        this.books.push(...response.data)
        let allBookHTML = ''
        this.books.forEach(datas => {
          allBookHTML += `<div class="col-md-6 col-lg-4">
            <div class="card text-center card-container">
              <img src="${datas.cover}" class="card-img-top" alt=""/>
              <div class="card-body card-content">
                <h5 class="card-title">${datas.name}</h5>
                <p class="card-text price">$ ${datas.price}元</p>
                <a href="#!" class="btn btn-outline-dark book-btn" data-mdb-ripple-color="dark">BUY</a>
              </div>
            </div>
          </div>`
          const bookList = document.querySelector('.book-list')
          bookList.innerHTML = allBookHTML
        })
      })
    },
    getAug () {
      const augBook = 'https://sleepy-waters-79700.herokuapp.com/magzine/?category=aug'
      this.$http.get(augBook).then((response) => {
        this.augBooks.push(...response.data)
        let augBookHTML = ''
        this.augBooks.forEach(augData => {
          augBookHTML += `<div class="col-md-6 col-lg-4">
            <div class="card text-center card-container">
              <img src="${augData.cover}" class="card-img-top" alt=""/>
              <div class="card-body card-content">
                <h5 class="card-title">${augData.name}</h5>
                <p class="card-text price">$ ${augData.price}元</p>
                <a href="#!" class="btn btn-outline-dark book-btn" data-mdb-ripple-color="dark">BUY</a>
              </div>
            </div>
          </div>`
          const bookList = document.querySelector('.book-list')
          bookList.innerHTML = augBookHTML
        })
      })
    },
    getJuly () {
      const julyBook = 'https://sleepy-waters-79700.herokuapp.com/magzine/?category=july'
      this.$http.get(julyBook).then((response) => {
        this.julyBooks.push(...response.data)
        let julyBookHTML = ''
        this.julyBooks.forEach(datas => {
          julyBookHTML += `<div class="col-md-6 col-lg-4">
            <div class="card text-center card-container">
              <img src="${datas.cover}" class="card-img-top" alt=""/>
              <div class="card-body card-content">
                <h5 class="card-title">${datas.name}</h5>
                <p class="card-text price">$ ${datas.price}元</p>
                <a href="#!" class="btn btn-outline-dark book-btn" data-mdb-ripple-color="dark">BUY</a>
              </div>
            </div>
          </div>`
          const bookList = document.querySelector('.book-list')
          bookList.innerHTML = julyBookHTML
        })
      })
    },
    getHit () {
      const hitBook = 'https://sleepy-waters-79700.herokuapp.com/magzine/?category=hit'
      this.$http.get(hitBook).then((response) => {
        this.hitBook.push(...response.data)
        let hitBookHTML = ''
        this.hitBook.forEach(datas => {
          hitBookHTML += `<div class="col-md-6 col-lg-4">
            <div class="card text-center card-container">
              <img src="${datas.cover}" class="card-img-top" alt=""/>
              <div class="card-body card-content">
                <h5 class="card-title">${datas.name}</h5>
                <p class="card-text price">$ ${datas.price}元</p>
                <a href="#!" class="btn btn-outline-dark book-btn" data-mdb-ripple-color="dark">BUY</a>
              </div>
            </div>
          </div>`
          const bookList = document.querySelector('.book-list')
          bookList.innerHTML = hitBookHTML
        })
      })
    }
  },
  created () {
    // this.getAll()
    // this.getAug()
  }
}
</script>
