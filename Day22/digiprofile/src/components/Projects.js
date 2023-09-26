const Projects = () => {
  return (
    <>
      <div class="row" id="projects">
        <h1 class="display-4"> Projects</h1>
      </div>
      <div class="row" id="mycards">
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Project Title 1</h5>
              <p class="card-text">
                {" "}
                Praesentium expedita iste veniam non. Deserunt voluptatum
                quibusdam sunt! Recusandae quod vel sequi, consequatur ipsum
                voluptatibus cum reiciendis quia,{" "}
              </p>
              <a href="#" class="btn btn-primary">
                Launch Git
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Project Title 2</h5>
              <p class="card-text">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum quod excepturi dolores ad. Excepturi expedita incidunt
                mollitia architecto sit,
              </p>
              <a href="#" class="btn btn-primary">
                Launch Project
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Project Title 3</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem nostrum aliquid cupiditate totam. Quia unde adipisci
                voluptates, consectetur earum,{" "}
              </p>
              <a href="#" class="btn btn-primary">
                Launch Bitbucket
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
