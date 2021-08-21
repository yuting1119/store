<template>
  <div id="map">
    <h2>this is store page</h2>
    <div class="bg container-fluid"></div>
    <div class="map-list-container container">
      <div class="map-row row">
        <div class="map-col-1 col-md-6">
          <form class="form-container container text-center">
            <input type="search" class="form-control serch" id="search-input" placeholder="輸入關鍵字找找">
            <button type="submit" class="btn btn-light btn-block" @click.prevent="searchSubmit">查詢</button>
          </form>
        </div>
        <div class="map-col-2 col-md-6">
          <div class="map-list"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bookstore: []
    }
  },
  mounted () {
    const storeMap = 'https://sleepy-waters-79700.herokuapp.com/bookstore'
    this.$http.get(storeMap).then((response) => {
      // console.log(response.data)
      this.bookstore.push(...response.data)
      let rawHTML = ''
      this.bookstore.forEach(datas => {
        if (datas.arriveWay === '') {
          datas.arriveWay = '-'
        }
        rawHTML += `<div class="map-item"><h3><a href="${datas.website}">${datas.name}</a></h3>
            <hr />
              <div>
                <i class="fas fa-phone-alt"></i> ${datas.phone}<br /><i
                  class="fas fa-store-alt"
                ></i>
                ${datas.openTime}
              </div>
              <div class="location">
                <p>
                  <i class="fas fa-map-marker-alt"></i><br>
                  <span>${datas.cityName}<br>
                  ${datas.address}</span>
                </p>
              </div>
            </div>`
        const mapList = document.querySelector('.map-list')
        mapList.innerHTML = rawHTML
      })
    })
  },
  methods: {
    searchSubmit () {
      const searchInput = document.querySelector('#search-input')
      const keyWord = searchInput.value.trim()
      const ansURL = `https://sleepy-waters-79700.herokuapp.com/bookstore?name=${keyWord}`
      const ansStore = []
      this.$http.get(ansURL).then((response) => {
        // console.log(response.data)
        ansStore.push(...response.data)
        let ansHTML = ''
        ansStore.forEach(ans => {
          ansHTML += `<div class="map-item"><h3><a href="${ans.website}">${ans.name}</a></h3>
            <hr />
              <div>
                <i class="fas fa-phone-alt"></i> ${ans.phone}<br /><i
                  class="fas fa-store-alt"
                ></i>
                ${ans.openTime}
              </div>
              <div class="location">
                <p>
                  <i class="fas fa-map-marker-alt"></i><br>
                  <span>${ans.cityName}<br>
                  ${ans.address}</span>
                </p>
              </div>
            </div>`
          const mapList = document.querySelector('.map-list')
          mapList.innerHTML = ansHTML
          if (ans.name.length === 0) {
            return alert(`沒有符合${keyWord}的書店喔`)
          }
        })
      })
    }
  }
}
</script>
