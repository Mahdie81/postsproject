
import axios from 'axios';


 const Posts={
    namespaced:true,
    state: {
     Posts:[]
    },
    getters: {
    },
    mutations: {
        SET_POST(state,data){
            state.Posts=data;
            
        }
    },
    actions: {
        loadPosts({ commit }) {
            axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then(response =>{commit('SET_POST', response.data
                .map((array) => ({
                    ...array,
                    img:"https://phsonline.org/uploads/attachments/cl4o8j4om379fthra39rg21n7-2023-flowershow-edit.85.0.1269.846.full.jpg",
                  }))
                  )})
                .catch(error=>console.log(error))
            
        }

    },
}


export default Posts;