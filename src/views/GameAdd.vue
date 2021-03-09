<template>
<div class="container-fluid" style="margin-top:100px">
    <div class="row">
        <div class="col-md-12">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Add New Game</h6>
                </div>
                <div class="card-body">
                    <div class="row gx-5">
                        <div class="col-md-12 mt-3">
                            <div class="form">
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="panel panel-default">
                                                <div class="panel-body">
                                                    <form @submit.prevent="addNewGame" enctype="application/x-www-form-urlencoded">
                                                        <div class="col">
                                                            <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                                <div class="col-6">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="title"><strong>Game</strong></label>
                                                                        <input type="text" id="title" class="form-control" v-model="title" placeholder="The Last Adventure" >
                                                                    </div>
                                                                </div>
                                                                <div class="col-6">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="genre"><strong>Genre</strong></label>
                                                                        <!-- <input type="text" class="form-control" placeholder="Adventure, Puzzle" disabled> -->
                                                                        <multiselect v-model="genre" tag-placeholder="Add this as new genre" placeholder="Search or add a genre" label="name" track-by="name" :options="gameGenres" :multiple="true" :taggable="true" openDirection="bottom" :max="3" @tag="addGenre"></multiselect>
                                                                        <!-- BERHASIL -->
                                                                        <!-- <select id="target" class="form-control selectpicker" required multiple v-model="genre">
                                                                            <option v-for="(genre, index) in gameGenres" :key="index" :value="genre.name">{{genre.name}}</option>
                                                                        </select> -->
                                                                        
                                                                        <!-- <select class="selectpicker form-control" id="genre" multiple data-live-search="true" v-model="genre" > -->
                                                                        <!-- <select class="form-control" id="genre" v-model="genre" >
                                                                            <option v-for="(genre, index) in gameGenres" :key="index" :value="genre">{{genre}}</option>
                                                                        </select> -->
                                                                        <!-- <pre class="language-json"><code>{{ genre }}</code></pre> -->
                                                                        <!-- <pre class="language-json"><code v-for="(genre, index) in genre" :key="index">{{index}}</code></pre> -->
                                                                        <!-- <pre class="language-json"><code>{{ Object.values(genre)}}</code></pre> -->
                                                                        <!-- <pre class="language-json"><code>{{ genre[1]}} {{genre[0] }}</code></pre> -->
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                                <div class="col-3">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="price"><strong>Normal Price</strong></label>
                                                                        <input type="number" id="price" class="form-control" v-model="price" min="1" placeholder="50000">
                                                                    </div>
                                                                </div>
                                                                <div class="col-3">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="discount"><strong>Discount</strong> (%)</label>
                                                                        <input type="number" id="discount" class="form-control" v-model="discount" min="0" placeholder="20">
                                                                    </div>
                                                                </div>
                                                                <div class="col-3">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="duration"><strong>Duration</strong> (Minutes)</label>
                                                                        <input type="number" id="duration" class="form-control" v-model="duration" min="1" >
                                                                    </div>
                                                                </div>
                                                                <div class="col-3">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="duration"><strong>Rating</strong> (1-5) 
                                                                            <!-- pake parseInt() biar dia ngebaca integer -->
                                                                            <span v-if="rating"><b-icon v-for="value in parseInt(rating)" :key="value" icon="star-fill" class="h7" style="color: orange" aria-hidden="true"></b-icon></span> 
                                                                            <span v-else><b-icon icon="star-fill" class="h7" style="color: orange" aria-hidden="true"></b-icon></span>
                                                                        </label>
                                                                        <input type="number" id="duration" class="form-control" v-model="rating" min="1" max="5" >
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                                <div class="col-3">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="difficulty"><strong>Difficulty</strong></label>
                                                                        <!-- <input type="number" id="difficulty" class="form-control" v-model="difficulty" min="1" > -->
                                                                        <select name="" id="difficulty" v-model="difficulty" class="form-control">
                                                                            <option :value="index+1" v-for="(diff, index) in difficulties" :key="index">{{diff}}</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-3">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="capasity"><strong>Capacity</strong></label>
                                                                        <input type="number" id="capasity" class="form-control" v-model="capacity" min="1" >
                                                                    </div>
                                                                </div>
                                                                <!-- <div class="col-3">
                                                                    <div class="input-container" style="flex-grow: 1;">
                                                                        
                                                                        <select name="genre" id="genre" v-model="genre" class="form-control">
                                                                            <option value="Adventure">Adventure</option>
                                                                            <option value="Action">Action</option>
                                                                            <option value="Puzzle">Puzzle</option>
                                                                        </select>
                                                                    </div>
                                                                </div> -->
                                                                <div class="col-6">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="url"><strong>URL</strong> (tranceformasiindonesia.com/<b><span v-if="url">{{url}}</span> <span v-else>yourURL</span></b> )</label>
                                                                        <input type="text" id="url" class="form-control" v-model="url">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                                <div class="col">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="description"><strong>Description</strong></label>
                                                                        <textarea name="description" id="description" class="form-control" cols="30" rows="10" v-model="description"></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="form-group" style="display: flex; ">
                                                                <div class="col-6">
                                                                    <div class="input-container" style="flex-grow: 1;">
                                                                        <label for="cover"><strong>Cover</strong></label>
                                                                        <input type="file" id="cover" name="image" ref="image" class="form-control" @change="onCoverChange">
                                                                    </div>
                                                                    <div class="preview">
                                                                        <img v-if="imageUrl" :src="imageUrl" alt="Covernya" height="100px" style="margin:10px">
                                                                    </div>
                                                                </div>
                                                                <div class="col-6">
                                                                    <div class="input-container" style="flex-grow: 1;">
                                                                        <label for="poster"><strong>Poster</strong></label>
                                                                        <input type="file" id="poster" ref="poster" name="poster" class="form-control" @change="onPosterChange">
                                                                    </div>
                                                                    <div class="preview">
                                                                        <img v-if="posterUrl" :src="posterUrl" alt="Posternya" height="100px" style="margin:10px">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                                <div class="col-md">
                                                                    <button class="btn btn-primary" type="submit">Add Game!</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- <div class="card bg-light">
			        	<div class="card-header">
			        		<h3>Game Data</h3> 
			        	</div>
			        	<div class="card-inner">
			        		<div class="card bg-dark">
			        			<div class="card-inner bg-dark">
			        				<pre class="text-warning">{{getGame}}</pre>
			        			</div>
			        		</div>
			        	</div>
			        </div> -->
                </div> 
            </div>
        </div>
    </div>
</div>
</template>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script>
// import Vue from 'vue'
// import multiselect from 'vue-multiselect'
// Vue.component('multiselect', multiselect)
export default {
    // components: {
    //     multiselect
    // },
    data(){
        return {
            obj: '',
            title: '',
            price: '',
            duration: '',
            discount: '',
            description: '',
            poster: '',
            image: '',
            genre: [], //buat multiselect
            // genre: ['Adventure', 'Puzzle'],
            
            difficulty: '',
            capacity: '',
            rating: '',
            url: '',
            imageUrl: '',
            posterUrl: '',
            readImage:'',

            getGame: '',

            gameGenres: [
                {name: 'Adventure'},
                {name: 'Action'},
                {name: 'Puzzle'},
                // "Adventure",
                // "Action",
                // "Puzzle",
            ],

            difficulties: [
                'Eazy',
                'Normal',
                'Hard',
                'Very Hard',
            ]
            // gameGenres: {
            //     name: 'Adventure',
            //     name: 'Action',
            //     name: 'Puzzle',
            // }
            
        }
    },
    methods: {
        addGenre (newTag) {
            const tag = {
              name: newTag,
              code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            }
            this.options.push(tag)
            this.value.push(tag)
        },
        onCoverChange() {
            const reader = new FileReader()
            reader.onload = (e) => {
              this.imageUrl = e.target.result
            }
            const image = this.$refs.image.files[0]
            reader.readAsDataURL(image)
            console.log(this.imageUrl);
        },
        onPosterChange() {
            const reader = new FileReader()
            reader.onload = (e) => {
              this.posterUrl = e.target.result
            }
            const poster = this.$refs.poster.files[0]
            reader.readAsDataURL(poster)
            console.log(this.posterUrl);
        },

        addNewGame() {
            if (this.discount == '' || this.discount < 0) {
                this.discount = 0
            } else if (this.discount > 100) {
                this.discount = 100
            } 
            if (this.rating == '' || this.rating < 0) {
                this.rating = 5
            }

            for (let i = 0; i < this.genre.length; i++) {
                this.genre[i] = this.genre[i].name
            }
            // console.log(this.genre);
            // const formData = new FormData()
            // formData.append('title', 'this.title')
            // formData.append('poster', 'data:image/png;base64,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')
            // formData.append('image', this.imageUrl)
            // // for (i = 0; i < this.genre.length; i++) {
            // //     console.log(this.genre[i].name);
            // //     formData.append('genre', this.genre[i].name)
            // // }
            // formData.append('genre', 'Adventure')
            // // formData.append('genre', this.gameGenres)
            // formData.append('price', 500000)
            // formData.append('discount', 50)
            // formData.append('description', 'this.description')
            // formData.append('difficulty', 2)
            // formData.append('capacity', 5)
            // formData.append('duration', 50)
            // formData.append('rating', 5)
            // formData.append('url', 'this.url')
            // formData.append('ready', false)

            // let headers = {
            //     "headers": {
            //         "Content-Type": "application/x-www-form-urlencoded",
            //         // 'Access-Control-Allow-Origin': '*'
            //     },
            // }    

            const addGameData = {
                title: this.title,
                poster: this.imageUrl,
                image: this.posterUrl,
                genre: this.genre,
                price: this.price,
                discount: this.discount,
                description: this.description,  
                difficulty: this.difficulty,
                capacity: this.capacity,
                duration: this.duration,
                rating: this.rating,
                url: this.url,
                ready: false,
            }
            this.axios.post('game/create', addGameData).then( response => {
                console.log('Sedang Menambahkan Game Baru...')
                // console.log('imagenya: ' + formData)
                console.log('response requestnya: ' + response.request)
                console.log('Berhasil Menambahkan Game Baru')
                this.$router.push('/games')
            }).catch(error => {console.log( error.response )})
        },
        getGames() {
            this.axios.get('game/list').then(response => {
                this.getGame = response.data.data
            }).catch(error => {
                console.log(error.response);
            })
        }
    },
    mounted() {
        this.getGames()
        // multiselect
        $('.selectpicker').selectpicker({
            noneSelectedText: 'Pilih Genre'
        });

        this.obj = Object.assign({}, this.genre);
    }
}

// multiselect
// $('select').selectpicker();

</script>
<style src="../../node_modules/vue-multiselect/dist/vue-multiselect.min.css"></style>
