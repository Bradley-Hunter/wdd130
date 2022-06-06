class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
          body {
              margin: 0 auto;
          }
          nav {
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color:  #0a0a23;
            padding: 10px 0 0 0;
          }
  
          .navul {
            list-style-type: none;
            text-decoration: none;
            display: grid;
            grid-template-columns: repeat(7, auto);
            padding: 0;
            
          }

          .navli {
            text-decoration: none;
          }

          .navimg {
            height: 40px;
            width: 38px;
          }
          
          .nav {
            font-weight: 700;
            margin: 0 25px;
            color: #fff;
            text-decoration: none;
          }
          
          .nav:hover {
            padding-bottom: 5px;
            box-shadow: inset 0 -2px 0 0 #fff;
          }
        </style>
        <header>
          <nav>
            <ul class="navul">
              <li class="navli"><a href="/index.html">
              <img class="navimg" src="/images/my_picture.jpg" alt="My Picture">
              </a></li>
              <li class="navli"><a class="nav" href="/aboutme/index.html">About Me</a></li>
              <li class="navli"><a class="nav" href="/ice/index.html">ICE Challenges</a></li>
              <li class="navli"><a class="nav" href="/wwr/index.html">Wet Ways Whitewater Rafting</a></li>
              <li class="navli"><a class="nav" href="/prove/positioning.html">Prove 06</a></li>
            </ul>
          </nav>
        </header>
      `;
    }
}

customElements.define('header-component', Header);