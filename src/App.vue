<template>
  <div id="app">
    <div id="page-top"></div>
        <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->  
    <div id="wrapper">
      <router-view name="sidebar"></router-view>
    
    <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
        <div id="content">

          <!-- navbar kalo ada -->

          <div class="container-fluid" id="app">
            <router-view/>
          </div>    
        </div>
      </div>    
    </div>    
  </div>    
</template>


