
<template>

<div><p>Message is: {{ message }}</p>
<input v-model="message" placeholder="edit me" @change="increasePadding()" /> 


<ul>
    <li v-for="post in posts" :key="post.id">{{post.title}}.{{post.body}}</li>
</ul>
</div>



</template>

<script>
// let vm={
//     data: 'this is some data',
// }
// console.log((vm));

export default{
  name: "Practise_",
    data() {
        return {
            message: '',

            posts:[
                {id: 1, title:"1",body:"asdasdasdasdasda"},
                                {id: 3, title:"3",body:"asdasdasdasdasda"},
                                                {id: 2, title:"2",body:"asdasdasdasdasda"},
                                                                {id: 5, title:"5",body:"asdasdasdasdasda"},
                                                                                {id: 4, title:"4",body:"asdasdasdasdasda"}
            ]
        }
    },
    methods:{
        increasePadding: function() { 
            }
    },
    computed:{
        consolelogger(){
            console.log(this.message)
            return 1
        }
    }
    
}



</script>