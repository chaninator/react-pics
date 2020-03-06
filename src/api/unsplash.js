import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID MymUk6FH327BVx-mkjKzTHR_nRe5nfiSO3aVkmz2J90'
  }
})
