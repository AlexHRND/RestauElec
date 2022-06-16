<template>
  <header :class="{'scrolled-nav': scroledlNav}">
  <nav>
    <div class="branding">
      <img src="@/assets/logo.png">
      <h1>CESI FOOD</h1>
    </div>
    <ul v-show="!mobile" class="navigation">
      <li><router-link class="link" :to="{name :'Home'}">Accueil</router-link></li>
      <li><router-link class="link" :to="{name :'Auth'}">Connexion</router-link></li>
      <li><router-link class="link" :to="{name :'Inscrip'}">Inscription</router-link></li>
      <li><router-link class="link" :to="{name :'Products'}">Produits</router-link></li>
    </ul>
    <div class="icon">
      <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-acive':mobileNav}"></i>
    </div>
    <transition name="mobile-nav">
    <ul v-show="mobileNav" class="dropdown-nav">
      <li><router-link class="link" :to="{name :'Home'}">Home</router-link></li>
      <li><router-link class="link" :to="{name :''}">About</router-link></li>
      <li><router-link class="link" :to="{name :''}">Porfolio</router-link></li>
      <li><router-link class="link" :to="{name :''}">Contact</router-link></li>
    </ul>
    </transition>
  </nav>
  </header>
  <title>Login Page</title>
   <!--Made with love by Mutiullah Samim -->
   
	<!--Bootsrap 4 CDN-->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    
	<link rel="stylesheet" type="text/css" href="styles.css">
</template>

<script>
export default {
  name:"navigation",
  data() {
    return {
      scrolledNav: null,
      mobile: true ,
      mobileNav: true,
      windowWidth: null,
    };
  },
  created(){
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  monted(){
    window.addEventListener("scroll",this.updateScroll)

  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },

    updateScroll(){
      const scrollPosition = window.screenY;
      if(scrollPosition > 50){
        this.scrolledNav = true ; 
        return;
      }
      this.scrolledNav = false;
    },
    checkScreen(){
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 750){
        this.mobile = true
        return;
      }
      this.mobile =false;
      this.mobileNav = false
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
h1{
  
  width: 100%;
  font-size: 3rem;
  letter-spacing: 3px;
  color: #fff;
  font-family: Oswald, sans-serif;
  text-shadow: 1px 1px 1px #030303, 1px 1px 4px #2980b9;
  margin-left: 15px;
  
}
header {
  background-color: rgba(128, 128, 128, 0.8);
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: .5s ease all;
  color: white;

  nav{
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: .5s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1140px){
      max-width: 1140px;
    }
  ul,
  .link{
    font-weight: 500 ;
    color: white;
    list-style: none;
    text-decoration: none;


  }

  li{
    text-transform: uppercase;
    padding: 16px;
    margin-left: 16px;
    letter-spacing: 3px;
    color: #fff;
    font-family: Oswald, sans-serif;
    text-shadow: 1px 1px 1px #000000, 1px 1px 4px #2980b9;
      
  }
  .link{
    font-size: 14px;
    transition: .5s ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;

    &:hover{
      color: #00afea;
      border-color: #00afea;


    }
  }
  .branding{
    display: flex;
    align-items: center;

    img{
      width: 50px;
      transition: 0.5s ease all;
    }
  }
  .navigation{
    display:flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
  }
  .icon{
    display: flex;
    position: absolute;
    align-items: center;
    top: 0px;
    right: 24px;
    height: 100%;
  }
  i{
      cursor: pointer;
      font-size: 24px;
      transition: .8s ease all;

      }

  .icon-active{
    transform: rotate(180deg);
    color: #00afea;
  }
  .dropdown-nav{
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 100%;
    max-width: 250px;
    background-color: rgba(255, 255, 255, 0.452);
    top: 10%;
    left: 0;
    text-align: center;

    li{
      margin-left: 0;
      .link{
        color: rgb(44, 41, 41);
      }
    }
  }
    .mobile-nav-enter-active,
    .mobile-nav-leave-active{
      transition: 1s ease all;

    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to
    {
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to{
      transform: translateX(0);
    }
  }
}

  .scrolled-nav{
    background-color: black;
    box-shadow: 0 4px 6px -1px black,0 2px 4px -1px black;

    .nav{
      padding: 8px 0;
      .branding{
        img{
          width: 40px;
          box-shadow: 0 4px 6px -1px black,0 2px 4px -1px black;
        }
      }
    }
  }

</style>
