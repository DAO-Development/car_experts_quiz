<template>
    <div class="container">
        <h1>Отчет по автомобилю</h1>
        <div v-if="!next">
            <h2>Данные мастера</h2>
            <div class="row g-3 mb-3">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label">
                            Имя
                        </label>
                        <input type="text" v-model="master.name" class="form-control">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label">
                            Фамилия
                        </label>
                        <input type="text" v-model="master.lastname" class="form-control">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <select name="" v-model="master.lang" class="form-select">
                            <option checked value="ru">русский</option>
                            <option value="en">english</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <button class="btn btn-primary" @click="createReport">
                            Далее
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="loader" class="loader-wrapper">
            <div class="loader-container">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>

</template>

<script>
import axios from "axios";

// const base_url = 'http://127.0.0.1:8000/api/'
const base_url = 'https://carexpertsnew.ffox.site/api/'
export default {
    name: "QuizNewView",
    data() {
        return {
            master: {
                name: '',
                lastname: '',
                lang: '',
            },

            loader: false

        }
    },

    mounted() {


    },

    methods: {

        createReport() {
            if(!(this.master.name &&
                this.master.lastname &&
                this.master.lang )) {
                alert('Заполните все данные')
                return;
            }
            this.loader = true;
            // Collect the data from the Vue data object
            const reportData = {
                master: {
                    name: this.master.name,
                    lastname: this.master.lastname,
                    lang: this.master.lang
                },

            };

            // Send the data to the server using axios
            axios.post(base_url+'reports', reportData)
                .then(response => {
                    // Handle the response from the server
                    console.log(response.data);
                    this.$router.push({ name: 'quiz', params: { lang: response.data.master_lang, id: response.data.pseudo_id }});
                })
                .catch(error => {
                    this.loader = false;
                    alert('Произошла ошибка')
                    // Handle any errors that occurred during the request
                    console.error(error);
                });
        },

    },

    computed: {
        // brand: {
        //     get() {
        //         if (this.selected_brand === 'another') {
        //             return this.another_brand;
        //         } else {
        //             return this.selected_brand;
        //         }
        //     },
        //     set(value) {
        //         this.selected_brand = value;
        //     },
        // },
    },
}
</script>