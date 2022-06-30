<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <div class="main-body">
          <!-- Breadcrumb -->
          <nav aria-label="breadcrumb" class="main-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
              <li class="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
          </nav>
          <!-- /Breadcrumb -->

          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle"
                      width="150">
                    <div class="mt-3">
                      <h4>{{firstname}} {{lastname}}</h4>
                      <p class="text-secondary mb-1">{{role}}</p>
                      <p class="text-muted font-size-sm"><h3>{{address}}</h3></p>

                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3">
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <!-- <v-col v-for="acc in account.user">-->
                  <div class="card-body"> 
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Nom / Prénom</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                         {{lastname}} {{firstname}}
                      </div>
                    </div>
                    <hr>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Email</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {{email}}
                      </div>
                    </div>
                    <hr>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Phone</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                       {{phone}}
                      </div>
                    </div>
                    <hr>
                    <hr>
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Addresse</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {{adresse}}
                      </div>
                    </div>
                    <hr>
                    <form>
                      <div class="form-group">
                        <label for="formGroupExampleInput">Nouvelle adresse</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Adresse">
                      </div>
                      <div class="form-group">
                        <label for="formGroupExampleInput2">Nouveau phone</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Phone">
                      </div>
                      <div class="form-group">
                        <label for="formGroupExampleInput2">Nouveau email</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Email">
                      </div>
                    </form>
                    <div class="row">
                      <div class="col-sm-12">
                        <a class="btn btn-info" target="__blank">Modifier mon compte</a>
                        <router-link id="left" class="link" :to="{ name: 'Restaurant' }"> Modifier mes articles
                        </router-link>
                        <button id="supp" type="button" class="btn btn-danger">Supprimer</button>
                        <button id="supp" type="button" class="btn btn-danger">Déconnexion</button>
                      </div>
                    </div>
                  </div>
                  <!-- </v-col>  -->
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>
  <script>
import axios from 'axios';
import jwt_decode from "jwt-decode";

export default {
  name: 'Account',
  data() {
    return {
      firstname:'',
      lastname:'',
      email:'',
      phone:'',
      addresse:'',
      role:'',
      token:{}
    }
  },
  mounted() {
    const token  = localStorage.getItem('jwtToken') //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImVtYWlsIjoiZWRnYXJAdmlhY2VzaS5mciIsImZpcnN0X25hbWUiOiJjaGF1YnJvbiIsInJvbGUiOiJSRVNUQVVSQVRFVVIiLCJpYXQiOjE2NTY2MDQyMTN9.crvxfkfniRMj_cVeAIpHaNcZAOOJ9brSDFTMjaAWX1c"
    console.log(token)
    const decoded = jwt_decode(token)
    const id = decoded.id
    axios
      .get('http://localhost:8082/user/'+id)
      .then((response) => {
        console.log(response)
        this.firstname = response.data.user.Firstname + ""
        this.lastname = response.data.user.Lastname
        this.email = response.data.user.email
        this.phone = response.data.user.Number
        this.adresse = response.data.user.Address
        this.role = response.data.user.role
      }).catch(err => {
        console.log(err);
      })
  }
}
</script>
  <style lang="scss" scoped>
  #supp {
    margin-left: 25px;
  }
  
  #left {
    margin-left: 25px;
  }
  
  .main-breadcrumb {
    margin-top: 150px;
  }
  
  body {
    margin-top: 20px;
    color: #1a202c;
    text-align: left;
    background-color: #e2e8f0;
  }
  
  .main-body {
    padding: 15px;
  }
  
  .card {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
  }
  
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0, 0, 0, .125);
    border-radius: .25rem;
  }
  
  .card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
  }
  
  .gutters-sm {
    margin-right: -8px;
    margin-left: -8px;
  }
  
  .gutters-sm>.col,
  .gutters-sm>[class*=col-] {
    padding-right: 8px;
    padding-left: 8px;
  }
  
  .mb-3,
  .my-3 {
    margin-bottom: 1rem !important;
  }
  
  .bg-gray-300 {
    background-color: #e2e8f0;
  }
  
  .h-100 {
    height: 100% !important;
  }
  
  .shadow-none {
    box-shadow: none !important;
  }
  
  .home {
    margin-bottom: 321px;
  }
  </style>
 <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
