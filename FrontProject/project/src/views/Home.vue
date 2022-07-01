<template>
  <div class="home">
    <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>

<video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="../assets/food_video.mp4" type="video/mp4" id="video">
  </video>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
video{

    min-height: 100%;
  min-width: 1024px;
	
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
	
  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;

}
body {
  margin: 0;
  padding: 0;
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/148422/screencap-wheel.png) #fff;
  background-attachment: fixed;
  background-size: cover;
}


#video-background {
  position: fixed;
  right: 0; 
  bottom: 0;
  min-width: 100%; 
  min-height: 100%;
  width: auto; 
  height: auto;
  z-index: -100;
}

article {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

h1 {
  position: absolute;
  top: 30%;
  width: 100%;
  font-size: 3.6rem;
  letter-spacing: 3px;
  color: #fff;
  font-family: Oswald, sans-serif;
  text-shadow: 1px 1px 1px #16a085, 1px 1px 4px #2980b9;
  text-align: center;
}

button {
  position: relative;
  border-radius: 5px;
  border: 0;
  font-size: 1.5rem;
  font-family: Oswald, sans-serif;
  color: #fff;
  background-color: #2980b9;
  padding: .4em;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

button:hover {
  background-color: #3498db;
}
.hero {
  background-image: url("../assets/hero-bg.png");
  background-attachment: fixed;
  position: relative;
  height: 100vh;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .hero-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    h4 {
      text-transform: uppercase;
      font-size: 22px;
      padding-bottom: 4px;
    }
    h2 {
      font-size: 50px;
      @media (min-width: 550px) {
        font-size: 80px;
      }
    }
    hr:nth-child(2) {
      max-width: 365px;
      margin-bottom: 16px;
    }
    hr:nth-child(4) {
      height: 6px;
      background-color: #fff;
      border: none;
      max-width: 85px;
      margin-top: 16px;
    }
  }
}
</style>
