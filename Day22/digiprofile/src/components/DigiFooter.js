const DigiFooter = () => {
  return (
    <>
      <footer class="footer text-center">
        <div class="container">
          <div class="row">
            {/* <!-- Footer Location--> */}
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h5 class=" mb-4">Location</h5>
              <p class="lead mb-0">
                27 Jane Street, Jane Doe
                <br />
                TS 5000027
              </p>
            </div>
            {/* <!-- Footer Social Icons--> */}
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h5 class=" mb-4">Around the Web</h5>
              <a class="btn btn-outline-light btn-social mx-1" href="#!">
                <i class="fab fa-fw fa-facebook-f"></i>
              </a>
              <a class="btn btn-outline-light btn-social mx-1" href="#!">
                <i class="fab fa-fw fa-twitter"></i>
              </a>
              <a class="btn btn-outline-light btn-social mx-1" href="#!">
                <i class="fab fa-fw fa-linkedin-in"></i>
              </a>
            </div>
            {/* <!-- Footer About Text--> */}
            <div class="col-lg-4">
              <h5 class="mb-4">About</h5>
              <p class="lead mb-0">
                This is a simple portfolio page of Jane Doe.
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Copyright Section--> */}
      <div class="copyright py-4 text-center text-white">
        <div class="container">
          <small>Copyright &copy; Jane Doe 2022</small>
        </div>
      </div>
    </>
  );
};

export default DigiFooter;
