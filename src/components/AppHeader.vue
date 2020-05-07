<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" fixed = "top">
    <b-navbar-brand to = "/"><span class="linkline">Compro Category</span></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            
            <b-navbar-nav right>
              <b-nav-item target="_blank" href="https://ningenme.net"><span class="linkline">ningenMe.net</span></b-nav-item>
            </b-navbar-nav>

            <b-nav-item-dropdown text="Github" right>
              <b-dropdown-item target="_blank" href="https://github.com/ningenMe/compro-category-front"><span class="linkline">compro-category-front</span></b-dropdown-item>
              <b-dropdown-item target="_blank" href="https://github.com/ningenMe/ComproCategory.API"><span class="linkline">compro-category-api</span></b-dropdown-item>
            </b-nav-item-dropdown>
           
            <b-nav-item-dropdown text="Compro" right>
              <b-dropdown-item target="_blank" href="https://atcoder.jp/users/ningenMe"><span class="linkline">AtCoder</span></b-dropdown-item>
              <b-dropdown-item target="_blank" href="https://codeforces.com/profile/ningenMe"><span class="linkline">Codeforces</span></b-dropdown-item>
              <b-dropdown-item target="_blank" href="https://yukicoder.me/users/4145"><span class="linkline">yukicoder</span></b-dropdown-item>
              <b-dropdown-item target="_blank" href="https://csacademy.com/user/ningenMe"><span class="linkline">CSAcademy</span></b-dropdown-item>            
            </b-nav-item-dropdown>
            
          </b-navbar-nav>
        </b-collapse>
  </b-navbar> 
</template>

