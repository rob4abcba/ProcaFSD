const DigiNav = () => {
  return (
    <nav
      class="navbar navbar-dark navbar-expand-sm fixed-top"
      style={{ backgroundColor: "#bd5d38" }}
    >
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#Navbar"
        >
          <span class="navbar-toggler-icon"> </span>
        </button>

        <div class="collapse navbar-collapse" id="Navbar">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <span class="fa fa-home fa-lg"></span> About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#acads">
                <span class="fa fa-list fa-lg"></span>Academics
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#techskills">
                <span class="fa fa-list fa-lg"></span>Technical skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">
                <span class="fa fa-info fa-lg"></span> Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#achieves">
                <span class="fa fa-info fa-lg"></span> Achievements
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                <span class="fa fa-address-card fa-lg"></span> Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DigiNav;
