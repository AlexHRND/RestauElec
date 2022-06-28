<template>
  <header :class="{'scrolled-nav': scroledlNav}">
  <nav>
    <div class="branding">
      <img src="@/assets/logo.png">
      <h1>CESI EATS</h1>
    </div>
    <ul v-show="!mobile" class="navigation">
      <li><router-link class="link" :to="{name :'Home'}">Accueil</router-link></li>
      <li><router-link class="link" :to="{name :'Auth'}">Connexion</router-link></li>
      <li><router-link class="link" :to="{name :'Inscrip'}">Inscription</router-link></li>
      <li><router-link class="link" :to="{name :'Products'}">Produits</router-link></li>
      <li><router-link class="link" :to="{name :'Compte'}">Compte</router-link></li>
    </ul>
   
    <div class="icon">
      <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-acive':mobileNav}"></i>
    </div>
    <transition name="mobile-nav">
    <ul v-show="mobileNav" class="dropdown-nav">
      <li><router-link class="link" :to="{name :'Home'}">Home</router-link></li>
      <li><router-link class="link" :to="{name :'Auth'}">Connexion</router-link></li>
      <li><router-link class="link" :to="{name :'Inscrip'}">Inscription</router-link></li>
      <li><router-link class="link" :to="{name :'Products'}">Produits</router-link></li>
      <li><router-link class="link" :to="{name :'Compte'}">Comtpe</router-link></li>
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
  font-size: 2rem;
  letter-spacing: 3px;
  color: #fff;
  font-family: Times New Roman, sans-serif;
  text-shadow: 1px 1px 1px #030303, 1px 1px 2px #2980b9;
  margin-left: 25px;
  
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
    font-family: Times New Roman, sans-serif;
    
      
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
    background-color: rgb(255, 255, 255);
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
  body{

    background: #304FFE;
} 

.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
     box-shadow: none !important;
}


.dashboard-header .navbar {
    padding: 0px;
    border-bottom: 1px solid #e6e6f2;
    -webkit-box-shadow: 0px 0px 28px 0px rgba(82, 63, 105, 0.13);
    box-shadow: 0px 0px 28px 0px rgba(82, 63, 105, 0.13);
    -webkit-transition: all 0.3s ease;
    min-height: 60px;
}



.navbar-brand {
    display: inline-block;
    margin-right: 1rem;
    line-height: inherit;
    white-space: nowrap;
    padding: 11px 20px;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 700;
    color: #007bff;
}
.navbar-brand:hover{
    color: #007bff;
}
.navbar-right-top {}

.navbar-right-top .nav-item {
    border-right: 1px solid #e6e6f2;
}

.navbar-right-top .nav-item:last-child {
    border: none;
}

.navbar-right-top .nav-item .nav-link {
    padding: 13px 20px;
    font-size: 16px;
    line-height: 2;
    color: #82849f;
}


/* --  top-search-bar ---  */

.top-search-bar {
    padding-top: 12px;
    padding-right: 24px;
}


/* ------  Notification Dropdown --------  */

.notification {}

.notification-dropdown {
    min-width: 320px;
}

.notification-dropdown,
.connection-dropdown,
.nav-user-dropdown {
    padding: 0px;
    margin: 0px;
}

.notification-title {
    font-size: 14px;
    color: #3d405c;
    text-align: center;
    padding: 8px 0px;
    border-bottom: 1px solid #e3e3e3;
    line-height: 1.5;
    background-color: #fffffe;
}

.notification-list {}

.notification-list .list-group-item {
    border-radius: 0px;
    padding: 12px;
    margin-top: -1px;
    border-left: transparent;
    border-right: transparent;
}

.notification-list .list-group-item.active {
    z-index: 2;
    color: #3d405c;
    background-color: #f7f7fb;
    border-color: #e1e1e7;
}

.notification-list .list-group-item-action:focus,
.list-group-item-action:hover {
    color: #404040;
    text-decoration: none;
    background-color: #f7f7fb;
}

.notification-list .list-group-item:last-child {}

.notification-info {}

.notification-info .notification-date {
    display: block;
    font-size: 11px;
    margin-top: 4px;
    text-transform: uppercase;
    color: #71748d;
}

.notification .dropdown-toggle::after,
.connection .dropdown-toggle::after,
.nav-user .dropdown-toggle::after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border: none;
}

.notification-list-user-img {
    float: left;
}

.notification-list-user-block {
    padding-left: 50px;
    font-size: 14px;
    line-height: 21px;
}

.notification-list-user-name {
    color: #5969ff;
    font-size: 14px;
    margin-right: 8px;
}

.list-footer,
.conntection-footer {
    font-size: 14px;
    color: #fff;
    text-align: center;
    padding: 10px 0px;
    line-height: 1.5;
    font-weight: 700;
    background-color: #5969ff;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
}

.list-footer a,
.conntection-footer a {
    color: #fff;
}

.list-footer a:hover,
.conntection-footer a:hover {
    color: #fff;
}

.indicator {
    content: '';
    position: absolute;
    top: 16px;
    right: 23px;
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 100%;
    background-color: #ef172c;
    animation: .9s infinite beatHeart;
    transform-origin: center;
}

@keyframes beatHeart {
    0% {
        transform: scale(0.9);
    }
    25% {
        transform: scale(1.1);
    }
    40% {
        transform: scale(0.9);
    }
    60% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(0.9);
    }
}


/* ------  Connection --------  */

.connection {}

.connection-dropdown {}

.connection-list {
    width: 300px;
    padding: 20px;
}

.connection-item {
    border-radius: 3px;
    line-height: 32px;
    text-align: center;
    padding: 12px 7px 4px;
    display: block;
    border: 1px solid transparent;
    color: #3d405c;
    font-size: 12px;
}

.connection-item img {
    width: 32px;
}

.connection-item:hover {
    background-color: #fff;
    border: 1px solid #e6e6f2;
}

.connection-item span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}


/* ----- User Nav Dropdown -----*/

.nav-user {}

.nav-user-dropdown {
    padding: 0px;
    min-width: 230px;
    margin: 0px;
}

.nav-user-name {}

.nav-user-info {
    background-color: #5969ff;
    line-height: 1.4;
    padding: 12px;
    color: #fff;
    font-size: 13px;
    border-radius: 2px 2px 0 0;
}

.nav-user-info .status {
    float: left;
    top: 7px;
    left: 0px;
}

.nav-user-dropdown {}

.nav-user-dropdown .dropdown-item {
    display: block;
    width: 100%;
    padding: 12px 22px 15px;
    clear: both;
    font-weight: 400;
    color: #686972;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    font-size: 13px;
    line-height: 0.4;
}

.nav-user-dropdown .dropdown-item:hover {
    background-color: #f7f7fb;
}

/*---- User icon sizes ---*/

.user-avatar-xxl {
    height: 128px;
    width: 128px;
}

.user-avatar-xl {
    height: 90px;
    width: 90px;
}

.user-avatar-lg {
    height: 48px;
    width: 48px;
}

.user-avatar-md {
    height: 32px;
    width: 32px;
}

.user-avatar-sm {
    height: 24px;
    width: 24px;
}

.user-avatar-xs {
    height: 18px;
    width: 18px;
}



.avatar {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    border: 2px solid #F7F9FA;
    background: #F7F9FA;
    color: #fff;
}


.media-attachment div.avatar {
    border: none;
}

.avatar.bg-primary {
    display: flex;
    align-items: center;
    justify-content: center;
}

.avatar.bg-primary i {
    font-size: 14px;
}


</style>
