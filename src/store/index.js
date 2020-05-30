import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos: [
      {
      id: 1,
      title:  'Getting  New Clients by Singing to Them',
      thumbnail: ' ',
      category: 'video',
      description: 'This  Zoom video shows how Stevie Wonder prospects for new clients.',
      createdate: ' ',
      vidurl: 'https://nadia.s3.amazonaws.com/stevie.mp4' 
      },
      
      {
      id: 2,
      title:  'Stevie Sings to the People',
      thumbnail: ' ',
      category: 'video',
      description: 'This  Zoom video shows how Stevie Wonder charms new clients.',
      createdate: ' ',
      vidurl: 'https://nadia.s3.amazonaws.com/StevieAs+If+for+web.mp4' 
      },
      
      {
      id: 3,
      title:  'Listing Lab For Realtors',
      thumbnail: ' ',
      category: 'pdf',
      description: 'This pdf document shows how to make crazy money overnight.',
      createdate: ' ',
      vidurl: 'https://hburg.s3-us-west-1.amazonaws.com/Daddy+Benny+Concert2.mp4' 
      },
      
      ]
      
      
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
