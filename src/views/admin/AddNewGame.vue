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
                                                    <form @submit.prevent="addNewGame">
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
                                                                        <input type="number" id="difficulty" class="form-control" v-model="difficulty" min="1" >
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
// import Multiselect from 'vue-multiselect'
// Vue.component('multiselect', Multiselect)
export default {
    // components: {
    //     Multiselect
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
            genre: [],
            
            difficulty: '',
            capacity: '',
            rating: '',
            url: '',
            imageUrl: '',
            posterUrl: '',

            getGame: '',

            gameGenres: [
                {name: 'Adventure'},
                {name: 'Action'},
                {name: 'Puzzle'},
                // "Adventure",
                // "Action",
                // "Puzzle",
            ],
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
            this.image = this.$refs.image.files[0]
            this.imageUrl = URL.createObjectURL(this.image)
            console.log('urlnya: '+this.imageUrl);
        },
        onPosterChange() {
            this.poster = this.$refs.poster.files[0]
            this.posterUrl = URL.createObjectURL(this.poster)
            console.log('urlnya: '+this.posterUrl);
        },

        addNewGame() {
            if (this.discount == '') {
                this.discount = 0
            }

            

            // this.genre = Object.values(this.genre)
            const formData = new FormData()
            formData.append('title', this.title)
            formData.append('poster', this.poster)
            formData.append('image', this.image)
            // var gen = "";
            var i;
            for (i = 0; i < this.genre.length; i++) {
            //   gen += this.genre[i]
              console.log(this.genre[i].name);
                formData.append('genre', this.genre[i].name)
            }
            formData.append('price', this.price)
            formData.append('discount', this.discount)
            formData.append('description', this.description)
            formData.append('difficulty', this.difficulty)
            formData.append('capacity', this.capacity)
            formData.append('duration', this.duration)
            formData.append('rating', this.rating)
            formData.append('url', this.url)

            let headers = {
                "headers": {
                    "Content-Type": "multipart/form-data",
                    'Access-Control-Allow-Origin': '*'
                },
            }    
            this.axios.post('/game/create', formData, headers).then( response => {
                console.log('imagenya: ' + formData)
                console.log('response requestnya: ' + response.request)
                console.log('Berhasil Menambahkan Game Baru')
                this.$router.push('/games')
            }).catch(error => {console.log( error.response )})
        },
        Games() {
            this.axios.get('game/list').then(response => {
                this.getGame = response.data.data
            })
        }
    },
    mounted() {
        this.Games()
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